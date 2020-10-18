const mongoose = require("mongoose");
const User = require("../models/UserModel");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const OutlookStrategy = require("passport-outlook").Strategy;
//const keys = require("./Keys");
const Admin = require("./Admin");
require("dotenv").config();

// for deploy
let path = "/";
if (process.env.NODE_ENV !== "production") {
  //for local setup
  path = "http://localhost:8080/";
}

// pass user.id to encrypt
passport.serializeUser((req, user, done) => {
  done(null, user);
});

// get user.id from cookie and decrypt
passport.deserializeUser((user, done) => {
  done(null, user);
});
// passport.deserializeUser((id, done) => {
//   console.log(id);
//   User.findById(id)
//     .then((user) => {
//       done(null, user);
//     })
//     .catch((e) => {
//       done(new Error("Failed to deserialize an user"));
//     });
// });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: path + "auth/login/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const { sub: googleId, name, email, picture, hd } = profile._json;

      // check the email is admin or not
      const adminEmail = Admin.emails.find(
        (adminEmail) => adminEmail === email
      );
      if (adminEmail) {
        const newUser = new User({
          googleId: googleId,
          name: name,
          email: email,
          picture: picture,
          admin: true,
        });

        // Check if database has already had this user
        User.findOneAndUpdate({ googleId: googleId }, { admin: true }).then(
          (currentUser) => {
            // if it has, don't save
            if (currentUser) {
              done(null, currentUser);
            } else {
              // if it does not, save the new user
              newUser.save().then((newUser) => {
                done(null, newUser);
              });
            }
          }
        );
      } else if (hd && hd == "uottawa.ca") {
        const newUser = new User({
          googleId: googleId,
          name: name,
          email: email,
          picture: picture,
        });

        // Check if database has already had this user
        User.findOneAndUpdate(
          { googleId: googleId },
          { picture: picture, name: name }
        ).then((currentUser) => {
          // if it has, don't save
          if (currentUser) {
            done(null, currentUser);
          } else {
            // if it does not, save the new user
            newUser.save().then((newUser) => {
              done(null, newUser);
            });
          }
        });
      } else {
        done(new Error("Invaild host domain!"));
      }
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.linkedinClientID,
      clientSecret: process.env.linkedinClientSecret,
      callbackURL: path + "auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    (accessToken, refreshToken, profile, done) => {
      const { id: linkedinId, emails, displayName, photos } = profile;
      const newUser = new User({
        linkedinId: linkedinId,
        email: emails[0].value,
        name: displayName,
        picture: photos[0].value,
        company: true,
      });

      User.findOneAndUpdate(
        { linkedinId: linkedinId },
        { picture: photos[0].value, name: displayName }
      ).then((currentUser) => {
        // if it has, don't save
        if (currentUser) {
          done(null, currentUser);
        } else {
          // if it does not, save the new user
          newUser.save().then((newUser) => {
            done(null, newUser);
          });
        }
      });
    }
  )
);

passport.use(
  new OutlookStrategy(
    {
      clientID: '437c66d0-bc95-4949-9e48-4be5009c1adf',
      clientSecret: 'taW.ba1_Dqx_CF73d60r.SjC0B_Ylf3Jc_',
      callbackURL: path + "auth/outlook/callback",
      tenant: 'f8cdef31-a31e-4b4a-93e4-5f571e91255a',
      useCommonEndpoint: "https://login.microsoftonline.com/common"
    },
    function (accessToken, refreshToken, profile, done) {
      var user = {
        outlookId: profile.id,
        name: profile.DisplayName,
        email: profile.EmailAddress,
        accessToken: accessToken,
      };
      if (refreshToken) user.refreshToken = refreshToken;
      // if (profile.MailboxGuid) user.mailboxGuid = profile.MailboxGuid;
      if (profile.Alias) user.alias = profile.Alias;  
      User.findOrCreate(user, function (err, user) {
        return done(err, user);
      });
    }
  )
);

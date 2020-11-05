const mongoose = require("mongoose");
const User = require("../models/UserModel");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const OIDCStrategy  = require("passport-azure-ad").OIDCStrategy;
const Admin = require("./Admin");
//const graph = require('./outlookconfig/Graph');
//const  { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');
require("dotenv").config();
// var session = require('express-session');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


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
        picture: photos.length>0 ? photos[0].value:'',
        company: true,
      });

      User.findOneAndUpdate(
        { linkedinId: linkedinId },
        { picture: photos.length>0 ? photos[0].value:'', name: displayName }
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
  new OIDCStrategy (
    {
<<<<<<< HEAD
      clientID: '7626403e-da94-417a-aadf-c66ca4a7a704',
      // clientSecret: '_qwqw0-y6Rv6_Flqces2e4O7Ubs.Rmu4zO',
      callbackURL: path + "auth/outlook/callback",
      // tenant: 'f8cdef31-a31e-4b4a-93e4-5f571e91255a',
      // useCommonEndpoint: "https://login.microsoftonline.com/common",
      state: true,
      pkce: true,
      enableProof: true,
    },
    function (accessToken, refreshToken, profile, done) {
      var user = {
        outlookId: profile.id,
        name: profile.DisplayName,
        email: profile.EmailAddress,
        accessToken: accessToken,
      };
      if (refreshToken) user.refreshToken = refreshToken;
      if (profile.MailboxGuid) user.mailboxGuid = profile.MailboxGuid;
      if (profile.Alias) user.alias = profile.Alias;  
      User.findOrCreate(user, function (err, user) {
        return done(err, user);
      });
=======
      clientID: process.env.OAUTH_clientID,
      clientSecret: process.env.OAUTH_clientSecret,
      identityMetadata:`${process.env.OAUTH_AUTHORITY}${process.env.OAUTH_ID_METADATA}`,
      responseType: "code id_token",
      responseMode: "form_post",
      redirectUrl: process.env.OAUTH_REDIRECTURI,
      allowHttpForRedirectUrl :true,
      validateIssuer :true,
      issuer:process.env.OAUTH_ISSUER,
      passReqToCallback :false,
      scope:process.env.OAUTH_SCOPES.split(' '),
    },
    signInComplete  
  ));

  //commenting for now, maybe useful in future.
  // Configure simple-oauth2
  // const oauth2credentials = {
  //   client: {
  //     id: process.env.OAUTH_clientID,
  //     secret: process.env.OAUTH_clientSecret
  //   },
  //   auth: {
  //     tokenHost: process.env.OAUTH_AUTHORITY,
  //     authorizePath: process.env.OAUTH_AUTHORIZE_ENDPOINT,
  //     tokenPath: process.env.OAUTH_TOKEN_ENDPOINT
  //   }
  // }
  // const oauth2 = new AuthorizationCode(oauth2credentials);

  async function signInComplete(iss, sub, profile, accessToken, refreshToken, params, done) {
    
    if (!profile.oid) {
      return done(new Error("No OID found in user profile."));
>>>>>>> 953565373350628e6dff6e6c8df5adb6d712cf1b
    }
  
    try{
      //commenting graph for now.
      // const ouser = await graph.getUserDetails(accessToken);
      // if (ouser) {
      //   console.log("USERRR:::",ouser);
      //   // Add properties to profile
      //   profile['email'] = ouser.mail ? ouser.mail : ouser.userPrincipalName;
      // }
      const {oid:outlookId, name, email, tid } = profile._json;

      // check the email is admin or not
      const adminEmail = Admin.emails.find(
        (adminEmail) => adminEmail === email
      );
      if (adminEmail) {
        const newUser = new User({
          outlookId: outlookId,
          name: name,
          email: email,
          //picture: picture,
          admin: true,
        });

        // Check if database has already had this user
        User.findOneAndUpdate({ outlookId: outlookId }, { admin: true }).then(
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
      } else if (tid && tid == process.env.OAUTH_TID)
       {
        const newUser = new User({
          outlookId: outlookId,
          name: name,
          email: email,
         // picture: picture,
        });

        // Check if database has already had this user
        User.findOneAndUpdate(
          { outlookId: outlookId },
          { //picture: picture, 
            name: name }
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
       else {
        done(new Error("Invaild host domain!"));
      }
    } catch (err) {
      return done(err);
    }
    // Create a simple-oauth2 token from raw tokens, helpfull while using graphs.
    //let oauthToken = oauth2.accessToken.create(params);
    // Save the profile and tokens in user storage
    //users[profile.oid] = { profile, oauthToken };
    //return done(null, users[profile.oid]);
}
  
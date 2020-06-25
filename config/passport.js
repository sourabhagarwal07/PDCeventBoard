const mongoose = require("mongoose");
const User = mongoose.model("users");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../config/keys.js");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
  .catch(e => {
    done(new Error("Failed to deserialize an user"));
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/twitter/redirect",
      
    },
    async(accessToken, refreshToken, profile, done)=>{
			var userData = {
				email: profile.emails[0].value,
				name: profile.displayName,
				token: accessToken
      };
      // create new user if the database doesn't have this user
      if (!userData) {
        const newUser = await new User({
          name: profile._json.name,
          screenName: profile._json.screen_name,
          twitterId: profile._json.id_str,
          profileImageUrl: profile._json.profile_image_url
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, userData);
    }
  )
);

const passportLinkedin = require("passport");
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const keys = require("./Keys");
const Admin = require("./Admin");

passportLinkedin.serializeUser(function(user, done) {
	done(null, user);
});

passportLinkedin.deserializeUser(function(user, done) {
	done(null, user);
});

passportLinkedin.use(new LinkedInStrategy(
  {
    clientID: keys.linkedinClientID,
    clientSecret: keys.linkedinClientSecret,
    callbackURL: keys.callbackURL,
    scope: keys.scope,
    },function(accessToken, refreshToken, profile, done) {
        var userData = {
            email: profile.emails[0].value,
            name: profile.displayName,
            token: accessToken
        };
        done(null, userData);
    }
)
);

module.exports = passportLinkedin;
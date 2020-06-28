const router = require("express").Router();
const passport = require("passport");

// check if user has logged in, if not, jump to login page
const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    next();
  }
};

router.get('/', (req, res) => {
  res.send("You are not log in!");
});

router.get('/success', authCheck, (req, res) => {
  res.send("Welcome")
});

router.get('/failed', (req, res) => {
  res.send("You are failed to log in!");
});

router.get('/login',
    passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/login/callback',
    passport.authenticate('google', {failureRedirect: '/failed'}),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");

});

module.exports = router;

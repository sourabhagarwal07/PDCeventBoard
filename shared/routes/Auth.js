const router = require("express").Router();
const passport = require("passport");
let user = {};

// for deploy
let path = "/";
if (process.env.NODE_ENV !== "production") {
  //for local setup
  path = "http://localhost:3000";
}

router.get(
  "/login",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  }),
  (req, res) => {
    console.log("come in to login");
  }
);

router.get(
  "/login/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failed",
    successRedirect: path,
    failureFlash: true,
  })
);

router.get("/failed", (req, res) => {
  res.send("You are failed to log in!");
});

router.get("/login/success", (req, res) => {
  if (req.user !== undefined) {
    res.json({
      authenticated: true,
      user: req.user,
      cookies: req.cookies,
      message: "Authenticated",
    });
  } else {
    res.json({
      authenticated: false,
      cookies: req.cookies,
      message: "Not Authenticate",
    });
  }
});

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect(path);
});

//add linkedin login
router.get(
  "/linkedin",
  passport.authenticate("linkedin", {
    scope: ["r_emailaddress", "r_liteprofile"], //,"r_fullprofile"],
    prompt: "select_account",
    state: "SOME STATE",
  }),
  function (req, res) {
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  }
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    failureRedirect: "/auth/failed",
    successRedirect: path,
  })
);

//outlook
router.get('/outlook', 
  passport.authenticate('azuread-openidconnect', { failureRedirect: '/auth/failed' }),
  function(req, res) {
    console.log('Login outlook was called');
    res.redirect(path);
});
 
router.post('/outlook/callback',
  passport.authenticate('azuread-openidconnect', { failureRedirect: '/auth/failed' }),
  function(req, res) { 
    res.redirect(path);
  });
 

module.exports = router;

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
//addd linkedin login
router.get(
	"/auth/linkedin",
	passport.authenticate("linkedin", { scope: ["profile", "email"] })
);


router.get(
	"/auth/linkedin/callback",
	passport.authenticate("linkedin", { failureRedirect: "/auth/failed", session: false , successRedirect:path}),
	function(req, res) {
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
		// var token = req.user.token;
    // res.redirect("http://localhost:3000?token=" + token);
    // console.log(token);
	}
);

module.exports = router;

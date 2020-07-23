const express = require("express");
const database = require("./shared/config/Database");
const morgan = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passportSetup = require("./shared/config/Passport");
const passportLinkedin = require("./shared/config/PassportLinkedin");
const passport = require("passport");
const keys = require("./shared/config/Keys");
const authRoutes = require("./shared/routes/Auth");
const projectRoutes = require("./shared/routes/ProjectRoute");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080; //Step 1

if (process.env.NODE_ENV === "production") {
  console.log("dir name", __dirname);
  app.use("/", express.static(path.join(__dirname, "/client/build")));
}

app.all("*", function (req, res, next) {
  if (process.env.NODE_ENV !== "production") {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");

  if (req.method == "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

// use cookie-session to encrypt user.id
app.use(
  cookieSession({
    name: "session",
    keys: [keys.cookieKey],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

// use application/json to submit data
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// initialize passport
app.use(passportLinkedin.initialize());

app.get(
  "/auth/linkedin",
  passportLinkedin.authenticate("linkedin", { state: "SOME STATE" }),
  function (req, res) {
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  }
);

app.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.use(passportLinkedin.session());

// log output
app.use(morgan("tiny"));

// auth router
app.use("/auth", authRoutes);
app.use("/", projectRoutes);

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "the path to your react project", "index.html")
  );
});

app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));

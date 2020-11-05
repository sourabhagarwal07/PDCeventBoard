const express = require("express");
const database = require("./shared/config/Database");
const morgan = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passportSetup = require("./shared/config/Passport");
const passport = require("passport");
const authRoutes = require("./shared/routes/Auth");
const projectRoutes = require("./shared/routes/ProjectRoute");
const studentRoutes = require("./shared/routes/StudentRoute");
const uploadRoutes = require("./shared/routes/Upload");
const eventRoutes = require("./shared/routes/EventRoute")
const userRoutes = require("./shared/routes/UserRoute")
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
require('dotenv').config()


const app = express();

const PORT = process.env.PORT || 8080; //Step 1

if (process.env.NODE_ENV === "production") {
  console.log("dir name", __dirname);
  app.use("/", express.static(path.join(__dirname, "/client/build")));
}

app.all("*", function (req, res, next) {
  if (process.env.NODE_ENV !== "production") {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");

  // res.header('Access-Control-Allow-Credentials', true);
  // res.header('Access-Control-Allow-Origin', req.headers.origin);
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// use cookie-session to encrypt user.id
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.cookieKey],
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
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());


// log output
app.use(morgan("tiny"));

// auth router
app.use("/auth", authRoutes);
app.use("/", projectRoutes);
app.use("/student", studentRoutes);
app.use("/file", uploadRoutes);
app.use("/", eventRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));

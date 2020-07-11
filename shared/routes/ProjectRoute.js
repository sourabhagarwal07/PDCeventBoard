const Project = require("../models/ProjectModel");

const router = require("express").Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    console.log(req.user);
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated",
    });
    // res.redirect('/auth/login');
  } else {
    next();
  }
};

router.post("/project", (req, res) => {
  let newProject = req.body;
  Project.create(newProject, (error, doc) => {
    if (error) {
      console.log(error);
    }
    res.send("added successfully");
  });
});

router.get("/project", (req, res) => {
  Project.find({}, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.get("/project/:id", (req, res) => {
  Project.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

router.get("/", authCheck, (req, res) => {
  // console.log(res.status(200).json());
  console.log(req.user);
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies,
  });
  console.log("you logged in");
});

module.exports = router;

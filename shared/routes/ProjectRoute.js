const Project = require("../models/ProjectModel");

const router = require("express").Router();

// create a new project
router.post("/project", (req, res) => {
  let newProject = req.body;
  console.log(req);
  Project.create(newProject, (error, doc) => {
    if (error) {
      console.log(error);
    }
    res.send("added successfully");
  });
});

// update a project by id, if does not have, create a new one
router.post("/project/manage/:id", (req, res) => {
  let newProject = req.body;
  let id = req.params.id;
  Project.findOneAndUpdate(
    { _id: id },
    newProject,
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      res.send("added successfully");
    }
  );
});

// delete a project by id (set isDeleted to true)
router.post("/project/delete/:id", (req, res) => {
  let isDeleted = req.body;
  Project.findByIdAndUpdate(req.params.id, isDeleted, (error, data) => {
    if (error) {
      console.log(error);
    }
    //this data here is not received on front end immediately. need to fix this bug.
    res.send(data);
  });
});

// get project list
router.get("/project", (req, res) => {
  Project.find({}, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

// get one project by id
router.get("/project/:id", (req, res) => {
  Project.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

// get project list by user id
router.get("/project/user/:id", (req, res) => {
  let userId = req.params.id;
  Project.find({ "user._id": userId }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

module.exports = router;

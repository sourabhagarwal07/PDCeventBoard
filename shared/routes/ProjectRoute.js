const Project = require("../models/ProjectModel");

const router = require("express").Router();

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

module.exports = router;

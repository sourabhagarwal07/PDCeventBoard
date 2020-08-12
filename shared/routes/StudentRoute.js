const ApplyForm = require("../models/StudentApplyModel");

const router = require("express").Router();

// create a new application
router.post("/apply", (req, res) => {
  let newApply = req.body;
  ApplyForm.find(
    {
      projectId: newApply.projectId,
      email: newApply.email,
    },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      if (data.length !== 0) {
        res.send("You have already applied");
      } else {
        ApplyForm.create(newApply, (error, doc) => {
          if (error) {
            console.log(error);
          }
          res.send("added successfully");
        });
      }
    }
  );
});

router.get("/apply/:id", (req, res) => {
  let projectId = req.params.id;
  ApplyForm.find({ projectId: projectId }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
});

module.exports = router;

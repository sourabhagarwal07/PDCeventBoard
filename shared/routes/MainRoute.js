const router = require('express').Router();
const Data = require("../models/DataModel");

const authCheck = (req, res, next) => {
  if (!req.user) {
    console.log(req.user);
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
    // res.redirect('/auth/login');
  } else {
    next();
  }
};


router.get('/', authCheck, (req, res) => {
  // console.log(res.status(200).json());
  console.log(req.user);
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
  console.log("you logged in");
});

router.post('/senddata',(req,res)=>{
  const data=req.body;
  const newData = new Data(data);
  newData.save((error)=>{
    if(error){
      res.status(500).json({msg:"Internal server error, unable to save data"});
      return;
    }
    //data saved
    return res.json({
      msg:'Data saved successfully!!'
    });
  });
  });
  router.get('/showdata',(req,res)=>{
    Data.find({  })
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', error);
    });
    });
  
module.exports = router;
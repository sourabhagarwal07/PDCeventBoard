const router = require('express').Router();
const imageModal = require("../models/PictureModal");
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const db = require("../config/Database");
const methodOverride = require('method-override');
require('dotenv').config()

var redirectpath="/";
  if (process.env.NODE_ENV !== "production") {
    //for local setup
    redirectpath= "http://localhost:3000";
  }
  
  // Init gfs
  let gfs;
  
  db.on('connected', () => {
    console.log('Mongoose is connected!');
    gfs = Grid(db.db,mongoose.mongo);
    gfs.collection('uploads');
    //console.log("gfs::",gfs);
  });
const storage = new GridFsStorage({
    url: process.env.mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err)
          }
          const filename = file.originalname
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads',
            metadata:{
            eventName:req.body.eventName,
            eventDate:req.body.eventDate
            }
          }
          resolve(fileInfo);
        });
      });
    },
  });
  
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.post("/uploadImage",upload.single('imageData'),(req, res, next) => {
        if(!req.file) 
            return res.send('Please upload a file')
        else{
             console.log("file info::",req.file);
             res.redirect(redirectpath);
        }
        // const newImage = new imageModal({
        //     eventDate:req.body.eventDate,
        //     eventName:req.body.eventName,
        //     imageName:req.body.imageName,
        //     imageData:`${req.file.id}`//{$toObjectId: req.file.id}
        // });
        // //file.id=uploads.chunks.files_id and files.id

        // console.log("new image::",newImage)
        // // newImage.save((error)=>{
        // //     if(error){
        // //       res.status(500).json({msg:"Internal server error, unable to save data"});
        // //       return;
        // //     }
        // //     //data saved
        // //     return res.json({
        // //       msg:'Data saved successfully!!'
        // //     });
        // //   });
        // newImage.save()
        //     .then((result) => {
        //         console.log(result);
        //         res.status(200).json({
        //             success: true,
        //             document: result
        //         });
        //     })
        //     .catch((err) => next(err));
    });

    // @desc  Display all files in JSON
router.get('/displayImages', (req, res) => {
  console.log("gone to get images");
  if(!gfs) {
    console.log("some error occured, check connection to db");
    res.send("some error occured, check connection to db");
    process.exit(0);
  }
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files available'
      });
    }
    else{
    const f =files
    .map(file=>{
      if(file.contentType === 'image/jpeg' || imageData.contentType === 'image/png' || imageData.contentType === 'image/jpg' || imageData.contentType === 'image/svg+xml'){
        file.isImage = true;
      }
      else{
        file.isImage = false;
      }
      return file;
    })
    .sort((a,b)=>{
        return(
          new Date(b["uploadDate"]).getTime() -
          new Date(a["uploadDate"]).getTime()
        );
    });
    // Files exist
    return res.status(200).json({files:f});
  }
  });
});
router.get('/getImagesByDate/:evntDate', (req, res) => {
  console.log("gone to get images");
  if(!gfs) {
    console.log("some error occured, check connection to db");
    res.send("some error occured, check connection to db");
    process.exit(0);
  }
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files available'
      });
    }
    else{
    const f =files
    .map(file=>{
      // if(file.metadata.eventDate ===req.params.evntDate){
      //   file.isvalidEvent = true;
      // }
      // else{
      //   file.isvalidEvent = false;
      // }
      //return (file.isvalidEvent === true);
        return file//.metadata.eventDate ===req.params.evntDate
    })
    .filter(file=>file.metadata.eventDate===req.params.evntDate)
    // Files exist
    return res.status(200).json({files:f});
  }
  });
});
router.get('/getVariousEvents', (req, res) => {
  console.log("gone to get events");
  if(!gfs) {
    console.log("some error occured, check connection to db");
    res.send("some error occured, check connection to db");
    process.exit(0);
  }
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files available'
      });
    }
    else{
    const Events =files
    .map(file=>{
      if(file.contentType === 'image/jpeg' || imageData.contentType === 'image/png' || imageData.contentType === 'image/jpg' || imageData.contentType === 'image/svg+xml'){
        file.isImage = true;
      }
      else{
        file.isImage = false;
      }
      return file.metadata;
    })
    // Files exist
    return res.status(200).json({files:Events});
  }
  });
});

/*router.post('/uploadImages', upload.array('imagesData', 10), (req, res, next) => {
    if(!req.files) 
    return res.send('Please upload a file')
    console.log("files:::",req.files);
    const newImage = new imageModal({
        eventDate:req.body.eventDate,
        eventName:req.body.eventName,
        imageName:req.body.imageName//,
       // imageData:`${req.file.id}`//{$toObjectId: req.file.id}
    });
    //file.id=uploads.chunks.files_id and files.id

    console.log("new image::",newImage)
    newImage.save()
        .then((result) => {
            console.log(result);
            res.status(200).json({
                success: true,
                document: result
            });
        })
        .catch((err) => next(err));
});*/

// @route GET /image/:filename
// @desc Display Image
router.get('/image/:filename', (req, res) => {
  console.log("getting image exact");
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/file/:id', (req, res) => {
  gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
    return res.json({msg:'file deleted'});
  });
});

module.exports = router;
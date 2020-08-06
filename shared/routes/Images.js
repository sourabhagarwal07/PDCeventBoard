const router = require('express').Router();
const imageModal = require("../models/PictureModal");
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
require('dotenv').config()

var redirectpath="/";
  if (process.env.NODE_ENV != "production") {
    //for local setup
    redirectpath= "http://localhost:3000";
  }

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

// router.post('/uploadImages', upload.array('imagesData', 10), (req, res, next) => {
//     if(!req.files) 
//     return res.send('Please upload a file')
//     console.log("files:::",req.files);
//     const newImage = new imageModal({
//         eventDate:req.body.eventDate,
//         eventName:req.body.eventName,
//         imageName:req.body.imageName//,
//        // imageData:`${req.file.id}`//{$toObjectId: req.file.id}
//     });
//     //file.id=uploads.chunks.files_id and files.id

//     console.log("new image::",newImage)
//     newImage.save()
//         .then((result) => {
//             console.log(result);
//             res.status(200).json({
//                 success: true,
//                 document: result
//             });
//         })
//         .catch((err) => next(err));
// });

module.exports = router;
const express = require('express');

const router = express.Router();

const BlogPost = require('../models/BlogPost'); 

router.get('/api', (req, res) => {
    BlogPost.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error', error);
        })
        
})

router.post('/api/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, internal server errors'})
            return;
        }
        return res.json({
            msg: "We received your data!!!"
        })
    });
})

router.get('/api/name', (req, res) => {
    const data = {
        username: 'king',
        age: 5
    }
    res.json(data);
})

module.exports = router;
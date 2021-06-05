const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('../models/post')
require('../models/user')
const {authentication} = require('../middleware/authmiddleware')

const Post = mongoose.model('Posts')
const User = mongoose.model('User')

router.put('/posts/:post/comment',authentication ,(req, res) => {
    const postid = req.params.post
    Post.findOneAndUpdate(postid, {
        $push: { comments: { userid:req.authuserdata._id ,body:req.body.body}}
    }, {
        new:true
    }).exec((error, result) => {
        if (error)
            return res.status(433).json({ error })
       
        return res.status(200).json({result})
    })
  
  
})
router.put('/posts/:post/comment',authentication ,(req, res) => {
    const postid = req.params.post
    Post.findOneAndUpdate(postid, {
        $pull: { comments: { userid:req.authuserdata._id ,body:req.body.body}}
    }, {
        new:true
    }).exec((error, result) => {
        if (error)
            return res.status(433).json({ error })
       
        return res.status(200).json({result})
    })
  
  
})

module.exports = router
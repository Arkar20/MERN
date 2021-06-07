const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('../models/post')
require('../models/user')
const {authentication} = require('../middleware/authmiddleware')

const Post = mongoose.model('Posts')
const User = mongoose.model('User')

router.put('/posts/:post/comment',authentication ,async(req, res) => {
    const postid = req.params.post

    const post = await Post.findByIdAndUpdate(postid, {
        $push:{comments:{ userid:req.authuserdata._id ,body:req.body.body}}
    }, { new: true }).exec((error, result) => {
        if (error)
            return res.status(500).end()
        
        return res.status(200).json({result})
    })
    
   
  
})


module.exports = router
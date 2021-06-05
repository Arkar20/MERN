const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('../models/post')
require('../models/user')
const {authentication} = require('../middleware/authmiddleware')
const Post = mongoose.model('Posts')
const User = mongoose.model('User')


router.put('/users/:user/follow',authentication ,(req, res) => {
    const userid = req.params.user
   
    if (userid == req.authuserdata._id)
        return res.status(500).json({ error: "Cannot Follow Youself" })
  
    User.findOneAndUpdate(userid, {
        $push: { followers: { followedid:req.authuserdata._id}}
    }, {
        new:true
    }).exec((error, result) => {
        if (error)
            return res.status(433).json({ error })
       
        return res.status(200).json({result})
    })
  
})
router.put('/users/:user/unfollow',authentication ,(req, res) => {
    const userid = req.params.post
    if (userid === req.authuserdata._id)
        return res.status(500).json({ error: "You are requesting invalid request" })
    
    User.findOneAndUpdate(userid, {
        $pull: { followers: { followedid:req.authuserdata._id}}
    }, {
        new:true
    }).exec((error, result) => {
        if (error)
            return res.status(433).json({ error })
       
        return res.status(200).json({result})
    })
  
})


module.exports = router
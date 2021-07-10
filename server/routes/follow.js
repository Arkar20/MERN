const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('../models/post')
require('../models/user')
const {authentication} = require('../middleware/authmiddleware')
const Post = mongoose.model('Posts')
const User = mongoose.model('User')


router.put('/users/:user/follow', authentication, async (req, res) => {
    console.log(req.authuserdata._id)// this has to be increased in following
    const userid = req.params.user//this has to be increased in follower

    console.log(req.authuserdata._id)
    
    if (userid == req.authuserdata._id)
        return res.status(500).json({ error: "Cannot Follow Youself" })
  
  
    const follower = await User.findById(userid)
    !follower.followers.includes(req.authuserdata._id)
        && (
        //add new follower
    User.findOneAndUpdate(userid, {
        $push: { followers: { followedid:req.authuserdata._id}}
    }, {
        new:true
    }).exec((error, result) => {
        if (error) {
            return res.status(500).json({error})
        }
    })
    )
    

    const following= await User.findById(req.authuserdata._id)
    following.following.includes(userid)
    &&(
    //add new following 
  User.findByIdAndUpdate(req.authuserdata._id, {
        $push: { following: { followingid:userid }}
    }, {
        new:true
  }).exec((err, result) => {
      return res.status(200).json({result})
     })
    )

    

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
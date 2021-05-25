const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const {authentication} = require('../middleware/authmiddleware')
const Post=mongoose.model('Posts')

router.get('/posts',async (req, res) => {
   
    const posts = await Post.find({}).populate('postowner',"_id name")
    
    return res.status(200).json({posts})
    
})

router.get('/posts/:post', authentication, async (req, res) => {

   const posts=(await Post.findById(req.params.post)).populate('postowner')
    if (!posts)
        return res.status(422).json({message:"something went wrong"})
        
    return res.status(200).json({posts})
    
})

router.get('/posts/user/:user', authentication, async (req, res) => {

    const posts = await Post.find({ postowner: req.params.user }).populate('postowner')
    if (!posts)
        return res.status(422).json({message:"something went wrong"})
        
    return res.status(200).json({posts})
    
})

router.post('/posts', authentication, async (req, res) => {
    
    const { title, body } = req.body

    if (!title || !body)
     return res.status(433).json({error:"These fields should not be empty"})
        
    const createPost = new Post({ title, body,postowner:req.authuserdata})
     const post= await createPost.save()

    return res.status(200).json({post})


})


module.exports =router
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {authentication}=require('../middleware/authmiddleware')
const router = express.Router()
const User = mongoose.model('User')

router.get('/authtest',authentication ,(req,res) => {
   return  res.json({ message:"auth works"})
})

router.get('/', (req, res) => {
   res.send('auth router working')
})

router.post('/signup', async (req, res) => {
    let { name, email, password } = req.body
    
    let hashedpassword = await bcrypt.hash(password, 12)

    //validatin on null
    if(!name || !email || !password)
            return res.status(422).json({error:" fields cannot be empty"})
        
    //validation on duplicaiton 
    const findemail = await User.findOne({ email })
    if (findemail) {
            return res.status(422).json({ error: "Email already exists" })
     }
     const user = new User({email, name, password:hashedpassword})
    user.save().then(() => {
        res.status(200).json({message:"Save Successfully"})
    }).catch(err => {
        console.log(err)
    })
})

//sigin
router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    
    // validaion on null
    if (!email || !password)
        return res.status(422).json({ error: "Filed cannot be null" })
    
   const dbuser= await User.findOne({email})
    
    const pwcorrect =await bcrypt.compare(password,dbuser.password )
    
    if (pwcorrect) {
        const jwttoken = jwt.sign({ _id: dbuser._id }, "tokenit")
        
        return  res.status(200).json({token:jwttoken,authuser:{_id:dbuser._id,name:dbuser.name,email:dbuser.email}})
    }
    return res.status(400).json({error:"incorrect password"})
    
})

module.exports = router
const jwt= require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')


const authentication = async (req, res, next) => {
    
    const { authorization } = req.headers
    console.log(authorization)
    if (!authorization)
            return res.status(401).json({ message: "Please login first." })
        
    const token = authorization.replace('Bearer ', '');
    
    const jwttoken = jwt.verify(token, 'tokenit')

    if (!jwttoken)
        return res.status(500).json({message:"Invalid"})
    
        let userisauth=await User.findById(jwttoken._id)

    if (!userisauth)
        return res.status(401).json({ message: "Please Login First." })
    
    req.authuserdata=userisauth
    next()


}
module.exports = {authentication}
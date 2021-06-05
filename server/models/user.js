const mongoose = require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const userSchema = mongoose.Schema({
    name: {
       type: String,
        require:true
    },
    email: {
       type: String,
        require:true
    },
    password: {
       type: String,
        require:true
    },
    followers: [{
      followedid: {
        type: ObjectId,
        ref: "User",
        
      }
    }]
})
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
mongoose.model('User',userSchema)
const mongoose = require('mongoose')

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
    }
})
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
mongoose.model('User',userSchema)
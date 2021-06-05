const mongoose = require('mongoose')
const {ObjectId }=mongoose.Schema.Types

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default:null
    },
    likes: [
        {type:ObjectId,ref:"User"}
    ],
    comments: [
        {
            body: {
                type: String,
                required: true
            },
            userid: {
                type: ObjectId,
                ref:"User"
            }
      }  
    ],
    postowner: {
        type: ObjectId,
        ref: "User",
        
    }
   
})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

mongoose.model("Posts",postSchema)
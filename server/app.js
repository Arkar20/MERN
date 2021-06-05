const express = require('express')
const app = express()
const mongoose=require('mongoose')
const PORT = 5000
const commentRoute=require('./routes/comment')
const followRoute=require('./routes/follow')

mongoose.connect('mongodb+srv://arkar:ooE8r1O3eyxMjZpp@cluster0.m6cfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
    )

mongoose.connection.on('connected', () => {
    console.log('connected to mongodb')
})
mongoose.connection.on('error', (err) => {
    console.log(err)
})


require('./models/user')
mongoose.model('User')


require('./models/post')
mongoose.model('Posts')

app.use(express.json())
// app.use(express.urlencoded());

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use('/api',commentRoute)
app.use('/api', followRoute)


app.listen(PORT, () => {
    console.log('server is running on port ',PORT)
})
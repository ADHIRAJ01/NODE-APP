const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/REGISTRATION",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connection successful WITH REGISTRATION ");
}).catch((err) =>{
    console.log("error = ",err.message)
})
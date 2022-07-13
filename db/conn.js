const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://adhiraj:adhiraj@cluster0.gfbug.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connection successful WITH REGISTRATION ");
}).catch((err) =>{
    console.log("error = ",err.message)
})

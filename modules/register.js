const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    firstname: {
        type: 'string',
        required: true
    },
    lastname: {
        type: 'string',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    confirmPassword: {
        type: 'String',
        required: true
    }      

})
//schema created 

//now create collection

const Register = new mongoose.model("Register", registerSchema);

console.log("REGISTER MODULE");

module.exports = Register ;
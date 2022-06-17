const mongoose = require('mongoose');

const adminScheme = mongoose.Schema({
        firstname: {
            type: 'string',
        },
        lastname: {
            type: 'string',
        },
        phone: {
            type: 'Number',
            // required: true
        }
})

const Admin = new mongoose.model('Admin', adminScheme);

console.log("ADMIN MODULE");

module.exports = Admin;
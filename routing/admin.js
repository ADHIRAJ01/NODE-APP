const express = require('express');
const adminRoute = express.Router();



const admindb = require('../modules/admin');

adminRoute.route('/')
    .all((req, res,next) => {
        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res) => {
        res.send("admin page");
    }   
);


module.exports = adminRoute;
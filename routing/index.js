const express = require('express');
const indexroute= express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

indexroute.use(bodyParser.json());

indexroute.route('/')
    .all((req,res,next) => {
        res.statusCode= 200;
        res.url="/home";
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req,res)=>{
        // document.setcookie = 'name=adhiraj;expires=3000';
        // res.sendFile(path.join(__dirname,'../pages/index.html'));
        fs.createReadStream(path.join(__dirname,'../pages/index.html')).pipe(res);
        // console.log(path.join(__dirname,'../pages/index.html'));
    })
    .post((req,res)=>{
      /*MAKE DATABSE CONNECTION FOR FORM */
    })

    

module.exports = indexroute;
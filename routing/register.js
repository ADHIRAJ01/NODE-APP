const express = require('express');
const registerRouter = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
// const hash=require('bcrypt');



const registerSch = require("../modules/register");
const adminSch = require("../modules/admin");

registerRouter.use(bodyParser.json());

registerRouter.route('/')
    .all((req,res,next)=>{
    res.status(200);
    res.setHeader('Content-Type', 'text/html');
    next();
    })

    .get((req, res)=>{
        res.sendFile(path.join(__dirname,'../pages/register page.html'));
    })

    //create new user
    .post((req, res)=>{
        const newuser = new registerSch({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            confirmPassword: req.body.confirmpassword
        }).save(function(err, user) {
            if (err) return console.error("error is ",(err)+" ",err.message);
            console.log("successfully saved");
        });

        const adminuser = new adminSch({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            confirmPassword: req.body.confirmpassword
        }).save(function(err, user) {
            if (err) return console.error("error is ",(err)+" ",err.message);
            console.log("successfully saved");
        });

        console.log("body is ",(req.body));

        res.redirect("/login");                         //used for redirecting purpose

        // registerSch=newuser.save();
        
       
        
        
    })


    .delete((req, res)=>{
        res.send("deleted");
    });

module.exports = registerRouter;
    



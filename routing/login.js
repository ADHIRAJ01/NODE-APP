const express = require('express');
const loginrouter = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

const Register = require("../modules/register");        //taking database
const fs = require('fs');


loginrouter.use(bodyParser.json());


loginrouter.route('/')
    .all((req,res,next)=>{
    res.status(200);
    res.setHeader('Content-Type', 'text/html' , 'utf8');
    next();
    })

    .get((req, res)=>{
        res.sendFile(path.join(__dirname,'../pages/login page.html'));
        console.log("body   ",req.body.username);
    })

    .post(async(req, res)=>{

        //AUTHORIZATION


        try{
            const email = req.body.email;
            const fname = req.body.email;
            const password = req.body.password;

            console.log(`${email} ${password}`); 
            // SINCE WE ARE reffering to register: COLLECTION NAME   in data base we use that here 

            //finding user from data base 
            const useremail = await Register.findOne({ firstname: fname});
            console.log(useremail);
            
            if(useremail.password === password){
                console.log("inside password if");
                res.status(200);
                // fs.createReadStream(path.join(__dirname,"../pages/index.html")).pipe(res);
                // document.setcookie = "name=username";
                // res.writeHead(200,{
                //     "Set-Cookie": "name=username",
                //     "Content-Type": "text/plain"
                // });
                // localStorage.setItem("name",username.fname);
                res.redirect("/");
            }
            else{
                res.status(400).send("wrong password");
            }
        }catch(err){
            res.status(400).send("wrong email ");
        }


        
    })
    
    

module.exports = loginrouter;
    



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const Register = require('../modules/register');
const fruitsrouter = express.Router();

const axios = require('axios');

const register = require("../modules/register");
const { viewproject } = require('../permissions/fruits');       // using permission , and using in which ever url you need the permission to access  
const { auth , authRole } = require('../config/basicauth');
var data;



// WE HAVE LINKED THIS SECTION WITH STUDENT MANAGEMENT SYSTEM html file
// WHOLE FRUITS

fruitsrouter.route("/")
    .all((req, res, next) => {
        res.setHeader('Content-Type', 'text/html');
        res.status(200);
        next();
    })
    .get(auth,(req, res) => {
        // res.send("fruits id is " + req.url);

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                data = response.data;
                res.send(data);
            })





        // console.log("data= ",data);


        // res.send("fruits id = ", "https://jsonplaceholder.typicode.com/posts");
        // fs.createReadStream(path.join(__dirname, '../pages/StuManSys.html')).pipe(res);
    });

fruitsrouter.route("/video")
    .all((req, res, next) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        next();
    })
    .get((req, res) => {
        res.send("fruits and video"
        );
    });



// PARTICULAR FRUIT

fruitsrouter.route("/:id")
    .all((req, res, next) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        next();
    })
    .get((req, res) => {

        id = req.params.id;
        console.log("id = " + id);
        //fetch data and display

        axios.get("https://jsonplaceholder.typicode.com/photos/"+id)
            .then((response) => {
                console.log("data : id = ",response);
                res.send((response.data));
            })

        // posts fake api is https://jsonplaceholder.typicode.com/posts
        // photos fake api = https://jsonplaceholder.typicode.com/photos  
        // res.send("fruits id is " + req.params.id);
        // console.log("the data is = ", register.findOne({ firstname: req.params.id }));
    });



module.exports = fruitsrouter;
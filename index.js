require("dotenv").config();     //it connects with process.env 

const express = require('express');
const host = process.env.HOST;
const PORT = process.env.PORT;
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const cors = require('cors');
var cookieParser = require('cookie-parser');

const loginroute = require('./routing/login');
const errorfile = require('./routing/error');
const registerRouter = require('./routing/register');
const indexroute = require('./routing/index');
const adminroute = require('./routing/admin');
const fruitsRoute = require('./routing/fruits');

const { ROLE , USERS } = require("./data/rolesdata");       // from data taking role and users

// var auth = require('./config/authentication');              // doing authentication  
var { auth , authRole } = require("./config/basicauth");    // doing authentication + setting roles who can visit what 



const static_pages=path.join(__dirname, 'pages');

const app = express();

app.use(cors("localhost:4200"));

// const auth=require("./extra learning/authentication");    here we import authentication 

require("./db/conn");




// app.use(express.static(static_pages));
app.use(express.json());

// app.use(auth.login());   // here use authentication before rendering any pages

app.use(express.urlencoded({extended: false}));
// app.use(cookieParser({"key":'12345-98765-10296'}));    //UNABLE TO SET COOKIES

app.use(setUser);
app.get('/', indexroute);

app.use('/login', loginroute);
// app.use(auth);

app.use('/register',auth,authRole(ROLE.ADMIN), registerRouter);

app.use('/admin', adminroute);

app.use("/fruits", fruitsRoute);

app.use("/fruits/:id", fruitsRoute);


// app.use('/send',sendMail);    - to send mail 

app.use('*',errorfile);


app.listen(PORT, ()=>{
    console.log(`runniing on server port https://localhost:${PORT}`);
});



function setUser(req,res,next){
    req.user = "adhiraj";
    req.role = "BASIC";     // register url getting permission for role ADMIN , BUT GETTING BLOCKED FOR PERMISSION BASIC
    // res.send(req.user.role);
    next();
}

//npm install jsonwebtoken --save 

//save token in our env file for safety
/*
inside header pass 

Authorization: Bearer 36b3febdf5ba59a0e1afc6b56248449ef328e952014ce09d11ec88e95232ee4030310dc934dd01a8c1ceb02c7b121f4aabd60f792daef9a12fb4875fc2ed20d2
*/
// ----------------THIS SHOULD BE IN INDEX.JS---------------------------------------------- 
const jwt = require('jsonwebtoken');



// passing authentication middleware to grant permit with token  
app.post('/login',authentication ,  (req, res) => {      // as we want to send token , so post makes more sense
    //authenticate user - already done usinng middlewares

    const username = req.user.username;
    const user = { user: username };

    //jwt accepts object -( user ) , token 
    const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);        // we can also add expiration date to token , if we have new token generating system 
    res.json( { accesstoken: accesstoken });
    /*
    on other terminal or other function we can create token using crypt library of nodejs
    require('crypto').randomBytes(64).toString("hex");
    
    it means -> import crypto library , then generate randomBytes of 64 bytes value , then convert that to string type of hexadecimal form . 

    every time it gives another string , this time - 'e2edbbf1f82b2b8a0b1c7e24f8164cdf43b4d5f2fda4291e9fda78ec8d7566b8797d7f8621e3ee7a77f9ed9c6e715c9b0800392e18ef973d18e639bb5a212b9c'
    */
})


function authentication(req,res,next){
    // BEARER TOKEN  -> way how token is saved 
    const authHeader = req.headers['authorization'];    //storing authorization key value  
    const token = authHeader && authHeader.split(' ')[1];      // inside auth storing key , after validating if auth is present 
    
    if(token == null) return res.status(401);       // if token is not present then status 401

    jwt.verify(token , process.env.ACCESS_TOKEN_SECRET , (err , user)=>{
        if(err) return res.status(401);         // if err occurs then status is 401
        req.user = user;                        // if no error then assign user and pass as next
        next();
    })
        

};

// IN THIS AUTHENTICATION WE ARE USING SAME AUTHENTICATION TOKEN 
// BUT WE NEED TO USE DIFFERENT TOKEN OR SAY REFRESH TOKEN EVERYTIME  


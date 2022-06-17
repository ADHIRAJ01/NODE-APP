//WE USE THIS IN OUR app.js area as 
// app.use(auth);

// and defining auth function also , using app.use(auth) before rendering static files 
//export


auth = (req, res, next) =>{
    console.log(req.headers);
    var authHeader = req.headers.authorization;
    // conole.log("authentication");
    if (!authHeader) {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        next(err);
        return;
    }
  
    var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    res.cookie("user", user, "password", pass);
    console.log(" authentication ", user , pass);
    if (user == 'admin' && pass == 'password') {
        next(); // authorized
    } else {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');      
        err.status = 401;
        next(err);
    }
  }

  module.exports = auth;


  

  //AUTHENTICATION is used to authenticate if user is valid to go further or deny the access

  //LEFT TO BE USED LATER PRACTICE PURPOSE
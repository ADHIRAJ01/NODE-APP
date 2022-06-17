//SET UP COOKIES and expres session to track authenticated users.
//COOKIES - basic information (little info)
//EXPRESS SESSIONS - to send larger details

//HTTP COOKIES -new header with cookie in it's header -> client send authentication - server , server sets cookie on client side - 
//response - with header  sent cookie header and actual cookie  , can hve expiry date also 
//EXPRESS MIDDLEWARE - cookieparser 


// LEFT TO DO


/*

//SERVER SIDE - server side
res.cookie(name , value , options )

//COOKIE PARSED USING cookie-parser MIDDLEWRE IN EXPRESS
var cookieParser = require( 'cookie-parser');
app.use(cookieParser());

//COOKIE PARSER attach incoming cookies to request 
req.cookies.name

//PROTECTION OF COOKIE - done only on server side using secret key on server side . DIGITAL KEY with key-hash msg authentication code  ( to verify)
var cookieParser = require( 'cookie-parser');
app.use(cookieParser('secret key'));

//PARSED COOKIES AVAILABLE AS 
req.signedCookies.name

*/



// LOCAL STORAGE , SESSION STORAGE , COOKIES - store data inside browser
//https://www.youtube.com/watch?v=GihQAC1I39Q

// VISIT localstorage.js file    
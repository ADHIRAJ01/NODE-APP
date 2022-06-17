function auth(req,res,next){
    if(req.user == null){
        res.status(403);
        return res.send("you need to login");
    }
    console.log("req auth = ", req.user);
    next();
}

function authRole(role){
    return (req,res,next)=>{
        if(req.role !== role){      //it should be req.user.role - doing just for basic working purpose to learn
            res.status(401);
            res.send("not allowed");
        }

        next();
    }
}

module.exports = { auth , authRole };


// AS WE HAVE BUILT TWO PERMISSION , AUTHENTICATION AND AUTHENTICATION WITH ROLE , NOW FOR EVERY URL WE CAN COPY PASSTE CODE OVER THERE 
// AND MODIFY WHO CAN ACCESS THIS BY SETTING PROPERTIES OVER THERE.

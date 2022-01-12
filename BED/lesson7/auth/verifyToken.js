var jwt = require("jsonwebtoken");
require("dotenv").config();

if(!process.env.JWT_SECRET_KEY){
    throw new Error("JWT_SECRET_KEY is not defined");
}

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function verifyToken(req,res,next){
    console.log(req.headers);

    var token=req.headers['authorization']; //retrieve authorization header’s content
    console.log(token);

    if(!token || !token.includes('Bearer')){ //process the token

        res.status(403);
        return res.send({auth:'false',message:'Not authorized!'});
    }else{
        token=token.split(" ")[1]; //obtain the token’s value
        jwt.verify(token,JWT_SECRET_KEY,function(err,decoded){//verify token
            if (err){
                res.status(403);
                return res.end({auth:false,message:'Not authorized!'});
            }else{
                console.log("Authenticated")
                req.userid=decoded.id; //decode the userid and store in req for use
                req.role=decoded.role; //decode the role and store in req for use
            }

            
            next();
        });
    }


}


module.exports = verifyToken;
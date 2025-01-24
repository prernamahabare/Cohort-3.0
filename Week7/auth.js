const jwt = require("jsonwebtoken");
const secretKey = "HelloIMPrerna";

function auth(req, res, next){
    const token = req.headers.token;
    const verifyToken = jwt.verify(token, secretKey);

    try{
        if(verifyToken){
            req.userId = verifyToken.id;
            next();
        }else{
            res.status(403).json({
                message: "Incorrect creds"
            })
        }
    }catch(err){
        console.log(err);
        res.send("request falied")
    }
    
}

module.exports = {
    auth, 
    secretKey
}




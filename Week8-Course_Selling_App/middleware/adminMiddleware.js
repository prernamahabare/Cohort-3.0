const jwt = require("jsonwebtoken")
const { JWT_ADMIN_SECREATE } = require("../config")

function adminAuth(req, res, next) {
    const token = req.headers.token;

    const verifyToken = jwt.verify(token, JWT_ADMIN_SECREATE);

    try {
        if (verifyToken) {
            req.adminid = verifyToken.id;
           next();
        }else {
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
    adminAuth: adminAuth
}
const jwt = require("jsonwebtoken");
const { JWT_USER_SECREATE } = require("../config")

function userAuth(req, res, next) {
    const token = req.headers.token;

    const verifyToken = jwt.verify(token, JWT_USER_SECREATE);

    try {
        if (verifyToken) {
            req.userid = verifyToken.id;
            next();
        } else {
            res.status(403).json({
                message: "Incorrect creds"
            })
        }
    } catch (err) {
        console.log(err);
        res.send("request falied")
    }
}

module.exports = {
    userAuth
}
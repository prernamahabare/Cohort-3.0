const {userModel } = require("../db");
const {Router} = require("express");
const userRoute = Router();
const bcrypt = require("bcrypt");
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const {userAuth} = require("../middleware/userMiddleware")
const { JWT_USER_SECREATE } = require("../config")


userRoute.post("/signup", async function(req, res){
    const responce = z.object({
        email : z.string().email(),
        password : z.string().min(6),
        firstName : z.string(),
        lastName : z.string()
    })

    const parseData = responce.safeParse(req.body);

    if(!parseData.success){
        res.send({
            msg: "Invalid Credentials",
            error: parseData.error
        })
    }
    const email = req.body.email;
    const password = req.body.password;
    const firstName= req.body.firstName;
    const lastName=req.body.lastName;

    if(!email || !password || !firstName || !lastName){
        res.status(400).send({
            msg: "All fields (email, name, password) are required!"
        })
    }

    try{
        const encryptedpassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            email : email,
            password : encryptedpassword,
            firstName : firstName,
            lastName : lastName
        })

        res.send({
            msg:"User Created Sucessfully!",
            User : user
        })
    }catch(err){
        if (err.code === 11000) {
            // Handle duplicate email error
            return res.status(409).send({
                msg: "Email already exists!"
            });
        }
        res.status(403).send({
            msg: "SignUp Failed!"
        })
    }
})

userRoute.post("/signin", async function(req, res){
    const responce = z.object({
        email: z.string().email(),
        password: z.string()
    })

    const parseData = responce.safeParse(req.body);

    if(!parseData.success){
        res.status(400).send({
            msg: "Invalid Credentials",
            error: parseData.error
        })
    }

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        res.status(400).send({
            msg: "All fields (email, password) are required!"
        })
    }

    try{
        const user = await userModel.findOne({
            email: email
        })
       
        if(!user){
            res.send({
                msg: "User does not exist!"
            })
        }

        const decrptyPassword = await bcrypt.compare(password, user.password);

        if (!decrptyPassword) {
            return res.status(401).send({ msg: "Invalid email or password!" });
        }

        if (user) {
            const token = await jwt.sign({
                id: user._id.toString()
            }, JWT_USER_SECREATE)

            res.send({
                token: token
            })

        }else{
            res.send({
                msg: "Invalid credentials!"
            })
        }
    }catch(err){
        res.status(403).send({
            msg: "SignIn Failed!"

        })
    }
})

userRoute.post("/purchesCourse", (req, res)=>{
    res.send("Signup")
})

module.exports = {
    userRoute : userRoute
}



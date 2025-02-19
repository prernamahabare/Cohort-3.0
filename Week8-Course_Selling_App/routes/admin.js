const { Router } = require("express");
const AdminRoute = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const { z } = require("zod");
const { JWT_ADMIN_SECREATE } = require("../config")
const { adminAuth } = require("../middleware/adminMiddleware");

AdminRoute.post("/signup", async (req, res) => {
    const responce = z.object({
        email: z.string().email(),
        password: z.string(),
        firstName: z.string(),
        lastName: z.string()
    })

    const parseData = responce.safeParse(req.body);

    if (!parseData.success) {
        res.send({
            msg: "Invalid Credentials",
            error: parseData.error
        })
    }

    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
        res.status(400).send({
            msg: "All fields (email, name, password) are required!"
        })
    }

    try {
        const encryptedpassword = await bcrypt.hash(password, 10);

        const admin = await adminModel.create({
            email: email,
            password: encryptedpassword,
            firstName: firstName,
            lastName: lastName
        })

        res.send({
            msg: "Admin Created Sucessfully!",
            Admin: admin
        })

    } catch (err) {
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

AdminRoute.post("/signin", async (req, res) => {
    const responce = z.object({
        email: z.string().email(),
        password: z.string()
    })

    const parseData = responce.safeParse(req.body);

    if (!parseData.success) {
        res.status(400).send({
            msg: "Invalid Credentials",
            error: parseData.error
        })
    }

    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send({
            msg: "All fields (email, password) are required!"
        })
    }

    try {
        const user = await adminModel.findOne({
            email: email
        })

        if (!user) {
            res.send({
                msg: "User does not exist!"
            })
        }

        const decrptyPassword = await bcrypt.compare(password, user.password);

        if (!decrptyPassword) {
            return res.status(401).send({ msg: "Invalid email or password!" });
        }

        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_ADMIN_SECREATE)

        res.send({
            token: token
        })
    } catch (err) {
        res.status(403).send({
            msg: "SignIn Failed!"

        })
    }
})

AdminRoute.post("/createCourse", adminAuth, async (req, res) => {
    const { title, description, price, imgUrl } = req.body;

    try {
        const course = await courseModel.create({
            title: title,
            description: description,
            price: price,
            imgUrl: imgUrl,
            creatorId: req.adminid
        })

        if (!course) {
            res.status(403).send({
                msg: "Some Err Occured",
            })
        }

        res.send({
            msg: "Course Created Successfully!",
            Course: course
        })

    } catch (err) {
        res.status(403).send({
            msg: "Course Creation Falied!",
        })
    }
})

AdminRoute.put("/updateCourse", adminAuth, async (req, res) => {
    const { title, description, price, imgUrl, courseid} = req.body;

    try {
        const course = await courseModel.updateOne({
            _id: courseid,
            creatorId: req.adminid
        }, {
            title: title,
            description: description,
            price: price,
            imgUrl: imgUrl,
        })

        console.log("id"+_id)
        console.log("CID"+creatorId)


        if (!course) {
            res.status(403).send({
                msg: "Some Err Occured",
            })
        }
        console.log(course);

        res.send({
            msg: "Course Update Successfully!",
            Course: course
        })

    } catch (err) {
        res.status(403).send({
            msg: "Course Updation Falied!",
        })
    }
})

AdminRoute.get("/", adminAuth, async (req, res) => {
    try {

        const course = await courseModel.find({
            creatorId: req.creatorId
        })

        if (!course) {
            res.status(403).send({
                msg: "No Course",
            })
        }

        res.send({
            Course: course
        })
    } catch (err) {
        res.status(403).send({
            msg: "ome Err Occured",
        })
    }
})

module.exports = {
    AdminRoute: AdminRoute
}
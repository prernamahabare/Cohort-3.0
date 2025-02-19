require('dotenv').config();
const express = require("express");
const app = express();
const {userRoute} = require("./routes/users");
const {CourseRoute} = require("./routes/course");
const {AdminRoute} = require("./routes/admin");
const mongoose = require ("mongoose");

app.use(express.json());

app.use("/user", userRoute);
app.use("/admin", AdminRoute);
app.use("/course", CourseRoute);

app.listen(3000, async()=>{
    mongoose.connect(process.env.MONGO_URL)
    console.log("Server is listening on port 3000");
})
const {Router} = require('express');

const CourseRoute = Router();

CourseRoute.post("/purchase", (req, res)=>{
  res.send("from the Course file")
})

CourseRoute.get("/perview", (req, res)=>{
    res.send("from the Course file preview")
})


module.exports = {
    CourseRoute : CourseRoute
}
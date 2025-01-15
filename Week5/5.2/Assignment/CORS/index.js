const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        msg: "Sum of the int:",
        ans : a + b
    })
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
})
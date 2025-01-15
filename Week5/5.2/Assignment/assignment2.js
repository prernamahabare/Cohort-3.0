const express = require("express");
const app = express();

//Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

let CountTotalNoOfReq = 0;

// It is not able to access middleware bez it is above the middleware. 
// only the functions below of the middleware function acn access it
app.get("/showCount", function(req, res){
    res.json({
        msg: "Total no of request is:",
        count: CountTotalNoOfReq
    })
})

// Middleware Way 1 to Define
app.use(function(req,res, next){
    CountTotalNoOfReq = CountTotalNoOfReq + 1;
    next();
})

// Middleware Way 2 to Define
// function count(req,res, next){
//     CountTotalNoOfReq = CountTotalNoOfReq + 1;
//     next();
// }

// app.use(count);

app.get("/hit", function(req, res){
    res.json({
        msg: "Hit Endpoint"
    })
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});

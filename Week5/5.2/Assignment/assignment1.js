const express = require("express");
const date = new Date();
const app = express();

// Uses of Middleware
// 1. Modifying the request or response objects.
// 2. Ending the request-response cycle.
// 3. Calling the next middleware function in the stack.


function getUrlMiddleware(req, res, next){

    // Modifying the request
    req.name = "prerna";
   
    // Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
    console.log("url: "+req.url);
    console.log("method: "+req.method);
    console.log("host: "+req.hostname);
    console.log("originalUrl: "+req. originalUrl);

    // Date.now() returns the number of milliseconds so use obj of date and convert it into string
    console.log("Date: "+ new Date().toISOString());

    next();
}

app.use(getUrlMiddleware);

app.get("/hit", function(req, res){
    res.json({
        msg:"hit Endpoint",
        url: req.url,
        name: req.name
    })
})

app.listen(3000);
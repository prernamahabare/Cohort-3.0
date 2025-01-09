const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// 1. GET /files - Returns a list of files present in `./files/` directory
// Response: 200 OK with an array of file names in JSON format.
// Example: GET http://localhost:3000/files
app.get('/files', function(req, res){

    fs.readdir('./files', "utf-8", function(err, files){
        if(err){
            console.log(err);
        }else{
            res.json({
                msg : files
            })
        }
    })
})

// 2. GET /file/:filename - Returns content of given file by name
// Description: Use the filename from the request path parameter to read the file from `./files/` directory
// Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
// Example: GET http://localhost:3000/file/example.txt
app.get('/files/:filename', function(req, res){
    const getFilename = req.params.filename;
    console.log(getFilename);

    const filepath = path.join("files", getFilename); // To join files folder with file name get from url bez it only gets url until OFFLINE_VIDEO folder.
    console.log(filepath);

    fs.readFile(filepath, "utf-8", function(err, data){
        if(err){
            console.log(err);
        }else{
            res.json({
                data
            })

        }
    })
})

app.listen(3000);
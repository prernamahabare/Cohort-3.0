const fs = require("fs");

function readFile(){
    return new Promise(function(resolve, reject){
       fs.readFile("a.txt", "utf-8", function(err, data){
        if(err){
            console.log("errr");
            reject(err);
        }else if(data){
            console.log("data");
            resolve(data);
        }
       })
        
    })
}

const p = readFile();

function callback(resolve, reject){
    console.log('HII');
    if(resolve){
        console.log(resolve);
    }
    else if(reject){
        console.log(reject);
    }
}

p.then(callback);


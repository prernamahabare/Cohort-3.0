// function wait3Sec(promise){
//     setTimeout(promise, 3000);
// }

// function main(){
//     console.log("Hello Main is called!!!");
// }

// wait3Sec(main)



// function random(resolve){
//     setTimeout(resolve, 3000);
// }

// let p = new Promise(random);
// // console.log(p)

// function main(){
//     console.log("Main gets Printed")
// }
// p.then(main)


// ReadFile Promisified

const fs = require("fs");

function readFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            if(data) {
                console.log(data);
                resolve(data);
            } else if (err) {
                console.log("errr");
            }
        })
    }
    )
}

const p1 = readFile()

function main2(content) {
    console.log(content)
}

p1.then(main2);




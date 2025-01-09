// let  a = 1;
// console.log(a)

// function sum(a, b){
//     return a + b;
// }

// let ans = sum(2,3);
// console.log(ans)


// Syncronous Function

let fs = require("fs");

// const var1 = fs.readFileSync("a.txt", "utf-8");
// console.log(var1);

// const var2 = fs.readFileSync("b.txt", "utf-8");
// console.log(var2);



// ASyncronous Function

function print(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}

// To work in the current directory
process.chdir("Week2/2.1");

// ASyncronous Function and function as argument PRINT is function but pass as argument
// IO Operations
fs.readFile("a.txt", "utf-8", print);
fs.readFile("b.txt", "utf-8", print);


// Step 1: setTimout clock started
// Step 2: console.log("Ends!!!");
// Step 3: For loop started but setTimeout done with the excution then after that also setTimeout
//         need to wait until the cpu gets free from the for loop after that only setTimeout will print 

function display(){
    console.log("1 2 3 4 5 6 7");
}

// CPU is busy in for loop then after that only this settimeout function take place
setTimeout(display, 1000);
console.log("Ends!!!");

// CPU task
let c = 0;
for(let i = 0; i < 100; i++){
    c++;
}
console.log("Done with for loop!!!!!!!!!!!!!")

// console.log("Current Working Directory:", process.cwd());







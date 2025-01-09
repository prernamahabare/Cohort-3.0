function setTimeOutPromisified(time) {
    return new Promise(function (resolve, reject) {
        if(resolve){
            setTimeout(resolve, time)
        }else if(reject){
            console.log("err")
        }
    })
}

function callback(){
    console.log("callbacK")
}

// setTimeOutPromisified(1000).then(callback)

// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 
// It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
// async/await is essentially syntactic sugar on top of Promises. 
async function solve(){
  await setTimeOutPromisified(1000);
  console.log("hiii");
  await setTimeOutPromisified(3000);
  console.log("hiii after 3 sec");
  await setTimeOutPromisified(5000);
  console.log("hiii after 5 sec");
}

solve();


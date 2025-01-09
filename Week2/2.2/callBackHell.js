// callBackHell
// setTimeout(function(){
//     console.log("HII");
//     setTimeout(function(){
//         console.log("HELLO");
//         setTimeout(function(){
//             console.log("HII Prerna");
//         }, 5000)
//     }, 3000)
// }, 1000)

// Better approch - We can solve CallBack Hell using this approch and anthor approch for same is Promises

function callBack1() {
    console.log("HII Prerna");
}

function callBack2() {
    console.log("HELLO");
    setTimeout(callBack1, 5000)
}

function callBack3() {
    console.log("HII");
    setTimeout(callBack2, 3000)
}

setTimeout(callBack3, 1000)


// Promisified

function setTimeOutPromisified(time) {
    return new Promise(function (resolve, time) {
        resolve(time);
    })
}

// Approch 1

// setTimeOutPromisified(1000, function () {
//     setTimeOutPromisified(3000, function () {
//         setTimeOutPromisified(5000).then(callBack1)
//     }).then(callBack2)
// }).then(callBack3)

// Approch 2
// also known as promise chaining
setTimeOutPromisified(1000).then(
    function () {
        console.log("HII");
        return setTimeOutPromisified(30000)
    })
    .then(
        function () {
            console.log("HELLO")
            return setTimeOutPromisified(5000)
        })
    .then(
        function () {
            console.log("HELLO THRER")
})


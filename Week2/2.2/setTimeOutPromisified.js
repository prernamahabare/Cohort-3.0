function setTimeOutPromisified(time){
    return new Promise(function(resolve){
        setTimeout(resolve("prerna"), time);
    })
}

function callback(str){
    console.log("called for 3 sec "+str)
}
setTimeOutPromisified(3000).then(callback);
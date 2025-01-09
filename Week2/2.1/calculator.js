// Calulator

function sum(a , b){
    return a + b;
}
function sub(a , b){
    return a + b;
}
function mul(a , b){
    return a + b;
}
function div(a , b){
    return a + b;
}


function doOpration(a ,b, name){
    // It will work as sum(3, 5)
    return name(a, b);
}

// In this we pass function name as arugemnt to other function 
let ans = doOpration(3, 5, sum);
console.log(ans);

// We cant pass like this bez it pass like doOpration(3, 5, 8); 8 is return by the sum(3,5).
// let ans = doOpration(3, 5, sum(3, 5));
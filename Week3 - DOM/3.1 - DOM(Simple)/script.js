let ctr = 0;

// Read
const input = document.querySelector("input");
console.log(input.value)

// Update
// let input2 = document.getElementById("increment")
// let counter = 0;

// setInterval(function () {
//     counter = counter + 1;
//     input2.innerHTML = "counter value = " + counter;
// }, 2000);


// Delete
function deleteRandomTodo(index){
    const ele = document.getElementById(index);
    ele.parentNode.removeChild(ele);
}

// AddTODO

function addTodo(){
    let input = document.querySelector("input");
    let value = input.value;

    let newDiv = document.createElement("h4");
    // newDiv.innerHTML = value;
    newDiv.setAttribute("id", ctr)
    newDiv.innerHTML = "<div>"+ value + "</div> <button onClick= 'deleteRandomTodo("+ ctr +")'> Delete </button>";


    document.getElementById("divClass").appendChild(newDiv);
    input.value = "";
    ctr = ctr+1;

}




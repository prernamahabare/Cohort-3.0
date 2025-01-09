let ctr = 0;

// Simple 
// function addTodo() {

//     let input = document.querySelector("input");
//     let value = input.value;

//     let newDiv = document.createElement('div');
//     newDiv.setAttribute("id", 'Todo-' + ctr);
//     newDiv.innerHTML = `
//     <div> ${value} </div>
//     <button onClick = "deleteTodo('Todo-${ctr}')">Delete</button>
//     `;

//     document.querySelector("body").appendChild(newDiv);
//     ctr++;
//     input.value = "";
// }


// function deleteTodo(index) {
//     const ele = document.getElementById(index);
//     ele.parentNode.removeChild(ele);
// }



// Advance

function addTodo() {


    let input = document.querySelector('input');
    let value = input.value;

    const parentEl = document.getElementById("todos");

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", 'Todo-' + ctr);

    let newHeading = document.createElement("h4");
    newHeading.textContent = ctr + '. ' + value;

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.setAttribute("onClick", "deleteTodo("+ ctr +")");

    newDiv.appendChild(newHeading);
    newDiv.appendChild(deletebtn);

    parentEl.appendChild(newDiv);
    
    ctr++;
    input.value = "";
}

function deleteTodo(id){

    let deleteEle = document.getElementById("Todo-"+ id);

    if (deleteEle) {
        deleteEle.parentNode.removeChild(deleteEle);
    }

}


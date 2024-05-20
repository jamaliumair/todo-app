let todoInput = document.querySelectorAll('.todo-input');
let divEl = document.querySelectorAll(".todo-list");
let addbutton = document.querySelectorAll(".add-btn");

let allTodos = []
let editindex = -1;

function add() {
    
    let newTodo = todoInput[0].value;
    if (editindex === -1 && newTodo !== "") {
        allTodos.push(newTodo);

    } else {

        allTodos[editindex] = newTodo;
        editindex = -1;
    }


    printAlltodos();
    todoInput[0].value = "";
    // console.log(allTodos);
    addbutton[0].innerHTML = "Add"; 
}


function printAlltodos() {

    console.log(allTodos);
    divEl[0].innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        
        divEl[0].innerHTML += `
        <p id="todo-${i}">${allTodos[i]}
        <span class="btns">
        <button onclick="edit(${i})">Edit</button>
        <button onclick="deleted(${i})">Delete</button>
        </span>
        </p>
        `;

        
    }
}

function edit(index) {
    // console.log(index);

    todoInput[0].value = allTodos[index];
    editindex = index
    addbutton[0].innerHTML = "Save";
    console.log(todoInput[0].value);

}

function deleted(index) {

    allTodos.splice(index,1);
    // console.log(allTodos);
    printAlltodos();
}


let todoInput = document.querySelectorAll('.todo-input');
let divEl = document.querySelectorAll(".todo-list");
let addbutton = document.querySelectorAll(".add-btn");

let allTodos = []
let editindex = -1;
let completedTodos = [];

function add() {
    
    let newTodo = todoInput[0].value;
    if (editindex === -1 && newTodo !== "") {
        allTodos.push(newTodo);
        completedTodos.push(false);

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
        <div class="todoContainer">

        <p id="todo-${i}">
        ${allTodos[i]}
        </p>

        <div class="btns">
        <button onclick="edit(${i})" class="hide${i}">Edit</button>
        <button onclick="deleted(${i})">Delete</button>
        <button onclick="completeTodo(${i})">Mark as Completed</button>
        </div>

        </div>
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
    completedTodos.splice(index,1);
    printAlltodos();
}


function completeTodo(index) {
    completedTodos[index] = !completedTodos[index];

    // Select the correct button by using the dynamic class name
    let editButton = document.querySelector(`.hide${index}`);

    if (completedTodos[index]) {
        editButton.style.display = "none";
    } else {
        editButton.style.display = "inline-block";
    }

    // Add a class to mark the item as completed (optional)
    let todoText = document.querySelector(`#todo-${index}`);
    if (completedTodos[index]) {
        todoText.classList.add('completed');
    } else {
        todoText.classList.remove('completed');
    }
}

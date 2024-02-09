let todos= []; // responsible for storing data

document.addEventListener("DOMContentLoaded", function(){
    todos = loadTodos(todos);
    renderTodos(todos);
    
})

document.querySelector("#add-btn")
    .addEventListener("click", function(){
        const todoName = document.querySelector("#todo-name").value;
        todos.push(todoName);
        renderTodos();
        saveTodos(todos);
    })

// responsible for the display
function renderTodos() {
    const todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";
    for (let t of todos) {
        const liElement = document.createElement('li');
        liElement.innerHTML = t;
        todoList.appendChild(liElement);
    }
}

function saveTodos(todos) {
    // get a string representation of the `todos` array
    // BECAUSE localStorage can only save strings
    const saveString = JSON.stringify(todos);
    localStorage.setItem("savedTodos", saveString);
}

function loadTodos() {
    const saveString = localStorage.getItem("savedTodos");
    
    // JSON.parse is the reverse of JSON.stringify
    const todos = JSON.parse(saveString);
    return todos;
}

// document.querySelector("#add-btn")
//     .addEventListener("click", function() {
//         const todoName = document.querySelector("#todo-name").value;
//         const todoList =document.querySelector("#todo-list")
//         const liElement = document.createElement('li');
//         liElement.innerHTML = todoName; 
//         todoList.appendChild(liElement);   
//     });
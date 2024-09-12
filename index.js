const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todos-list");

function addTodo(){
    const todoText = todoInput.value.trim();
    if (todoText !== ''){
        const li= document.createElement('li');
        li.textContent= todoText;
        todoList.appendChild(li);
        todoInput.value= ''
    }
}
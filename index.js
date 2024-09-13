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
 li.addEventListener('click', completeTask)

 const deleteBtn= document.createElement('button');
 deleteBtn.textContent= 'Delete';
 deleteBtn.addEventListener('click', deleteTask);
 li.appendChild(deleteBtn)
}

function completeTask(event){
    const task= event.target;
    task.classList.toggle('completed');
}

function deleteTask(event){
    const task = event.target.parentElement;
    taskList.removeChild(task);
}
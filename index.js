const todoInput = document.querySelector("#todo-input");
const taskList = document.querySelector("#todos-list");

function addTask(){
    const todoText = todoInput.value.trim();
    if (todoText !== ''){
        const li= document.createElement('li');
        li.textContent= todoText;
        taskList.appendChild(li);
        todoInput.value= ''
    }
 li.addEventListener('click', completeTask)

 const deleteBtn= document.createElement('button');
 deleteBtn.textContent= 'Delete';
 deleteBtn.addEventListener('click', deleteTask);
 li.appendChild(deleteBtn)

 saveTaskstoLocalStorage();
 loadTasksFromLocalStorage();
}

function completeTask(event){
    const task= event.target;
    task.classList.toggle('completed');
}

function deleteTask(event){
    const task = event.target.parentElement;
    taskList.removeChild(task);
}

function saveTaskstoLocalStorage(){
    const tasks= [];
    const taskItems= taskList.getElementsByTagName('li');
    
    for (let i = 0; i <taskItems.length; i++){
        tasks.push(taskItems[i].textContent);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage(){
    const tasks= JSON.parse(localStorage.getItem('tasks'));
    if(tasks){
        tasks.forEach(taskText =>{
            const li = document.createElement('li');
            li.textContent= taskText;
            taskList.appendChild(li);
            li.addEventListener('click', completeTask);

            const deleteBtn= document.createElement('button');
            deleteBtn.textContent= 'Delete';
            deleteBtn.addEventListener('click', deleteTask);
            li.appendChild(deleteBtn);
        });
    }
}
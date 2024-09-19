const taskInput = document.querySelector("#todo-input");
const taskList = document.querySelector("#todos-list");
const taskCategory = document.querySelector("#todo-category");

function addTask() {
    const todoText = taskInput.value.trim();
    const todoCategory = taskCategory.value; 
    
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = `[${todoCategory}] ${todoText}`; 

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';

        li.addEventListener('click', completeTask);

        saveTaskstoLocalStorage(); 
    }
}

function completeTask(event) {
    const task = event.target;
    task.classList.toggle('completed');
    saveTaskstoLocalStorage();
}

function deleteTask(event) {
    const task = event.target.parentElement;
    taskList.removeChild(task);
    saveTaskstoLocalStorage();
}

function saveTaskstoLocalStorage() {
    const tasks = [];
    const taskItems = taskList.getElementsByTagName('li');
    
    for (let i = 0; i < taskItems.length; i++) {
        const taskText = taskItems[i].childNodes[0].nodeValue;  
        const isCompleted = taskItems[i].classList.contains('completed');
        
        
        const category = taskText.match(/\[(.*?)\]/)[1];
        const text = taskText.replace(/\[.*?\]\s*/, ''); 

        tasks.push({ text: text, category: category, completed: isCompleted });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = `[${task.category}] ${task.text}`; 

            if (task.completed) {
                li.classList.add('completed');
            }

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteTask);

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            li.addEventListener('click', completeTask);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);
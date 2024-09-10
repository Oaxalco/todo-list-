import FetchWrapper from "./fetch-wrapper.js"

const form = document.querySelector("#todo-form");
const title = document.querySelector("#todo-title");
const category= document.querySelector("#todo-category");
const btn= document.querySelector("#button-add")
const list =  document.querySelector("todo-list")
const API = new FetchWrapper("")

const getTodos= ()=>{
    API.get("todos").then(data =>{
        list.innerHTML= "";
        data.todos.forEach(todo =>{
            list .insertAdjacentHTML("beforeend", `<li><div class="card>[${todo.category}]${todo.title}</div></li>`)
        })
    })
}
form.addEventListener("submit",event =>{
    event.preventDefault();
    API.put("todos", {
        title: title.value, category: category.value
    }).then(data =>{
        console.log(data);
        if(!data.error){
            getTodos()
        }
    }).finally(()=>{
        btn.removeAttribute("disabled")
    })
})
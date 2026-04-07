

function add_task(){
    let task = document.getElementsByTagName("input");
    const list = document.getElementById('list');
    if(task[0].value==""){
        alert("enter a task")
    }
    else{
        console.log(task[0].value);
        const newtask = document.createElement('li');
        newtask.innerHTML =  `${task[0].value}`+"<span>🗑️</span>";
        newtask.classList.add("not_done_task");
        list.prepend(newtask);
        task[0].value=""
    }
    save_tasks();
}

const ulists = document.getElementById("list");

ulists.addEventListener("click", event =>{
    if(event.target.tagName === "LI"){
        if(event.target.classList.contains("not_done_task")){
            event.target.classList.replace("not_done_task", "done_task")
        }
        else if(event.target.classList.contains("done_task")){
            event.target.classList.replace("done_task", "not_done_task")
        }
        save_tasks()
    }
    else if(event.target.tagName === "SPAN"){
        const trash = document.querySelectorAll("span")

        trash.forEach(element => {
            element.addEventListener("click", event =>{
                event.target.parentElement.remove()
            })
        })
        save_tasks()
    }
})

function save_tasks(){
    const list = document.getElementById("list");
    localStorage.setItem("tasks", list.innerHTML);
}

function load_tasks(){
    const list = document.getElementById("list");
    list.innerHTML = localStorage.getItem('tasks');
}

load_tasks()
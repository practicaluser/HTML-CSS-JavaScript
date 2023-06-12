let task = document.querySelector("#task");
let list = document.querySelector("#list");
let addTask = document.querySelector("#addTask");

addTask.addEventListener("click" , ()=>{
    list.insertAdjacentHTML(`afterbegin` , `<li>
                <i class="fas fa-trash-alt deleteTask"></i>
                <h4>${task.value}</h4>
            </li>`);
            task.value = "";

            //delete Todo
            let deleteTask = document.querySelectorAll(".deleteTask");
            deleteTask.forEach(del =>{
                del.addEventListener("click" , ()=>{
                    del.parentElement.remove();
                })
            })
})
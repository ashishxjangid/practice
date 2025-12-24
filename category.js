const addBtn= document.querySelector("#addBtn");
const inputBox= document.querySelector("#inputBox");
const taskList= document.querySelector("#taskList"); 

function createTask(value){
    const task= document.createElement("div");
    task.classList.add("taskDiv");

    const name= document.createElement("span");
    name.textContent= value;
    task.append(name);

    const editBtn= document.createElement("button");
    editBtn.textContent= "Edit";
    task.append(editBtn);

    editBtn.addEventListener("click", ()=> {
        
    })

    const deleteBtn= document.createElement("button");
    deleteBtn.textContent= "Delete";
    task.append(deleteBtn); 

    deleteBtn.addEventListener("click", ()=> {
        task.remove();
    })
    

    taskList.append(task);
}

addBtn.addEventListener("click", ()=> {
    if(inputBox.value){
        createTask(inputBox.value);
        inputBox.value= "";
    }
    
})

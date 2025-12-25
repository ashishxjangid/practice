1️⃣ Create a tasks array

At the top:

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

2️⃣ Save tasks to localStorage

Reusable function:

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

3️⃣ Modify createTask

Pass task text + index

function createTask(value, index) {
    const task = document.createElement("div");
    task.classList.add("taskDiv");

    const name = document.createElement("span");
    name.textContent = value;
    task.append(name);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    task.append(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    task.append(deleteBtn);

    // EDIT
    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Edit") {
            const input = document.createElement("input");
            input.value = name.textContent;
            task.replaceChild(input, name);
            editBtn.textContent = "Save";
        } else {
            const input = task.querySelector("input");
            tasks[index] = input.value;   // update array
            saveTasks();
            renderTasks();
        }
    });

    // DELETE
    deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1); // remove from array
        saveTasks();
        renderTasks();
    });

    taskList.append(task);
}

4️⃣ Render tasks from localStorage

This is crucial

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        createTask(task, index);
    });
}

5️⃣ Add new task
addBtn.addEventListener("click", () => {
    if (inputBox.value.trim()) {
        tasks.push(inputBox.value.trim());
        saveTasks();
        renderTasks();
        inputBox.value = "";
    }
});

6️⃣ Load tasks on page refresh
renderTasks();

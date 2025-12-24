
editBtn.addEventListener("click", () => {
    // If currently in Edit mode
    if (editBtn.textContent === "Edit") {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = name.textContent;

        task.replaceChild(editInput, name);
        editBtn.textContent = "Save";

    } else {
        const newName = document.createElement("span");
        newName.textContent = task.querySelector("input").value;

        task.replaceChild(newName, task.querySelector("input"));
        name = newName; // update reference
        editBtn.textContent = "Edit";
    }
});

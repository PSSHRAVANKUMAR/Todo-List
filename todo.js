const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add event listener to the "Add Task" button
addButton.addEventListener("click", () => {
    const task = input.value.trim(); // Get the input value
    if (task) {
        const li = document.createElement("li"); // Create a new list item

        // Add task text
        const taskText = document.createElement("span");
        taskText.className = "todo-text";
        taskText.textContent = task;

        // Add Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.style.backgroundColor = "#39FF14"; // Green button
        editButton.addEventListener("click", () => {
            const newTask = prompt("Edit your task:", taskText.textContent);
            if (newTask) {
                taskText.textContent = newTask.trim();
            }
        });

        // Add Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.backgroundColor = "#FF073A"; // Red button
        deleteButton.addEventListener("click", () => li.remove());

        // Append elements to list item
        li.appendChild(taskText);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Add list item to the list
        todoList.appendChild(li);

        // Clear the input field
        input.value = "";
    }
    
    // todo.js
document.getElementById('back-btn').addEventListener('click', () => {
    window.history.back(); // Navigates to the previous page
});

});

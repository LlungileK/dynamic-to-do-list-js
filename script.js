// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn'); // Select Add Task button
    const taskInput = document.getElementById('task-input'); // Select input field
    const taskList = document.getElementById('task-list'); // Select task list

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input value

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if empty
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text of the list item

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Add class for styling

        // Remove task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove the list item
        };

        // Append the button to the list item and the item to the list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing "Enter" key in input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});

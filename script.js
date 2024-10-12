// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn'); // Select Add Task button
    const taskInput = document.getElementById('task-input'); // Select input field
    const taskList = document.getElementById('task-list'); // Select task list

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim(); // Get the input value

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if empty
            return;
        }

        // Step 1: Create a new list item (li) element
        const li = document.createElement('li'); // Create a new <li> element
        li.classList.add('task-item');

        // Step 2: Set the text content of the list item to the task text
        li.textContent = taskText; // Assign the taskText to the <li> element


        // Step 3: Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text to "Remove"
        removeButton.classList.add('remove-btn'); // Use classList.add to assign the 'remove-btn' class

        // Step 4: Assign an onclick event to the remove button 
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove the list item
        };

        // Step 5: Append the remove button to the list item 
        li.appendChild(removeButton);

        // Step 6: Append the list item to the task list
        taskList.appendChild(li);

        // Step 7: Clear the input field by setting taskInput.value to an empty string
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

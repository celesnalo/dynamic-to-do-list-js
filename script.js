document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        let taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Enter a task");
        } else {
            // Create a new <li> element and set its textContent to taskText
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create a new button element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');

            // Assign an onclick event to the remove button to remove the <li> element from taskList
            removeButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            // Append the remove button to the <li> element
            listItem.appendChild(removeButton);

            // Append the <li> element to taskList
            taskList.appendChild(listItem);

            // Clear the task input field
            taskInput.value = "";
        }
    }

    // Attach event listener to addButton to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // Attach event listener to taskInput to call addTask when "Enter" key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

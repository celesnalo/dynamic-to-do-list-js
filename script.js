document.addEventListener('DOMContentLoaded', () => {
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
    
    // Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
    function addTask(taskText, save = true) {
        // Task creation logic remains the same
    
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
        // Other initialization code
    });
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

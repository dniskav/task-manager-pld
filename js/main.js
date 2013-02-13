// Check if the TASKMANAGER namespace exists
var TASKMANAGER = TASKMANAGER || {};

TASKMANAGER = {

    tasksArray : [],

    Task : {
        'id' : 1,
        'name' : 'Task name',
        'priority' : 5,
        'description' : 'This is the task description',
        'user' : 'Dummy user',
        'state' : 'Open',
        'due_date' : '01/03/2013', // DD/MM/YYYY

        /**
         * Adding a new task
         */
        addTask: function (taskOptions) {
            "use strict";
            if (!taskOptions) {
                alert('Please set parameters');
            }

            TASKMANAGER.tasksArray.push(taskOptions);
        },

        /**
         * Delete an specific task.
         * @param  {Object} task Task to delete
         */
        deleteTask: function (task) {
            "use strict";
            
            console.log("Task deleted");
        },

        /**
         * Set a task a resolved
         */
        resolveTask: function () {
            "use strict";

        }
    }
};

// Dummy object. Just for testing
var userObject = {
    'name' : 'Alejandro',
    'last_name' : 'Nanez Ortiz',
    'age' : 26,
    'position' : 'Frontend Developer'
};

// Dummy object. Just for testing
var taskOptions = {
    'name' : 'Finish my tutorial',
    'priority' : 10,
    'description' : 'I must finish my tasks!',
    'user' : userObject,
    'state' : 'Open',
    'due_date' : '01/03/2013' // DD/MM/YYYY
};

// Initialize myTask
var myTask = new TASKMANAGER.Task.addTask(taskOptions);

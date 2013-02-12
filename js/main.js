// Global object
window.taskManager = {

	'name' : 'Task name',
	'priority' : 5,
	'description' : 'This is the task description',
	'user' : 'Dummy user',
	'state' : 'Open',
	// DD/MM/YYYY
	'due_date' : '01/03/2013',

	/**
	 * Set default parameters reading from JSON file.
	 */
	initialize: function(taskOptions) {

		for ( var property in taskOptions ) {

			if ( !taskOptions.hasOwnProperty(property) ) {
				console.log("Property " + property + " is invalid");
				console.log( taskOptions[property] );
			} else {
				console.log( taskOptions[property] );
			}
			
		}
	},

	/**
	 * Adding a new task
	 */
	addTask: function() {

	},

	/**
	 * Delete a task
	 */
	deleteTask: function() {

	},

	/**
	 * Set a task a resolved
	 */
	resolveTask: function() {

	}
};

var taskOptions = {
	'dummything' : 'dasdasda',
	'name' : 'Finish my tutorial',
	'priority' : 10,
	'description' : 'I must finish my tasks!',
	'user' : 'Alejandro Nanez Ortiz',
	'state' : 'Open',
	// DD/MM/YYYY
	'due_date' : '01/03/2013',
};

taskManager.initialize(taskOptions);
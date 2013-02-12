// Global object
window.taskManager = {};

function Task() {
	this.name = 'Task name';
	this.priority = 5;
	this.description = 'This is the task description';
	this.user = 'Dummy user';
	this.state = 'Open';
	// DD/MM/YYYY
	this.due_date = '01/03/2013';

	/**
	 * Adding a new task
	 */
	this.addTask = function() {

	};

	/**
	 * Delete a task
	 */
	this.deleteTask = function() {

	};

	/**
	 * Set a task a resolved
	 */
	this.resolveTask = function() {

	};
};

var tarea = new Task();
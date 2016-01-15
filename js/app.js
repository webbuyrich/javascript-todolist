//Problem: User interation doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.


var taskInput = document.getElementById('new-task');;//new-task
var addButton = document.getElementsByTagName('button')[0];//first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks');; //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks');;//completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString){
	//create list item
	var listItem = document.createElement('li');

	//input(checkbox)
	var checkbox = document.createElement('input');

	//label
	var label = document.createElement('label');

	//input(text)
	var editInput = document.createElement('input');

	//button.edit
	var editButton = document.createElement('button');

	//button.delete
	var deleteButton  = document.createElement('button');

	//Each element needs modifying 
	checkbox.type = 'checkbox';
	editInput.type = 'text';

	editButton.innerText = 'Edit';
	editButton.className = 'edit';
	deleteButton.innerText = 'Delete';
	deleteButton.className = 'delete';
	label.innerText = taskString;



	//Append New List Item
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
	return listItem;
}


//Add New task
var addTask = function(){
	console.log('Add Task....');
	
	//Create a new list item with the text from #new-task:
	var listItem = createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	
	bindTaskEvents(listItem, completeTask);
	taskInput.value = '';
		
}


//Edit an existing task
var editTask = function(){
	console.log('Edit Task....');
	
	var listItem = this.parentNode;
	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector('label');
	var containsClass = listItem.classList.contains('editMode');
	//If the parent has the class .editMode
	if(containsClass){
		//Switch from .editMode
		//label text become the input's value
		label.innerText = editInput.value;
	} else {
		//Switch to .editMode
		//input value becomes the label's text
		editInput.value = label.innerText;
	}
	//Togle .editMode on the parent
	listItem.classList.toggle('editMode');

}



//Delete an existing task
var deleteTask = function(){
	console.log('Delete Task....');
	
	//Remove the parent list item from the ul
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//remove parent list item from ul
	ul.removeChild(listItem);
}

//Mark a task as complete
var completeTask = function(){
	console.log('Complete Task....');
	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);	
	bindTaskEvents(listItem, incompleteTask);
}


//Mark a task as incomplete
var incompleteTask = function(){
	console.log('Incomplete Task....');
	//Append to incomplete tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, completeTask);
}
	
var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	//console.log('Bind to list item events');
	//select taskListItem children
	var checkbox = taskListItem.querySelector('input[type=checkbox]');
	var editButton	= taskListItem.querySelector('button.edit');
	var deleteButton = taskListItem.querySelector('button.delete');

		//bind editTask to edit button
		editButton.onclick = editTask;

		//bind deleteTask to delete button
		deleteButton.onclick = deleteTask;

		//bind checkBoxEventHandler to checkbox
		checkbox.onchange = checkBoxEventHandler;
}



var ajaxRequest = function(){
	console.log('AJAX REQUEST...');
}

//Set click handler to the addTask function
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);

// addButton.onclick = ajaxRequest;

//cycle over the incompleteTasksHolder ul list items
for (i = 0; i < incompleteTasksHolder.children.length; i++){
	//bind events to list items children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], completeTask);
	//console.log('Incomplete is: ' + i);
}

//cycle over the completeTasksHolder ul list items
for (i = 0; i < completedTasksHolder.children.length; i++){
	//bind events to list items children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], incompleteTask);
	//console.log('Complete is: ' + i);
}




















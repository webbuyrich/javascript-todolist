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

	//Each element needs modifying and appending
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
	var listItem = createNewTaskElement('Some New Task');

	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	
		
}


//Edit an existing task
var editTask = function(){
	console.log('Edit Task....');
	//When the Edit button is pressed
	//If the parent has the class .editMode
		//Switch from .editMode
		//label text become the input's value
	//else
		//Switch to .editMode
		//input value becomes the label's text

	//Togle .editMode on the parent

}



//Delete an existing task
var deleteTask = function(){
	console.log('Delete Task....');
	//When the Delete button is pressed
		//Remove the parent list item from the ul


}

//Mark a task as complete
var completeTask = function(){
	console.log('Complete Task....');
	//When the checkbox is checked
		//Append the task list item to the #completed-tasks
}


//Mark a task as incomplete
var incompleteTask = function(){
	console.log('Incomplete Task....');
	//When checkbox is unchecked
		//Append to incomplete tasks
}
	
var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
	console.log('Bind to list item events');
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

//Set click handler to the addTask function
addButton.onclick = addTask;

//cycle over the incompleteTasksHolder ul list items
for (i = 0; i < incompleteTasksHolder.children.length; i++){
	//bind events to list items children (taskCompleted)
	bindTaskEvents(incompleteTasksHolder.children[i], completeTask);
	console.log('Incomplete is: ' + i);
}

//cycle over the completeTasksHolder ul list items
for (i = 0; i < completedTasksHolder.children.length; i++){
	//bind events to list items children (taskIncomplete)
	bindTaskEvents(completedTasksHolder.children[i], incompleteTask);
	console.log('Complete is: ' + i);
}




















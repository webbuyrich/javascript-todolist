//Problem: User interation doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.


var taskInput = document.getElementById('new-task');;//new-task
var addButton = document.getElementsByTagName('button')[0];//first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks');; //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks');;//completed-tasks



//Add New task
var addTask = function(){
	//When the button is pressed
	//Create a new list item with the text from #new-task:
		//input(checkbox)
		//label
		//input(text)
		//button.edit
		//button.delete
		//Each element will need to be modified and appended





}


//Edit an existing task
var editTask = function(){
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
	//When the Delete button is pressed
		//Remove the parent list item from the ul


}



//Mark a task as complete
var completeTask = function(){
	//When the checkbox is checked
		//Append the task list item to the #completed-tasks
}





//Mark a task as incomplete
var incompleteTask = function(){
	//When checkbox is unchecked
		//Append to incomplete tasks
}
	














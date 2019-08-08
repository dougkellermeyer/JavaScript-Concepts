var form = document.querySelector('#task-form');
var taskList = document.querySelector('.collection');
var clrBtn = document.querySelector('.clear-tasks');
var filter = document.querySelector('#filter');
var taskInput = document.getElementById('#task');


var heading = document.querySelector('h5');
var select = document.querySelector('select');
var addTaskButton = document.getElementById('addTaskBtn');

//Clear form input
taskInput.value = '';

//Load all event listeners
loadEventListeners();

function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);
};

function addTask(e){
    if(taskInput === ''){
        alert('Add a task!');
    }

    //Create li element
    var li = document.createElement('li');

    //Add class (need materialize to recognize the UI and look good :)
    li.className = 'collection-item';

    //Create text node append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //Create new link element
    var link = document.createElement('a');
    link.className = 'delete-item';

    e.preventDefault();
}

// form.addEventListener('submit', runEvent);

//Keydown
//taskInput.addEventListener('keydown, runEvent);

//Keyup
// taskInput.addEventListener('keyup', runEvent);

//Keypress
// taskInput.addEventListener('keypress', runEvent);

//Focus - when you click inside of an input
// taskInput.addEventListener('focus', runEvent);

//Blur - when you click outside of an input
// taskInput.addEventListener('blur', runEvent);

//Cut - when you cut (CTRL + X)
// taskInput.addEventListener('cut', runEvent);

//Change
// select.addEventListener('change', runEvent);

function runEvent(e){

    console.log(`EVENT TYPE: ${e.type}`);

    //grabs the target from the event object, which happens to be the form, and logs the keys
    console.log(e.target.value);


    //Get input value
    // console.log(taskInput.value);

    //prevents the redirect (see id="task-form", line 22 in index.html)
    e.preventDefault();
}
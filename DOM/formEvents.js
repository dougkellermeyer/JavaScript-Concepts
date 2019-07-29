var form = document.querySelector('form');
var taskInput = document.getElementById('task');

//Clear form input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);


    //Get input value
    // console.log(taskInput.value);

    //prevents the redirect (see id="task-form", line 22 in index.html)
    // e.preventDefault();
}
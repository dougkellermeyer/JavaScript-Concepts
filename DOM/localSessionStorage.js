//local storage stays until you clear data
//session storage only stays until your browser closes
//API for both are the same

//set local strage item
// localStorage.setItem('name', 'Doug');
// localStorage.setItem('age', '26');

//set session storage item
// sessionStorage.setItem('name', 'Kenz');

//remove local value from storage
// localStorage.removeItem('name');

//get local value from storage
// var name = localStorage.getItem('name');
// var age = localStorage.getItem('age');

// console.log(name, age);

//clear local storage
// localStorage.clear(); // name and age are now null 

document.querySelector('form').addEventListener('submit', 
    function(e){
        var task = document.getElementById('task').value;

        let tasks;

        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Task saved');

        e.preventDefault();
});

var tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);
});

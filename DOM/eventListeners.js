//EVENTS
//first grab the clear tasks button with the querySelector
//then add the EventListner which takes in the kind of event and then a callback (a function that is passed as an argument) that is executed each time the event occurs 

document.querySelector('.clear-tasks').addEventListener('click',function(){
    console.log('clicked');
});
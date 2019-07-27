//Types of Events

var clearButton = document.querySelector('.clear-tasks');
var card = document.querySelector('.card');
var heading = document.querySelector('h5');

//Click
// clearButton.addEventListener('click', runEvent);

//DoubleCLick 
// clearButton.addEventListener('dblclick', runEvent)

//Event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
}
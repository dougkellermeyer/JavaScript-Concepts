//Types of Events

var clearButton = document.querySelector('.clear-tasks');
var card = document.querySelector('.card');
var heading = document.querySelector('h5');

// var searchButton = document.querySelector('.search');

//Click
// clearButton.addEventListener('click', runEvent);

// searchButton.addEventListener('click', function(){
//     console.log('well this is kinda neat, its a UI working with js')
// });

//DoubleCLick 
// clearButton.addEventListener('dblclick', runEvent)

//Event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
}
//Types of Events

var clearButton = document.querySelector('.clear-tasks');
var card = document.querySelector('.card');
var heading = document.querySelector('h5');

// var searchButton = document.querySelector('.search');

//Click
// card.addEventListener('click', runEvent);

// card.addEventListener('click', function(){
//     console.log('well this is kinda neat, its a UI working with js')
// });

//DoubleCLick 
// card.addEventListener('dblclick', runEvent)

//Mousedown
// card.addEventListener('mousedown', runEvent);

//Mouseup
// card.addEventListener('mousedown', runEvent);

//Mouseenter (move mouse over card)
// card.addEventListener('mouseenter', runEvent);

//Mouseleave (move mouse out of card )
// card.addEventListener('mouseleave', runEvent);

//Mouseover
// card.addEventListener('mouseover', runEvent);

//Mouseout (different from mouse leave, which tracks when you leave the card (parent element). Mouseout tracks when you leave an element inside the card (child element))
// card.addEventListener('mouseout', runEvent);

//Mousemove 
card.addEventListener('mousemove', runEvent);


//Event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    //tracks the x and y coordinates of the mouse in the h5 Tasks tag using .textContent
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
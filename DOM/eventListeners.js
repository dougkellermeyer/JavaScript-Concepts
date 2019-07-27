//EVENTS
//first grab the clear tasks button with the querySelector
//then add the EventListner which takes in the kind of event and then a callback (a function that is passed as an argument) that is executed each time the event occurs 

//we can provide a named function (onClick in this case) as opposed to writing out the function directly in the callback

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('clicked')

    var val;

    val = e; //prints the event object in the console

    //Event target element (which shows what element the event actually happened on)
    val = e.target;
    val = e.target.className; //gets the class of the target (a tag)

    //Event type
    val = e.type;

    //Timestamp
    val = e.timeStamp;

    //Coordinates of the event relative to the window
    val = e.clientY;
    val = e.clientX;

     //Coordinates of the event relative to the element
     val = e.offsetY;
     val = e.offsetX;
    
    console.log(val); 
}
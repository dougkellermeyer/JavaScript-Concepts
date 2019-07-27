//REPLACE an element

//Create an element
var newHeading = document.createElement('h3');

//Add id 
newHeading.id = 'task-title';

//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading (what we will be replacing)
var oldHeading = document.getElementById('task-title');

//Parent 
var cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

//REMOVE an element
var lis = document.querySelectorAll('li');
var list = document.querySelector('ul'); 

//Remove a specific list item
lis[0].remove();

//Remove child element
list.removeChild(lis[2])

//CLASSES & ATTRIBUTES
var firstLi = document.querySelector('li:first-child');
var link = firstLi.children[0];

var val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test'); //add test to the existing class
link.classList.remove('test'); //remove test from the class

//Attributes 
val = link.getAttribute('href');
//add attribute
val = link.setAttribute('href','http://google.com');
link.setAttribute('title','Google')

//remove attribute
link.removeAttribute('title');

val = link.hasAttribute('title');



val = link;

console.log(val);
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

//Get child nodes (gives all the nodes)
val = list.childNodes;

//Types of nodes
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - document itself
// 10 - Doctype

//So lets look at some node types from ul list above...

val = list.childNodes[0].nodeType; // 3 - text node
val = list.childNodes[1].nodeType; // 1 - element  
val = list.childNodes[3].nodeType; // 8 - comment

//Get children element nodes (just the elements)
val = list.children;
val = list.children[0];
val = list.children[1].textContent = 'another item';

//children of children 
val = list.children[3].children; //gives us the delete link in the fist li

//if we wanted to get in the a tag of that link we would simply direct to the first item in the delete link array
val = list.children[3].children[0]; //<a ... </a>

//First child
val = list.firstChild; //gives us the first text node

//First element child gives us the first element node, ignoring text nodes
val = list.firstElementChild; // <li...</li>

//Last child
val = list.lastChild;
val = list.lastElementChild;

//Child element count, counts the number of child elements
val = list.childElementCount; //5

//Get parent node
val = listItem.parentNode; //Gives us the ul

//Get parent element
val = listItem.parentElement; // => ul

//Just like with children we go traverse up the parent nodes like we did with children
val = listItem.parentElement.parentElement; //gives us the parent div for ul

//Get next sibling
val = listItem.nextSibling; // => text node after first li
val = listItem.nextElementSibling; // => second li 
val = listItem.nextElementSibling.nextElementSibling // => third li

//Get previous sibling
val = listItem.previousSibling; // => text node before first li (last one)
val = listItem.previousElementSibling; // => null (since it's the first li, there is no previous one)

console.log(val);
//create elements and insert it into the DOM

var li = document.createElement('li');
var anotherOne = document.createElement('li');

//Add a class
li.className = 'collection-item';
anotherOne.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.title = 'itemThingy'
li.setAttribute('title', 'New Item')

//Create text node and append
li.appendChild(document.createTextNode('Hello World'));

//Create new link element (we want the plus sign to show up next to our li)
var link = document.createElement('a');

//Add class to our link 
link.className = 'delete-item secondary-content';

//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//Appned link into li
li.appendChild(link);

//Append li as child to ul (make it show up on the page)
document.querySelector('ul.collection').appendChild(li);

console.log(li)
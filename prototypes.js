//Each object in JavaScript has a prototype. A prototype is an object, all objects inherit their properties and methods from their prototype.  

//Object literals, you inherit from from a prototype called Object.prototype

//Objects that are created from a constructor come from that prototype (Person.prototype from Constructors.js)

function Person(name, lastName, dob){
    this.firstName = name;
    this.lastName = lastName;
    this.birthday = new Date(dob)

    //move the code below in the prototype because the function won't change like names will - we also aren't bogging down our Constuctor
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime()
    //     const ageDate = new Date(diff)
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
}

//Calcualate age 
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

//Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Get married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const doug = new Person('Doug', 'Kellermeyer', '12-23-1990');
const kenz = new Person('Kenz', 'Kellermeyer', '11-3-1990');

console.log(doug)
console.log(doug.calculateAge())
console.log(doug.getFullName())
doug.getsMarried('Glaze')
console.log(doug.getFullName())

console.log(doug.hasOwnProperty('firstName')) //true
console.log(doug.hasOwnProperty('dog')) //false
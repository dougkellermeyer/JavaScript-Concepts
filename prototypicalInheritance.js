//Person constructor 
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function(){
    return `hi there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('Doug','Kellermeyer');

// console.log(person1.greeting());

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Create a customer

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName)
    this.phone = phone;
    this.membership = membership;
}

const customer1 = new Customer('Bill', 'Smith', '555-555-5555', 'Standard')
console.log(customer1)

console.log(custom1.greeting())
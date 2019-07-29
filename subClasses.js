class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Yo ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        //super call the parents class construtor
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Smith', '555-555-5555', 'Standard');

console.log(john.greeting())

console.log(Customer.getMembershipCost())
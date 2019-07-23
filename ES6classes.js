//using ES6 to build objects and classes

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob)
    }

    greeting(){
        return `Hi there ${this.firstName} ${this.lastName}`
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    //static method
    static addNumbers(x,y){
        return x + y;
    }
}

const doug = new Person('Doug','Kellermeyer', '12-23-1992');

console.log(doug.greeting());
console.log(doug.calculateAge());

console.log(Person.addNumbers(1,2))
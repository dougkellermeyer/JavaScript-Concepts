//constructors are a special type of function that allows us to use the `new` keyword to create multiple objects with the same properties and methods

function Person(name,dob){
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob)
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

// const doug = new Person('Doug',26);
// const mackenize = new Person('Mackenzie',25);

// console.log(doug)
// console.log(mackenize)

const doug = new Person('Doug', '12-23-1992')
const mackenzie = new Person('Mackenzie', '11-3-1993')
console.log(doug.calculateAge())
console.log(mackenzie.calculateAge())

const scott = new Person('Scott', '5-03-1962');
console.log(scott.calculateAge());


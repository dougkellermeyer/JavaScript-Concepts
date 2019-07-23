const personPrototypes = {
    greeting: function(){
        return `Sup there hoss ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const doug = Object.create(personPrototypes);

doug.firstName = 'Doug';
doug.lastName = 'Kellermeyer';
doug.age = 26;

console.log(doug)

const will = Object.create(personPrototypes);
will.firstName = 'Will';
will.lastName = 'Kellermeyer';
will.age = 24;



will.getsMarried('Smith')
console.log(will.greeting());
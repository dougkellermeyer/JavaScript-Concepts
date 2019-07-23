const personPrototypes = {
    greeting: function(){
        return `Sup there hoss ${this.firstName} ${this.lastName}`
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

console.log(will.greeting());
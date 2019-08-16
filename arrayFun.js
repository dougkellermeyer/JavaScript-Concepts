const dogs = ['Hank', 'Hudson', 'Penelope'];

const dogsLowerCase = [];

dogs.forEach(function(value, index, array){
    dogsLowerCase.push(value.toLowerCase());
});

console.log(dogsLowerCase);


//lets take a look at some of the constructors that are native (built in) Javascript

const name1 = 'Doug'
const name2 = new String('Doug')

// console.log(name1) => 'Doug'
// console.log(name2) => [String: 'Doug']

//it's important to note that although name2'value is still 'Doug', 
//it is technically an object, NOT a string like name1 

console.log(typeof name1) // 'string'
console.log(typeof name2) // 'object'

//let's test this:

if(name1 === 'Doug'){
    console.log('yep')
}else{
    console.log('nope')
}
//the above prints 'yep' to the console - because name1 has a value of 'Doug' and is a string

//what about this?
if(name2 === 'Doug'){
    console.log('yep')
}else{
    console.log('nope')
}

//this prints a 'nope', because despite the value of name2 being equal to 'Doug', 
//it is NOT a string but rather an object

//Number 

const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2); // => object

//Boolean

const boo1 = true;
const boo2 = new Boolean(true); // => object

console.log(typeof boo2);

//Function

const getSum1 = function(x,y){
    return x + y
};

const getSum2 = new Function('x','y', 'return 1 + 1')
console.log(getSum2(1,1))

//Object

const john = {name: 'John'};
const john1 = new Object({name:'John'});
console.log(john1)

//Array 
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3)
console.log(arr1,arr2)

//Regex
const reg1 = /\w+/
const reg2 = new RegExp('\\w+')
console.log(reg1)
console.log(reg2)
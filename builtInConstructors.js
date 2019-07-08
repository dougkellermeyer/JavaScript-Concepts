//lets take a look at some of the constructors that are native (built in) Javascript

const name1 = 'Doug'
const name2 = new String('Doug')

// console.log(name1) => 'Doug'
// console.log(name2) => [String: 'Doug']

//it's important to note that although name2'value is still 'Doug', it is technically an object, NOT a string like name1 
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

//this prints a 'nope', because despite the value of name2 being equal to 'Doug', it is NOT a string but rather an object

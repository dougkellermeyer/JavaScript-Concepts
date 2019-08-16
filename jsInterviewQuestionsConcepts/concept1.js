//the following code returns false. Justify why
console.log(0.2 + 0.1 === 0.3) //false 
console.log(0.2 + 0.1) //0.30000000000000004

//This returns false because all numbers in JavaScript are floating point numbers that can't be approximated by decimals 

//Basically avoid decimals and just use whole integers
console.log(02 + 01 === 03) // true
console.log(02 + 03)
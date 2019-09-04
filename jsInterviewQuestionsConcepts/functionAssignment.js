// console.log(square(5)); //25 (with the function square) BUT TypeError: square is not a function with the var square = function 
console.log(square(5));


function square(n){return n * n};

console.log(square2(5));

var square2 = function(n) {
    return n * n;
};


//Why does the second function, that is assigned to the variable square, fail?
//The answer is when you define a function as a variable, the variable name will be hoisted but you cannot access it until JS execution gets this definition 

const square = (n) => n * n;




//call, apply, and bind are very useful functions for being able to define `this` and passing args when invoking functions

//let's take a look at call first. It's format is function.call(thisArg, arg1, arg2, ...)

function identify(){
  var response = [this.name, this.age];
  console.log(response);
}

var me = {
    name: "Doug",
    age: 26
}

var someoneElse = {
    name: "John",
    age: 30
}

identify.call(me) // => "Doug"
identify.call(someoneElse) // => "John"



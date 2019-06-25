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

//-------another call() example--------

function callMe(a,b,c){
  console.log(a,b,c)
  console.log(this.a) // 4
}

var obj = {
a: 4
}

callMe.call(obj,1,2,3)




// callMe.call(obj,1,2,3) // we are binding obj's `this` to callMe()


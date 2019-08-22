//apply is very similar to call() except that takes an array of args rather than explicitly stated like in call()

//format is function.apply(thisArg, [args])

function applyMe(...args){
    console.log(...args) // 1 2 3 4
    console.log(this.a) // 4
  }
  
  var obj = {
  a: 4
  }

  array = [1,2,3,4]
  
  applyMe.apply(obj,array)

  
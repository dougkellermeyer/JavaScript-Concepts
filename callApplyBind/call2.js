//-------another call() example--------

function callMe(a,b,c){
    console.log(a,b,c)
    console.log(this.a) // 4
  }
  
  var obj = {
  a: 4
  }
  
  callMe.call(obj,1,2,3)
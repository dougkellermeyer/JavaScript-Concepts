//the bind method is a little bit different than call and apply

//bind does NOT execute right away, it creates a new function that is hard bound to the object we assign as `this`

//format is function.bind(thisArg)

var obj = {
    greeting: "hi",
    speak: function(){
        console.log(this.greeting)
    },        
}

obj.speak() // => "hi"

var talkFunction = obj.speak
talkFunction(); // => undefined - we've lost our `this` binding

talkFunction.bind(obj)(); //undefined
var boundTalkFunction = talkFunction.bind(obj);
boundTalkFunction() // => "hi"

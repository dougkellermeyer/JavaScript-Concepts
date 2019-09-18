//Promises are an alternative to aysnchronous callbacks

//They let us handle asychronous operations by waiting to do someting until an operation is finished

somethingArray = [];

function doSomething(arr){
   
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("promise created... ")
            somethingArray.push(arr);
            const err = false;
            if(!err){
                resolve();
            } else{
                reject('Error: Something went wrong')
            }
           
        }, 1000);
    });
}

function doSomethingElse(){
    setTimeout(function(){
        console.log("looking up the array...")
        console.log(somethingArray);
    }, 2000);
}

doSomething('I did something')
    .then(doSomethingElse)
    .catch(function(err){
        console.log(err)
    });
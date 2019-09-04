document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //Create req object
    const req = new XMLHttpRequest();
    
    //OPEN - specify the type of request we want to make 

    //Optional - used for spinners/loaders
    req.onprogress = function(){
        console.log('READYSTATE', req.readyState); //READYSTATE 3 - processing request
    };

    req.open('GET', 'data.txt', true);

    //can see the ready state
    // console.log('READYSTATE', req.readyState);

    req.onload = function(){
        console.log('READYSTATE', req.readyState);

        if(this.status === 200){
           document.getElementById('output').innerHTML = 
           `<h1>${this.responseText}</h1>`;
        }
    };

    req.onerror = function(){
        console.log('Request erorr...')
    };

    req.send();

    //HTTP Statusees
    //200: OK
    //403: Forbidden
    //404: Not found

    //readyState values
    //0: request not initialized
    //1: server connection established
    //2: request achieved
    //3: processing request
    //4: request finished and response is ready

};
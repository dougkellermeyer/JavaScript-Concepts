document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //Create XHR object
    const xhr = new XMLHttpRequest();
    
    //OPEN - specify the type of request we want to make 
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    };

    xhr.send();

    //HTTP Statusees
    //200: OK
    //403: Forbidden
    //404: Not found

};
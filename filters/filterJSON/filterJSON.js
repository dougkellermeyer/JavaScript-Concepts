document.getElementById('getDataButton').addEventListener('click', loadData);

function loadData(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'gameData.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('outputData').innerHTML = 
            `<p>${this.responseText}</p>`;
        }
    };

    xhr.onerror = function(){
        console.log('An error occurred on the request')
    };

    xhr.send();

};


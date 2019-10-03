document.getElementById('getDataButton').addEventListener('click', loadData);

function loadData(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'gameData.json', true);

    xhr.onload = function(){
      
        if(this.status === 200){
            let res = JSON.parse(this.responseText);

            //filterBy function would go here
            function filterBy(response){
                this.response = response;
                console.log(response)
            }

            filterBy(res);
            
            let filteredRes = res.filter(function(game){
                return game.homeTeam;
            });
            console.log(filteredRes)
            //put data on the page
            document.getElementById('outputData').innerHTML = 
            `<p>${filteredRes[0].homeTeam}</p>`;
        }
    };

    xhr.onerror = function(){
        console.log('An error occurred on the request')
    };

    xhr.send();

};


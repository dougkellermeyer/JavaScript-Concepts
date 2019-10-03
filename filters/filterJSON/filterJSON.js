function loadData(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'gameData.json', true);

    xhr.onload = function(){
      
        if(this.status === 200){
            let res = JSON.parse(this.responseText);

            //put data on the page
            // document.getElementById('outputData').innerHTML = 
            //loop or map filterRes to output filterBy result
            // `<p>${this.responseText}</p>`;

            //just put the filter logic here and return all the games if there 
            //isn't a filter param

            //filterBy function would go here
            function filterBy(response, filterParam){
                this.response = response;
                console.log(response)
                //use filterParam from dropdown
            };

            filterBy(res);

            // let filteredRes = res.filter(function(game){
            //     return game.homeTeam ===;
            // });
            // console.log(filteredRes)
        };
        
    };

    xhr.onerror = function(){
        console.log('An error occurred on the request')
    };

    xhr.send();

    // return res
};

//invoke our function so the data is available 
// loadData()




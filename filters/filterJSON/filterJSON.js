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

//create an IIFE to grab the divison select options
(function(){
    var divisionsArr = ["AFC East", "AFC West", "AFC North", "AFC South", "NFC East", "NFC West", "NFC North", "NFC South"];
    var division = document.getElementById("division"),
    df = document.createDocumentFragment();

    //loop through the divisions
    //TODO replace the hardcoded 7 with lenght of the division array
    for (let i = 0; i < divisionsArr.length; i++){
        var divisionOption = document.createElement('option');
        divisionOption.value = i;
        divisionOption.appendChild(document.createTextNode(divisionsArr[i]));
        df.appendChild(divisionOption);
    }
    division.appendChild(df);
}())


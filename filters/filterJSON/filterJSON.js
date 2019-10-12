function loadData(elementValue){
    
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'gameData.json', true);

        xhr.onload = function(){
            let res = JSON.parse(this.responseText); 
            
            if(!elementValue){
                //put data on the page
                document.getElementById('outputData').innerHTML = 
                // loop or map filterRes to output filterBy result
              `<p>${this.responseText}</p>`;
              //see else statement below
            } else{
                function filterBy(response, filterParam){
                    console.log(response, filterParam);

                    //make a helper function to feed into filter
                    //determine if it is a division, conference or team param

                    function isDivision(param){
                      let divisionsArray =["AFC East", "AFC West", "AFC North", "AFC South", "NFC East", "NFC West", "NFC North", "NFC South"];

                      if(divisionsArray.includes(param)){
                          return true;
                      }
                      else{
                          return false;
                      }
                    };

                    isDivision(filterParam);

                    function isConference(param){
                        let conferenceArray =["NFC", "AFC"];
  
                        if(conferenceArray.includes(param)){
                            return true;
                        }
                        else{
                            return false;
                        }
                      };
  
                      isConference(filterParam);

                      function isTeam(param){
                        let teamArray = [
                        "Arizona Cardinals", 
                        "Atlanta Falcons", 
                        "Baltimore Ravens", 
                        "Buffalo Bills", 
                        "Carolina Panthers", 
                        "Chicago Bears", 
                        "Cincinnati Bengals", 
                        "Cleveland Browns", 
                        "Dallas Cowboys", 
                        "Denver Broncos", 
                        "Detroit Lions", 
                        "Green Bay Packers", 
                        "Houston Texans", 
                        "Indianapolis Colts", 
                        "Jacksonville Jaguars", 
                        "Kansas City Chiefs", 
                        "Los Angeles Rams", 
                        "Miami Dolphins", 
                        "Minnesota Vikings", 
                        "New England Patriots", 
                        "New Orleans Saints", 
                        "New York Giants", 
                        "New York Jets", 
                        "Oakland Raiders", 
                        "Philadelphia Eagles", 
                        "Pittsburgh Steelers", 
                        "San Diego Chargers", 
                        "San Francisco 49ers", 
                        "Seattle Seahawks", 
                        "Tampa Bay Buccaneers", 
                        "Tennessee Titans", 
                        "Washington Redskins"
                    ];
  
                        if(teamArray.includes(param)){
                            return true;
                        }
                        else{
                            return false;
                        }
                      };
  
                      isTeam(filterParam);

            
                function determineFilterParam(param){
                    if(isDivision(param)){
                        console.log("it's a division!");
                    } else if(isConference(param)){
                        console.log("it's a conference!");
                    } else if(isTeam(param)){
                        console.log("it's a team!")
                    };
                };

                determineFilterParam(filterParam);

                    //use filterParam from dropdown
                    let filteredRes = res.filter(function(game){
                        //TODO replace homeTeamDivision with gameParam
                        
                            return game.homeTeamDivision === filterParam;
                    });

                    document.getElementById('outputData').innerHTML =
                    `<p>${JSON.stringify(filteredRes)}</p>`;
                };
                //invoke our filterBy function, giving it the GET response and elementValue
                filterBy(res, elementValue);
            };

            // else{
            //     function filterBy(response, filterParam){
            //         console.log(response, filterParam);
            //         //use filterParam from dropdown
            //         let filteredRes = res.filter(function(game){
            //             //TODO replace homeTeamDivision with gameParam
            //         let gameParam = [game.homeTeamDivision, game.awayTeamDivision, game.homeTeam, game.awayTeam];
            //         //TODO put a for loop here to loop through the game param
            //         return gameParam === filterParam;

            //         });
            //         document.getElementById('outputData').innerHTML =
            //         `<p>${JSON.stringify(filteredRes)}</p>`;
            //     };
            //     //invoke our filterBy function, giving it the GET response and elementValue
            //     filterBy(res, elementValue);
            // }  
        };

        xhr.onerror = function(){
            console.log('An error occurred on the request')
        };

        xhr.send();

        // return res
};

//invoke our function so the data is available 
loadData();




//-------old IIFE code to not hard code the select options------------

//create an IIFE to grab the divison, conference, and team select options
// (function(){
//     var divisionsArr = ["AFC East", "AFC West", "AFC North", "AFC South", "NFC East", "NFC West", "NFC North", "NFC South"];
//     var division = document.getElementById("division"),
//     df = document.createDocumentFragment();

//     //loop through the divisions
//     for (let i = 0; i < divisionsArr.length; i++){
//         var divisionOption = document.createElement('option');
//         divisionOption.value = i;
//         divisionOption.appendChild(document.createTextNode(divisionsArr[i]));
//         df.appendChild(divisionOption);
//     }
//     division.appendChild(df);
// }());

// (function(){
//     var conferenceArr = ["AFC", "NFC"];
//     var conference = document.getElementById("conference"),
//     df = document.createDocumentFragment();

//     //loop through the divisions
//     for (let i = 0; i < conferenceArr.length; i++){
//         var conferenceOption = document.createElement('option');
//         conferenceOption.value = i;
//         conferenceOption.appendChild(document.createTextNode(conferenceArr[i]));
//         df.appendChild(conferenceOption);
//     }
//     conference.appendChild(df);
// }());

(function(){
    var teamsArr = ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers", "San Diego Chargers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"];
    var team = document.getElementById("team"),
    df = document.createDocumentFragment();

    //loop through the divisions
    for (let i = 0; i < teamsArr.length; i++){
        var teamOption = document.createElement('option');
        teamOption.value = i;
        teamOption.appendChild(document.createTextNode(teamsArr[i]));
        df.appendChild(teamOption);
    }
    team.appendChild(df);
}());


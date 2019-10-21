/**
 * 
 * @param {HTMLElement} element 
 */
function loadData(element){
        //conditional null check on element
        if(element){
            var elementValue = element.value;
            var filterFields = element.getAttribute("data-filterBy").split(",");
        } else {
            var elementValue = null;
        }
    
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'gameData.json', true);

        xhr.onload = function(){
            let res = JSON.parse(this.responseText); 
            let divisionsArray =["AFC East", "AFC West", "AFC North", "AFC South", "NFC East", "NFC West", "NFC North", "NFC South"];

            if(!elementValue){
                //put data on the page
                document.getElementById('outputData').innerHTML = 
                // loop or map filterRes to output filterBy result
              `<p>${this.responseText}</p>`;
              //see else statement below
            } else{
                function filterBy(response, filterParam, gameParams){


                //add second loop for multiple key values
                //check to see if the key value matches and return those matches
                function findObjectByKey(matches, key, value) {
                    return matches.filter(function(match){
                        //TODO, loop through the keys rather than 
                        for(let i = 0; i < key.length; i ++){
                             if(match[key[i]] === value|| match[key[i]].includes(value)){
                                 return true
                             }
                        }
                    });

                };

                let matches = findObjectByKey(res, gameParams, filterParam);
                
                document.getElementById('outputData').innerHTML = `<p>${JSON.stringify(matches)}</p>`;

                //*

                };
                //invoke our filterBy function, giving it the GET response and elementValue
                filterBy(res, elementValue, filterFields);
            };
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

// (function(){
//     var teamsArr = ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants", "New York Jets", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers", "San Diego Chargers", "San Francisco 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"];
//     var team = document.getElementById("team"),
//     df = document.createDocumentFragment();

//     //loop through the divisions
//     for (let i = 0; i < teamsArr.length; i++){
//         var teamOption = document.createElement('option');
//         teamOption.value = i;
//         teamOption.appendChild(document.createTextNode(teamsArr[i]));
//         df.appendChild(teamOption);
//     }
//     team.appendChild(df);
// }());


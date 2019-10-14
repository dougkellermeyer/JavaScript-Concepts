var cities = [
    "Cleveland, Ohio", 
    "East Rutherford, New Jersey", 
    "Charlotte, North Carolina"
];

let justCityName = [];

console.log(cities.map((c) => c.substring(0, c.indexOf(","))));



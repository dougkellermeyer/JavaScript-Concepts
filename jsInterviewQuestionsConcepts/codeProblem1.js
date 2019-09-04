//implement a.mulitply() so that console.log(a) = [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]

//first attempt

const a = [1, 2, 3, 4, 5];

// const mulitply = (arr) => {
//     var arrSquared = [];
//     for (let i = 0; i < arr.length; i++){
//         arrSquared.push(arr[i]*arr[i]);
//     }

//     return arr.concat(arrSquared);
// };  

//second attempt
const multiplyArray = (arr) => arr.map((i) => i*i);

const arrSquared = a.concat(multiplyArray(a));

console.log(arrSquared);

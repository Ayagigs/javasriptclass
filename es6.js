import {users} from "./users";
const numbers = [2,4,5,6,1];

function numberabove3(arr){
    let result = [];
 for(let num of numbers){
     if(num > 3){
result.push(num)
     }
 }
 return result;
}

// console.log(numberabove3(numbers));

//es6

const num3 = numbers.filter(number=>number > 3);
// console.log(num3);


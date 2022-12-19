const arr1 = [1,2,3,4];
const arr2 = [5,6];

//spread operator
let arr3   = [...arr1, ...arr2];

// console.log(arr3);

//obj
let person = {
    name:"Femi",
    occupation:"Engineer"
}

let profile = {
    age:34
}

let persondetails = {...person, ...profile};
console.log(persondetails);
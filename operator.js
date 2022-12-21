// const arr1 = [1,2,3,4];
// const arr2 = [5,6];

// //spread operator
// let arr3   = [...arr1, ...arr2];

// // console.log(arr3);

// //obj
// let person = {
//     name:"Femi",
//     occupation:"Engineer"
// }

// let profile = {
//     age:34
// }

// let persondetails = {...person, ...profile};
// console.log(persondetails);

//destructurting

// const[,,,c,d=45]=[2,4,6,8,56];
// // console.log(a)
// // console.log(b);

// console.log(d);

let fullname = "Adebayo Michael Adewumi";
const name = fullname.split(' ');
// console.log(name.length);
// console.log(name);
// console.log(name[0]);
// let[firstname, lastname,middlename=null]=name;

// console.log(middlename);

// let firstname = "Onyeka";
// let lastname ="Fatomi";
// let age = 23;

const person = {
    firstname:"Onyeka",
    lastname:"Fatomi",
    age:23
}

let {lastname}=person;
// console.log(lastname);

function grade() {
    return["A","B","C","D","E"];
}

let [x,y,...z]=grade();
// console.log(x);
// console.log(y);
// console.log(z);

// nested object
function profile(){
    return[
        "Amos",
        "Caleb",
        ["Java","c++","php"]
    ]
}
 
let[first,
    last,
    [
        subj1,
        subj2,
        subj3]
]=profile();

// console.log(subj3);

function add(a,b,...args){
    let sum = a + b;
    for(let ele of args){
        sum+=ele;
    }
    return sum;
}

console.log(add(1,2,4,5,6,7,8));
// let a = 4;
// let b =5;
// let c = 7;

// //[]

// let numbers = [4,5,7,6,8,9];//0,1,2
// // console.log(numbers[2]);

// let arraLen = numbers.length;
// // console.log(arraLen);

// //obtain last element in array
// let last = numbers.length-1;
// // console.log(numbers[last]);

// // console.log(typeof numbers);

// //modify
// numbers[1] = 55;
// // console.log(numbers);

// numbers[100] = 45;

// // console.log(numbers.length);

// console.log(numbers[50]);

// const food = ["rice","beans","Indomie"];

// food[0]="Shawama";
// console.log(food);

// food[7] = "Yam";
// console.log(food);

// console.log(food.length);

//add to array

// push end

// food.push("banana");
// console.log(food);
// food.push("moimoi", "Orange")
// console.log(food);

// unshift start
// food.unshift("Garri");
// console.log(food);

//splice middle

// food.splice(1,0,"Casava");
// console.log(food);

// const swin = ["river","ocean","pool"];

// swin.unshift("Lake")

// // console.log(swin);

// swin.push("WATER WATER");
// console.log(swin);


//remove from array
const cars = ["Toyota","Ferrari","Tesla"];
//pop last item
// let deleteItem = cars.pop()
// console.log(deleteItem);

//delete from start

// cars.shift();

// cars.splice(1,1)

// console.log(cars);

//  console.log(cars.includes("Mazda")); 

//   console.log(cars.indexOf("Ferrari")); 

//   cars.sort()
//   console.log(cars);

// class work

// const mixValues = ["1",3,"10","5",10,90,"tayo",34];
// // add all the only in the array and return the sum
// let sum = 0;
// // console.log(mixValues[1]);
// for(let i = 0; i<mixValues.length;i++){
//    if(typeof mixValues[i] === 'number'){
//     sum +=mixValues[i];
//    }
// }

// console.log(sum);


// seond question

// find the second largest and second smallest number in a given array

//function decalartion
//function expressiion 

// function findseconmaxmin(arr){
// arr.sort((a,b)=>a-b);
// // let secondMin= arr[1];
// // let seconMax = arr[arr.length-2];

// arr.pop();
// arr.shift();

// // console.log("Min: "+secondMin, "Max: "+seconMax);
// console.log("Min: "+arr[0], "Max: "+arr[arr.length-1]);
// }

// const val = [1,3,54,6,23,9];

// findseconmaxmin(val);

// write a js code to remove the duplicate from a given array

// const item = [1,3,5,6,7,3,8,2]//[1,3,5,6,7,8]

// function removeDupl(arr){
// // return [... new Set(arr)];
// const res = [];

// for(let i=0; i<arr.length; i++){
//     if(!res.indexOf(arr[i]) !== -1){
//         res.push(arr[i]);
//     }   
// }
// return res;

// }
// console.log(removeDupl(item));


// let numbers = [1,3,6,7];
// // for(let i=0; i<numbers.length;i++){
// //   let num = numbers[i];

// for(let num of numbers){
// console.log(num);
// }
  
// numbers.forEach()

// for( in )










//write a function that will translate an array of commands 


// 1: "UP",
// -1 :"DOWN",
// -5 :"LEFT",
// 5 : "RIGHT"

// Output
// [1,-1,-5,5]=>["UP","DOWN","LEFT","RIGHT"]
// [5,5]=>["RIGHT","RIGHT"],
// [] = []


function encry(arr){
    let output = [];

    for(let num of arr){
        if(num === 1){
            output.push("UP");
        }else if(num===-1){
            output.push("DOWN");
        }
    }
}
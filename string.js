
let username = "Adebayo";

// console.log(username.length);

// console.log(username.charAt(0));
// console.log(username.charAt(username.length-1));

//write a js code that will reverse a string 

// hello => olleh
// mike => ekim



// for(let i=1; i<=5;i++){
//     // console.log(i);
// }

// for(let i =5; i>0; i--){
//     console.log(i);
// }

// function revString(str){
//     let rev = "";
//     for(let i=str.length-1; i>=0; i--){
//         let charcter = str.charAt(i);
//       rev += charcter;
//     }
//     rev = rev.replace(" ","");
//     return rev;
// }

// console.log(revString("hello world")); 



// split 
// console.log(username.split(''));

//join
// const people =["black","white","brown"];
// console.log(people.join("-"));

// sdlc => requiremnet, anaysis, design,implementation, testing, deployemnet,documenatation, maintance
// write a program to output the winner between vowel and consaonet in a given string 
// if there is no winner output draw 
//  aeoiu
// "hello" =>"consonant wins"

// "ebube"=>"vowel wins"

// "mike" => "draw";

function battle(str){
    let vowel = 0;
    let consonant = 0;
    let info = "";
    str = str.toLowerCase();
    let vowels = ["a","e","i","o","u"];

    for(let i =0; i<str.length; i++){
        let chara = str.charAt(i);

        if(vowels.includes(chara)){
            vowel++;
        }else{
            consonant++;
        }
    }

    if(vowel>consonant)
      info = "vowel wins";
     else if(consonant > vowel)
     info = "Consonant wins";
     else
     info = "draw";

    return info

}

// console.log(battle("mike"));

//write a function to return words in an array whose length is greater than a given length
// ["a","ab","abc"], 3 => []
// ["hello","world"], 1=>["hello","world"]
// ["ayagig","phone"],5 =>["ayagig"]

function wordGreater(str, len){
   const greaterLen  = [];
   
   for(let i = 0; i<str.length; i++){
    let wordLetter = str[i];

    if(wordLetter.length > len) 
    greaterLen.push(wordLetter);

   }

//    for(let word of str){
//      if(word.length > len) greaterLen.push(word);
//    }

   return greaterLen;
}

// console.log(wordGreater(["ayagig","phone"],5));






//write a function that will repeat the vowel in a given string the number of time facetor

// "hello", 2 =>heelloo
// "mike", 1 => mike,
// "aya", 4 => aaaayaaaa

// let letter = ""
// for(let i=0; i<5;i++){
//      letter +="a";
// }

// console.log(letter);


let lett = "a";
console.log(lett.repeat(4));



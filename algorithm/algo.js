
export function addition(a,b){
    return a + b;
}

//string
// write program will remove number from a given string
// ade213 => ade
// co3l4lins => collins

export function onlyLetter(str){
    let letter = "";
    let number = "0123456789";
    for(let i=0; i<str.length;i++){
       let item = str.charAt(i);
    
       if(!number.includes(item)){
        letter+=item;
    }
    }
    
    return letter;
    }
    

function onlyLetter(str){
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
    
    console.log(onlyLetter("ade123"));

let btn = document.querySelector(".send");

btn.addEventListener("click",(e)=>{
   let pass = document.querySelector(".password").value ;
   let info = document.querySelector(".info");

   if(pass.length < 5){
    info.style.color = "red";
   info.textContent = "Please password length must be greater than 5";
   }

})
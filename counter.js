


let incre = document.querySelector(".btn-increment");
let decre = document.querySelector(".btn-decrement");

let result = document.querySelector(".result");

let count = 0;

incre.addEventListener("click",(e)=>{
    result.textContent = count++;
});

decre.addEventListener("click",(e)=>{
    result.textContent = count--;
})


import {it,expect} from "vitest"
import {addition,onlyLetter} from "./algo"

// it('2 plus 5 must be 7',()=>{
//     let a=2;
//     let b = 5;
//     let ans = 7
//     const result = addition(a,b);

//   expect(result).toBe(ans);
// })

// it('-10 plus 7 must be -3',()=>{
   
//     const result = addition(-10,7);

//   expect(result).toBe(-3);
// })


// it('0 plus 0 must be 0',()=>{
    
//     const result = addition(0,0);

//   expect(result).toBe(1);
// })

it("ade213 should return  ade",()=>{
    const result = onlyLetter("ade213");
    expect(result).toBe("ade");
})

it("co3l4lins should return  collins",()=>{
    const result = onlyLetter("co3l4lins");
    expect(result).toBe("collins");
})
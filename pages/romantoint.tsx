import React, { useState } from "react";

function RomanToInt(){
    let result = ''
    const [output, setOutput] = useState<String>();
    const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    const handleInput = (text:string) =>{
        const n = parseInt(text);
        const res = calculate(n);
        setOutput(res);
    }

    const calculate = (n:number) =>{
        if(n > 0 && n < 10000) {
            for (let i = 0; i < number.length; i++) {
                while (n >= number[i]) {
                  result += roman[i];
                  n -= number[i];
                }
            }
            return result
        } else {
            return 'No roman number for this'
        }
    }
    
    return(
        <div style={{padding: '20px'}}>
        <input type="text" onChange={(e)=>handleInput(e.target.value)}/>
        <div>{output}</div>
        </div>
    )
}

export default RomanToInt
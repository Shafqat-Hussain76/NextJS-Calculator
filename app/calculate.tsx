"use client"
import { useState } from "react";
export default function Calculate({data}){
    let [res, setRes] = useState(0);
    let [num1, num2, add] = data;
    let result = ()=>{
        switch (add) {
            case "+":
                setRes(num1 + num2)
                break;
            case "-":
                setRes(num1 - num2)
                break;
            case "*":
                setRes(num1 * num2)
                break;
        
            default:
                break;
        }
    }
    return (
        <>
        <button onClick={result}>Click</button>
        <h3>The Result is {res}</h3>
    
        </>
    )


}
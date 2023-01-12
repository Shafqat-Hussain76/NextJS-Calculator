"use client";
import Calculate from "./calculate"
import { useState } from "react"
export default function Page(){
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [add, setAdd] = useState("");
  return( 
    <>
    <form>
      <label htmlFor="Num1">Enter Number 1</label>
      <input name = "Num1" type="number" onChange={(e)=>setNum1(Number(e.target.value))}/> <br /> <br />
      <label htmlFor="Num2">Enter Number 2</label>
      <input name = "Num2" type="number" onChange={(e)=>setNum2(Number(e.target.value))}/>

      <select name="operator" id="Ope" onChange={(e)=>setAdd(e.target.value)}>
        <option value="*" >*</option>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
    </form>
    
    <Calculate data = {[num1, num2, add]}/>

    </>

    
      
    
  )
}
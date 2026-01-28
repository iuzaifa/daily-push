import React, { useState } from 'react'

const InputClear = () => {

    const [inputValue, setInputValue] = useState("test")

    let color = "green"
    if(inputValue.length >= 20 ){
        alert("Danger Zone")
        color = "red";
    }else if (inputValue.length >= 10){
        color = "red";
    }
  return (
    <>
      <div style={{ textAlign: "center", border: "1px solid gray", padding : "20" , width : "720px", margin : "auto"}}>
        <h2>Type in Input some text and then clear with button </h2>
        <input type="text" value={inputValue} onChange={(e)=>  setInputValue(e.target.value)} name="" id=""  placeholder='Enter some text.... ' style={{padding : " 10px", width :"300px" , marginRight : "20px"}}/> 
        <button onClick={()=> setInputValue("")} >Clear </button>
        <h1 style={{color : `${color}`}} >{inputValue}</h1>
      </div>
    </>
  );
}

export default InputClear
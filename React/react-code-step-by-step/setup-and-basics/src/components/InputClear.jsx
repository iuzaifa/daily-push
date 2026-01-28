import React, { useState } from 'react'

const InputClear = () => {

  const [val, setVal] = useState("")

    // const [inputValue, setInputValue] = useState("test")

    // let color = "green"
    // if(inputValue.length >= 20 ){
    //     alert("Danger Zone")
    //     color = "red";
    // }else if (inputValue.length >= 10){
    //     color = "red";
    // }
  return (
    <>
      {/* <div style={{ textAlign: "center", border: "1px solid gray", padding : "20" , width : "720px", margin : "auto"}}>
        <h2>Type in Input some text and then clear with button </h2>
        <input type="text" value={inputValue} onChange={(e)=>  setInputValue(e.target.value)} name="" id=""  placeholder='Enter some text.... ' style={{padding : " 10px", width :"300px" , marginRight : "20px"}}/> 
        <button onClick={()=> setInputValue("")} >Clear </button>
        <h1 style={{color : `${color}`}} >{inputValue}</h1>
      </div> */}


        <div style={{width : "720px" , margin : "auto", padding : "10px", border : "1px solid gray"}}>
          <h2>Type in Input some text and then clear with button </h2>
          <p><strong>Text: </strong> {val ? val : "No value Here "}</p>
          <input value={val} onChange={(e) => setVal(e.target.value)} type="text" name="" id=""  style={{width : "500px", padding:"10px",}} placeholder='Enter text' />
          <button onClick={()=> setVal("")} style={{padding : "10px", marginLeft : "10px"}}>Clear All Text</button>


        </div>



    
    </>
  );
}

export default InputClear
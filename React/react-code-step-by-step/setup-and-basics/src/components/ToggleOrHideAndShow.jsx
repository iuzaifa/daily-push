import { useState } from "react";
import Todo from "./Todo";


function ToggleOrHideAndShow (){

    const [display , setDisplay] = useState(false);
    return (
      <>
        <h1 style={{textAlign : "center"}}>Toggle Or Hide And Show in React JS</h1>
        <h2>Name : {display ? "Huzaifa" : null}</h2>
        <button onClick={()=> setDisplay(!display)}>{display ?  "Hide Name" : "Show Name"} </button>

        {display ? <Todo/>  : " No Compoent"}



      </>
    );
}

export default ToggleOrHideAndShow;
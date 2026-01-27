import { useState } from "react";

function MultipleComponentInOneFile () {
    return (
        <>

            <h2>Main Components </h2>
            <ColorComponent/>
            <AninmalComponent/>
            <Sum/>

        
        </>
    )
}

function ColorComponent () {
    return (
      <>
        <h2 style={{ color: "green" }}>Color Component</h2>
        <ul style={{ border: "green 1px solid" }}>
          <li>Red</li>
          <li>Green</li>
          <li>Orange</li>
        </ul>
      </>
    );
}


// if need to export the coponent another file so mandatory is ecport the components
export function AninmalComponent(){

    return (
      <>
        <h2 style={{color : "red"}}>Aninmal Component</h2>
        <ul style={{ border: "red 1px solid" }}>
          <li>Lion</li>
          <li>Elephant</li>
          <li>Goat</li>
        </ul>
      </>
    );
}


function Sum () {
    const [result, setResult] = useState(0);
    function addition(a , b ) {
        return a + b;
    }


    return (
      <>
        <h3>{addition(89, 11)}</h3>

        <button onClick={() => setResult(addition(34, 56))}>
          Result: {result}
        </button>

        <button onClick={()=> alert("hello d")}>Click</button>
      </>
    );
}



export default MultipleComponentInOneFile;

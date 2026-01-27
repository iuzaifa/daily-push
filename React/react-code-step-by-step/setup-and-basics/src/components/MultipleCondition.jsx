import { useState } from "react";

function MultipleCondition () {

    const [counter, setCounter] = useState(0);
    console.log(counter)

    return (
      <>
        <h1>Multiple Condition Rendring </h1>
        <button onClick={() => setCounter(counter + 1)} >Click To Render The Comndition</button>

        {
        counter === 1 ? <h2>{counter} Condition</h2> 
        : counter == 2 ? <h2>{counter} Codition</h2> 
        : counter===3? <h2>{counter} Condition</h2> 
        : counter===5? <h2>{counter} Condition</h2> 
        : counter===10? <h2>10 Condition</h2> 
        : counter===15? <h2>{counter} Condition</h2> 
        : <h2>other Codition </h2> 
        }
      </>
    );
}

export default MultipleCondition;
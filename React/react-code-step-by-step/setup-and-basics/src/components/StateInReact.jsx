import { useState } from "react";

function StateInReact () {
    const [furit, setFurit] = useState("🍌");


    const handleFruit = ()=> {
        setFurit("🍎");
        if (furit === "🍎") {
          setFurit("🍌");
        }
    }


    return (
        <>
            <p> State in React JS</p>
            <h2>{furit}</h2>
            <button onClick={handleFruit}>Change Fruit Name </button>
        </>
    )
}


export default StateInReact ;
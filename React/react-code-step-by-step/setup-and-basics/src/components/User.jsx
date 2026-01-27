import { useState } from "react";


function User () {

    const [counter, setCounter] =useState(0);

    if(counter > 15 ){
        return setCounter(0);
    }

    return (
      <>
        <h2>Hello User {counter} </h2>

        <button onClick={() => setCounter(counter + 1)}>Increse Counter</button>
      </>
    );

}

export default User;
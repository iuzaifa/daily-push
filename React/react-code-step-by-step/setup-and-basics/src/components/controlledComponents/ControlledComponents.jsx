import { useState } from "react";


function ControlledComponents () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleClear() {
      setName(""),
      setEmail(""),
      setPassword("")
    }

    const handelSubmit = (e) => {
      e.preventDefault();
      console.log(name, email, password)
    }


    return (
      <>
        <h1>Controlled Components</h1>

        <form action="" method="">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder="Enter Full Name" style={{padding : "10px", width : "400px" , marginBottom : "10px"}}/>
        <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" name="" id="" placeholder="Enter your Email" style={{padding : "10px", width : "400px", marginBottom : "10px"}}/>
        <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" name="password" id="password" autoComplete="current-password" placeholder="Enter Password" style={{padding : "10px", width : "400px" ,marginBottom : "10px"}}/>
        <div>
             <button style={{padding : "10px", margin : "10px"}} onClick={handelSubmit}>Submit</button>
             {/* <button onClick={() => {setName(""); setEmail(""); setPassword("")}} style={{padding : "10px" ,margin : "10px"}}>Clear</button> */}
             <button onClick={handleClear} style={{padding : "10px" ,margin : "10px"}}>Clear</button>
        </div>
        </form>        
        
      </>
    );
}

export default ControlledComponents;
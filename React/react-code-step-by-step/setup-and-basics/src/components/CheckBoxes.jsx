import React, { useState } from "react";

const CheckBoxes = () => {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    setSkills(event.target.value)
    console.log(event.target.value, event.target.checked)

    if(event.target.checked){
        setSkills([...skills, " "+event.target.value])
    }else {
        setSkills([...skills.fillter((item) => item != event.target.value)])
    }



  };
  return (
    <>
      <h2>SELECT YOUR SKILLS</h2>


      <div style={{ textAlign: "left" }}>
        <div>
          <input onChange={handleSkills} type="checkbox" name="" id="java" value="java" />
          <label htmlFor="java">Java </label>
        </div>
        <div>
          <input onChange={handleSkills} type="checkbox" name="" id="javascript" value="javascript" />
          <label htmlFor="javascript">Javacript </label>
        </div>
        <div>
          <input onChange={handleSkills} type="checkbox" name="" id="spring" value="spring" />
          <label htmlFor="spring">Spring Boot </label>
        </div>
        <div>
          <input onChange={handleSkills} type="checkbox" name="" id="react" value="react" />
          <label htmlFor="react">React Js </label>
        </div>
        <div>
          <input onChange={handleSkills} type="checkbox" name="" id="nextjs" value="nextjs" />
          <label  htmlFor="nextjs">Next Js </label>
        </div>
        <div>
          <input onChange={handleSkills} type="checkbox" name="" id="kotlin" value="kotlin" />
          <label htmlFor="kotlin">Kotlin </label>
        </div>

        <h2  style={{padding : "5px", width : "300px", marginTop : "20px"}}> {skills.length > 0 ? skills + ", " :  "No Skills"}</h2>
        <input type="text" value={skills}  name="" id="" placeholder="Add Skills" style={{padding : "5px", width : "300px", marginTop : "20px"}} />
      </div>
    </>
  );
};

export default CheckBoxes;

import React from 'react'
import SimpleReactProps from './SimpleReactProps';
import ReactPropstWithDataEx from './ReactPropstWithDataEx';
import employee from "./data";

const Demo = () => {

    //  const profile = {
    //    name: "Ali",
    //    email: "ali@gmail.com",
    //    age: 24,
    //    address: "New Delhi",
    //  };

    //  const profileX = {
    //    name: "Ali",
    //    email: "ali@gmail.com",
    //    age: 24,
    //    address: "New Delhi",
    //  };
    return (
      <>
        {/* <SimpleReactProps user={profile} data={profileX} /> */}

        {employee.map((emp) => (
          <ReactPropstWithDataEx key={emp.id} data={emp} />
        ))}
      </>
    );
}

export default Demo

import React from 'react'

const ReactPropstWithDataEx = ({ data }) => {
  return (
    <>
      {
        <div>
          <span>Name : {data.name} || </span>
          <span>Email : {data.email} || </span>
          <span>Phone : {data.phone}  || </span>
          <span>Address : {data.address}  || </span>
          <span>Company Name : {data.companyName}  || </span>
          <hr />
        </div>
      }
    </>
  );
};

export default ReactPropstWithDataEx
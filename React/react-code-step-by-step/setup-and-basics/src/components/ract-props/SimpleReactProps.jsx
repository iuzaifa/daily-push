
import React from 'react'

const SimpleReactProps = ({user ,data}) => {
  return (
    <>
        <div>
            <h2>User 1 </h2>

            <p>Name : {user.name}</p>
            <p>email : {user.email}</p>
            <p>age : {user.age}</p>
            <p>address : {user.address}</p>
        </div>
        <div>
            <h2>User 2 </h2>

            <p>Name : {data.name}</p>
            <p>email : {data.email}</p>
            <p>age : {data.age}</p>
            <p>address : {data.address}</p>
        </div>
    
    </>
  )
}

export default SimpleReactProps
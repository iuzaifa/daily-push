import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="odd:bg-gray-100 even:bg-indigo-100 p-6 rounded-lg shadow-md">
        {children}
      </div>
    </>
  );
};

export default Card;

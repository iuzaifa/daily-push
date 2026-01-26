import React from 'react'

const Card = ({ children , className }) => {
  return (
    <>
        <div  className={`${className} border border-slate-200 mb-2 px-4 py-2 cursor-pointer bg-white hover:border-slate-300 rounded-sm hover:transition-all duration-200`}>
            {children}

        </div>
    </>
  );
};

export default Card
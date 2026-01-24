import React from 'react'

const User = () => {
  return (
    <>
      <div className="flex items-center gap-2.5 ml-3 cursor-pointer">
        <img
          className="h-10 w-10 rounded-full ring-2 ring-slate-200"
          src="https://api.dicebear.com/7.x/initials/svg?seed=John"
          alt="John Doe avatar"
        />
      </div>
    </>
  );
}

export default User
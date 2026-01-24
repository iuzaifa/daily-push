import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <button className="text-slate-600 hover:bg-slate-100 text-center p-2.5 rounded-full ">
        <Search size={18}/>
        </button>
     
    </>
  );
};

export default SearchBar;

import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center w-1/2 max-w-md">
      <div className="relative w-full">
        <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full pl-7 pr-4 py-1 border border-gray-300 rounded-sm 
                     focus:outline-none focus:ring-1 focus:gray-100
                     focus:border-transparent text-sm transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;

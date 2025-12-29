// File: src/components/CRMHeader/SearchBar.jsx
import { Search, Close } from '@mui/icons-material';
import { useState } from 'react';

const SearchBar = ({ isMobile = false }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={`${isMobile ? 'pb-3 md:hidden' : 'flex-1 max-w-2xl mx-auto px-4 hidden md:block'}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <button
            onClick={() => setSearchValue('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <Close className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
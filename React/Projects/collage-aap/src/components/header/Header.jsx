import React from "react";
import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm font-sans">
      {/* Search */}
      <SearchBar />
      {/* Right side */}
      <div className="flex items-center space-x-6">
        <Notifications />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;

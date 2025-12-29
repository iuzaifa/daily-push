import React from "react";
import { Bell } from "lucide-react";

const Notifications = () => {
  return (
    <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
      <Bell className="h-6 w-6 text-gray-600" />
      <span className="absolute top-1 right-1 inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
    </button>
  );
};

export default Notifications;

import { Event } from '@mui/icons-material';

const CalendarButton = () => {
  return (
    <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
      <Event className="h-5 w-5" />
    </button>
  );
};

export default CalendarButton;
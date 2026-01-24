import { Bell } from 'lucide-react'

const Notification = () => {
  const num  =  2;
  return (
    <>
      <button className="text-slate-600 hover:bg-slate-100 text-center p-2.5 rounded-full relative">
        <Bell size={18} className="stroke-2" />
        <span className="absolute top-0 right-1 h-4 w-4 flex items-center justify-center text-[10px] font-semibold text-white bg-green-500 rounded-full">
          {num >= 10 ? ("9+") : num}
        </span>
      </button>
    </>
  );
}

export default Notification
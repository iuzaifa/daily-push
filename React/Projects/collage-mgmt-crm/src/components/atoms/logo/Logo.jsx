

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
        <span className="text-white font-bold text-lg">CRM</span>
      </div>
      <span className="ml-2 text-xl font-semibold text-gray-800 hidden md:block">
        CompanyName
      </span>
    </div>
  );
};

export default Logo;


const Card = ({ children, className = "", hover = false }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${
        hover ? "hover:shadow-xl transition-shadow duration-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
function  Button({icon, label, ...props}) {
  return (
      <button {...props} className="flex bg-blue w-full text-gray-200 items-center justify-center py-3 rounded gap-2 text-lg shadow-lg">
        {icon}
        {label}
      </button>
  );
}
export default Button;

function Button({icon, label}) {
  return (
      <button className="flex bg-blue text-gray-200 items-center justify-center py-3 rounded gap-2 text-lg shadow-lg">
        {icon}
        {label}
      </button>
  );
}
export default Button;

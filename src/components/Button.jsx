import { Link } from "react-router-dom";

function  Button({icon, label, path, variant = 'primary', ...props}) {
  return (
      <Link to={path} {...props} className={`flex w-full ${variant === 'primary' ? 'bg-blue text-gray-200' : 'border border-blue text-blue'}  items-center justify-center py-3 rounded gap-2 text-lg shadow-lg`}>
        {icon}
        {label}
      </Link>
  );
}
export default Button;

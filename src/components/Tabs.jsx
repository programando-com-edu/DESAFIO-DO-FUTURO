import { Link, useLocation } from "react-router-dom";

function Tabs() {
  const { pathname } = useLocation();

  return (
    <div className="flex w-full">
      <Tab label="Visualizar" path="/video" active={pathname === "/video"} />
      <Tab label="Questionário" path="/questionario" active={["/questionario", "/questionario/tentativa", "questionario/resultado"].includes(
            pathname
          )} />
    </div>
  );
}

function Tab({label, active, path}) {
  return (
    <Link to={path} className={`flex-1 text-center border-b-2 pb-2 ${active ? 'border-green-dark text-green-dark' : 'border-gray-400 text-gray-400'} font-semibold`}>
      {label}
    </Link>
  );
}
export default Tabs;

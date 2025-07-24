import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">BucketList</h1>
      <div className="space-x-4">
        <Link
          to="/"
          className={`font-medium ${pathname === "/" ? "text-indigo-500" : "text-gray-600 hover:text-indigo-500"}`}
        >
          Home
        </Link>
        <Link
          to="/list"
          className={`font-medium ${pathname === "/list" ? "text-indigo-500" : "text-gray-600 hover:text-indigo-500"}`}
        >
          My List
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

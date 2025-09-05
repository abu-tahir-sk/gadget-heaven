import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const { cartList, hartList } = useContext(CartContext);
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/gadgetsData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const cartDetails = gadgets.filter((item) =>
    cartList.includes(item.product_id.toString())
  );

  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-full px-3  py-2 ${
              isActive
                ? "text-black md:text-white  font-bold"
                : location.pathname === "/"
                ? "text-black md:text-white"
                : "text-black md:text-black"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `rounded-full px-3 py-2 ${
              isActive
                ? "text-purple-600 font-bold"
                : location.pathname === "/"
                ? "text-white"
                : "text-black"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-3 py-2 ${
              isActive
                ? "text-purple-600 font-bold"
                : location.pathname === "/"
                ? "text-white"
                : "text-black"
            }`
          }
          to="/statistics"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div
     
      className={`md:w-11/12 mx-auto navbar md:px-12 backdrop-blur  z-50 fixed top-0 inset-x-0 bg-purple-900 ${ location.pathname === "/" ? 'bg-purple-900 text-white' : 'bg-white text-black'}`}    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 ${ location.pathname === "/" ? 'bg-purple-600 text-black' : 'bg-white text-black'}`}
          
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className={`text-2xl font-bold text-black hover:bg-white hover:p-2 hover:rounded-md hover:text-purple-900 ${
            location.pathname === "/" ? "text-white" : "text-purple-700"
          }`}
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <button className={`bg-white rounded-full p-2 font-bold text-black hover:bg-gray-400 relative   ${
             isActive("/statistics") ?  "text-purple-700" : "text-black"
          }`}>
          {cartList.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartList.length}
            </span>
          )}
          <div onClick={() => setOpen(!open)} className="relative">
            <IoCartOutline></IoCartOutline>
          </div>
        </button>
        <button className={`bg-white rounded-full p-2 font-bold text-black hover:bg-gray-400 relative   ${
             isActive("/statistics") ?  "text-purple-700" : "text-black"
          }`}>
          {hartList.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {hartList.length}
            </span>
          )}
          <GiSelfLove />
        </button>
      </div>
      <div
        className={`flex flex-col duration-500 bg-white absolute right-6 w-64 h-44 p-4 rounded-md overflow-y-auto ${
          open && cartDetails.length > 0 ? "top-16" : "hidden"
        }`}
      >
        <Link to="/">
        <div>
          {cartDetails.length > 0
            ? cartDetails.map((product) => (
                <div
                  key={product.product_id}
                  className="flex items-center gap-2 border-b py-2"
                >
                  <img
                    src={product.product_image}
                    alt={product.product_title}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">
                      {product.product_title}
                    </h3>
                    <p className="text-xs text-gray-500">${product.price}</p>
                  </div>
                </div>
              ))
            : ''}
        </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

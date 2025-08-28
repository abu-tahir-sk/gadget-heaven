import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const { cartList,hartList } = useContext(CartContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white rounded-full px-3 py-2 ${isActive ? "text-black" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `text-white rounded-full   px-3 py-2 ${
              isActive ? " text-black" : ""
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-white rounded-full py-2 ${isActive ? "text-black" : ""}`
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar rounded-t-lg md:px-12 backdrop-blur  z-50 fixed top-0 inset-x-0 bg-purple-900">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
          >
            {links}
          </ul>
        </div>
        <a
          className="btn btn-ghost text-2xl text-white hover:text-purple-500"
          href="/"
        >
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="rounded-full p-2 bg-white hover:bg-gray-400 relative">
         {cartList.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cartList.length}
          </span>
        )}
          <IoCartOutline>
            
          </IoCartOutline>
        </a>
        <a className="rounded-full p-2 bg-white hover:bg-gray-400 relative">
          {hartList.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {hartList.length}
          </span>
        )}
          <GiSelfLove />
        </a>
      </div>
    </div>
  );
};

export default NavBar;

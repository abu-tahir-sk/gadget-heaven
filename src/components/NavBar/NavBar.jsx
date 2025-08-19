import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";

const NavBar = () => {
  const links = <>
     <li><NavLink to="/"  className="text-white">Home</NavLink></li>
     <li><NavLink to="/dashboard"  className="text-white">Dashboard</NavLink></li>
      <li><a className="text-white">Statistics</a></li>
  </>
      return (
           <div className="navbar bg-[#9538E2] rounded-t-lg md:px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl text-white hover:text-[#9538E2]">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="rounded-full p-2 bg-white"><IoCartOutline /></a>
    <a className="rounded-full p-2 bg-white"><GiSelfLove /></a>
  </div>

</div>
      );
};

export default NavBar;
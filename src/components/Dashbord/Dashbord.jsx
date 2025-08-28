import { NavLink, Outlet } from "react-router-dom";
import Heading from "../Heading/Heading";

const Dashbord = () => {
 
  return (
    <div>
      <div className=" bg-purple-900 rounded-b-lg text-center py-16 flex flex-col">
        <Heading
          title={"Dashboard"}
          subTitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
        <div className="flex gap-8 justify-center items-center">
          <NavLink to="carts"  className={({isActive}) => `"cart" btn rounded-full border-2 bg-gray-200 px-3 ${isActive ? 'bg-purple-600 text-white' : ""}`}>Cart</NavLink>
          <NavLink to="wish" className={({isActive}) => `"wishList" btn rounded-full border-2 bg-gray-200 px-3 ${isActive ? 'bg-purple-600 text-white' : ""}`}>Wishlist</NavLink>
        </div>
      </div>
    
        <Outlet></Outlet>
    
    
    </div>
  );
};

export default Dashbord;

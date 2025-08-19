import { NavLink } from "react-router-dom";

const CategoriesSidebar = () => {
      return (
            <div className="border-2 rounded-md p-8 shadow-lg flex flex-col gap-4">
                  <button className="btn rounded-full border-2 bg-gray-200"><NavLink>All Products</NavLink></button>
                  <button className="btn rounded-full border-2 bg-gray-200"><NavLink>Laptops</NavLink></button>
                  <button className="btn rounded-full border-2 bg-gray-200"><NavLink>Phones</NavLink></button>
                  <button className="btn rounded-full border-2 bg-gray-200"><NavLink>Accessories</NavLink></button>
                  <button className="btn rounded-full border-2 bg-gray-200"><NavLink>Smart Watches</NavLink></button>
                  <button className="btn rounded-full border-2 bg-gray-200"><NavLink>MacBook</NavLink></button>
                  <button className="btn rounded-full border-2 bg-gray-200"><NavLink>Iphone</NavLink></button>
            </div>
      );
};

export default CategoriesSidebar;
import { NavLink } from "react-router-dom";

const CategoriesSidebar = ({categories}) => {
  return (
    <div className="border-2 rounded-md p-8 shadow-lg flex md:flex-col gap-4 md:max-h-min overflow-auto">
      <NavLink to="/" className={({isActive}) => `btn rounded-full border-2 bg-gray-200 px-3 ${isActive ? 'bg-purple-600 text-white' : ""}`}>
       All Products
      </NavLink>
    {
      categories.map(category =>  <NavLink key={category.category} to={`/category/${category.category}`} className={({isActive}) => `btn rounded-full border-2 bg-gray-200 px-3 ${isActive ? 'bg-purple-600 text-white' : ""}`}>
        {category.category}
      </NavLink> )
    }    
    </div>
  );
};

export default CategoriesSidebar;

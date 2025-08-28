import { Outlet, useLoaderData } from "react-router-dom";
import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";

const Gadgetes = () => {
  const categories = useLoaderData();
      return (
            <div>
              <h2 className="text-3xl font-bold text-center py-6 text-purple-600">Explore Cutting-Edge Gadgets</h2>  
            <div className="grid md:grid-cols-4  gap-8 py-8 p-2 bg-gray-50 rounded">
              <CategoriesSidebar categories={categories}></CategoriesSidebar>
              <Outlet></Outlet> 
            </div>  
            </div>
      );
};

export default Gadgetes;
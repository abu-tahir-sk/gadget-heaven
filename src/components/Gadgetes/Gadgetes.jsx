import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";
import GadgetsCards from "../GadgetsCards/GadgetsCards";

const Gadgetes = () => {
      return (
            <div>
              <h2 className="text-3xl font-bold text-center py-6 ">Explore Cutting-Edge Gadgets</h2>  
            <div className="grid md:grid-cols-4  gap-8 py-8 p-2 bg-gray-50 rounded">
              <CategoriesSidebar></CategoriesSidebar>
              <GadgetsCards></GadgetsCards>
            </div>  
            </div>
      );
};

export default Gadgetes;
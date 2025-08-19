import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";
import GadgetsCards from "../GadgetsCards/GadgetsCards";

const Gadgetes = () => {
      return (
            <div>
              <h2 className="text-3xl font-bold text-center py-6">Explore Cutting-Edge Gadgets</h2>  
            <div className="grid grid-cols-4">
              <CategoriesSidebar></CategoriesSidebar>
              <GadgetsCards></GadgetsCards>
            </div>  
            </div>
      );
};

export default Gadgetes;
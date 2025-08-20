
const CategoriesSidebar = () => {
  return (
    <div className="border-2 rounded-md p-8 shadow-lg flex md:flex-col gap-4 md:max-h-min overflow-auto">
     
       <button className="btn rounded-full border-2 bg-gray-200 px-3">
        All Products
      </button>
      <button className="btn rounded-full border-2 bg-gray-200 px-3">
        Laptops
      </button>
      <button className="btn rounded-full border-2 bg-gray-200 px-3">
        Phones
      </button>
      <button className="btn rounded-full border-2 bg-gray-200 px-3">
        Accessories
      </button>
      <button className="btn rounded-full border-2 bg-gray-200 px-3">
        Smart Watches
      </button>
      <button className="btn rounded-full border-2 bg-gray-200 px-3">
        MacBook
      </button>
      <button className="btn rounded-full border-2 bg-gray-200 px-3">
        Iphone
      </button>
     
    </div>
  );
};

export default CategoriesSidebar;

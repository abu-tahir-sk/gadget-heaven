import { NavLink } from "react-router-dom";

const GadgetCard = ({ gadget }) => {
  const { product_id, product_image, product_title, price } = gadget || {};
  return (
    <div className="border-2 rounded-lg p-3 shadow-lg transition hover:scale-105 overflow-hidden">
      <div className="h-48 shadow rounded-t-md">
        <img className="w-full h-full" src={product_image} alt={product_title} />
      </div>
      <div className="py-6 px-3 w-full">
        <h3 className="text-2xl font-bold py-4">{product_title}</h3>
        <p className="text-gray-400 pb-3">Price:{price} k</p>
            <NavLink to={`/gadgets/${product_id}`}>
                  <button className="btn rounded-3xl border-2 border-[#9538E2] text-purple-700 bg-purple-50">View Details</button>
            </NavLink>
      </div>
    </div>
  );
};

export default GadgetCard;

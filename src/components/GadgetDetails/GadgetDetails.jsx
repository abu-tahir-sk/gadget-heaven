import { useLoaderData, useParams } from "react-router-dom";


const GadgetDetails = () => {

      const {product_id} = useParams();

      const data = useLoaderData();
      const id = parseInt(product_id)

      const gadget = data.find(gadget => gadget.product_id == id)

     const {description,product_image,specification,product_title,category,rating,price} = gadget;

      return (
            <div className="md:flex gap-4">
                 <div className="bg-gray-400">
                  <img src={product_image} alt="" />
                  </div> 
                  <div>
                        <h2 className="text-3xl font-bold py-3">{product_title}</h2>
                        <p className="text-gray-500 py-3">Price:{price}</p>
                        <button className="px-3 py-1 rounded-3xl text-green-700 mb-3 bg-green-50 border-2 border-green-300">In Stock</button>
                        <p className="font-bold text-gray-600">{category}</p>
                        <h4 className="font-bold text-xl py-3">Specification:</h4>
                        <h5 className="font-bold text-xl">Rating</h5>
                        <div className="font-bold">{rating}</div>
                        <div>
                              <button className="btn bg-purple-700 rounded-3xl text-white">Add To Card</button>
                        </div>

                  </div>
            </div>
      );
};

export default GadgetDetails;
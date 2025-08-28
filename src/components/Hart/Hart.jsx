import { TiDelete } from "react-icons/ti";
const CartHart = ({hart}) => {
      const { product_id, product_image, product_title, price,description } = hart;
      return (
            <div className="flex justify-start items-center gap-10 shadow-xl bg-white my-6 rounded-md relative">
                 <div className="h-44 w-56 p-8 shadow-lg bg-gray-50 rounded-2xl">
                   <img className="w-full h-full rounded-2xl bg-gray-400" src={product_image} alt="" />
                 </div>
                 <div>
                   <h2 className="text-2xl font-bold py-2"> {product_title} </h2>
                   <p className="text-gray-400">{description}</p>
                  <p className="font-bold py-2"> Price: {price} tk</p>
                    <a className="btn bg-purple-600 font-bold rounded-full text-white">
                Add To Cart
              </a>
                 </div>
                <div className="absolute top-10 right-16">
                   <button className="rounded-full p-1 bg-gray-100 hover:bg-purple-100 border-2 border-red-300"><TiDelete className="text-3xl text-red-500"></TiDelete></button>
                </div>
            </div>
      );
};

export default CartHart;
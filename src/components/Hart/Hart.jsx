
const CartHart = ({hart,handleAddToCart}) => {
      const { product_id, product_image, product_title, price,description } = hart;
      return (
            <div className="md:flex justify-start items-center gap-10 shadow-xl bg-white my-6 py-3 rounded-md p-4">
                 <div className="h-44 w-56 p-8 shadow-lg bg-gray-50 rounded-2xl">
                   <img className="w-full h-full rounded-2xl bg-gray-400" src={product_image} alt="" />
                 </div>
                 <div>
                   <h2 className="text-2xl font-bold py-2"> {product_title} </h2>
                   <p className="text-gray-400">{description}</p>
                  <p className="font-bold py-2"> Price: {price} tk</p>
                    <a onClick={() => handleAddToCart(product_id)} className="btn bg-purple-600 font-bold rounded-full text-white">
                Add To Cart
              </a>
                 </div>
               
            </div>
      );
};

export default CartHart;
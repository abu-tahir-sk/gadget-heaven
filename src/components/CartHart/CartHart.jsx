import { TiDelete } from "react-icons/ti";

const CartHart = ({ cart, handleDelete }) => {
  const { product_id, product_image, product_title, price, description } = cart;

  return (
    <div className="flex justify-start items-center gap-10 shadow-xl bg-white my-6 rounded-md py-4 relative">
      <div className="h-44 w-56 p-8 shadow-lg bg-gray-50 rounded-2xl">
        <img
          className="w-full h-full rounded-2xl bg-gray-400"
          src={product_image}
          alt={product_title}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold py-2"> {product_title} </h2>
        <p className="text-gray-400 pb-2">{description}</p>
        <p className="font-bold"> Price: {price} tk</p>
      </div>
      <div className="absolute top-0 md:top-10 right-0 md:right-16 ">
        <button
          className="rounded-full p-1 md:bg-gray-100 hover:bg-purple-100 md:border-2 md:border-red-300"
         
        >
          <TiDelete  onClick={() => handleDelete(product_id)} className="text-3xl text-red-500"></TiDelete>
        </button>
      </div>
    </div>
  );
};

export default CartHart;

import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { addToStoredCartList, addToStoredHartList } from "../../utilites/utilites";


const GadgetDetails = () => {
  const { product_id } = useParams();

  const data = useLoaderData();
  const id = parseInt(product_id);



  const gadget = data.find((gadget) => gadget.product_id == id);

  const {
    description,
    product_image,
    specification,
    product_title,
    rating,
    price,
  } = gadget;

  const handleMarkCart = (id) => {
    addToStoredCartList(id)
    
  }
  const handleMarkHart = (id) => {
    addToStoredHartList(id)
  }
  return (
    <div className="hero md:flex md:w-8/12 mx-auto mb-20 relative rounded-xl -mt-24 z-10 bg-purple-50">
      <div className="hero-content flex-col lg:flex-row">
        <img src={product_image} className="md:max-w-sm rounded-lg" />

        <div className="">
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <h4 className="py-3 font-bold">Price: {price}</h4>
          <p>{description}</p>
          <button className="px-3 mt-3 py-1 rounded-3xl text-green-700 mb-3 bg-green-50 border-2 border-green-300">
            In Stock
          </button>
          <h4 className="font-bold text-xl py-3">Specification:</h4>
          <div>
            <ol className="list-decimal pl-8">
              {specification.map((specifications,index) => (
                <li key={index}>{specifications}</li>
              ))}
            </ol>
          </div>
          <div className="flex items-center gap-3"><h4 className="font-bold text-xl">Rating</h4> <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
              />             
              
            </div>
            </div>
          <div className="font-bold py-3 flex items-center gap-3">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="btn rounded-full pl-3">{rating}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={()=>handleMarkCart(product_id)} className="btn bg-purple-700 rounded-3xl text-white">
            Add To Card <span><IoCartOutline className="text-2xl"></IoCartOutline></span>
          </button>
          <p onClick={()=>handleMarkHart(product_id)}>
            <GiSelfLove className="text-3xl"></GiSelfLove>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;

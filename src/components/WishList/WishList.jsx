import {  useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredHartList, removeFromHartList, saveToCartList } from "../../utilites/utilites";
import Hart from "../Hart/Hart";
import { VscSettings } from "react-icons/vsc";
import { TabTitle } from "../../utilites/gadgetTitle";

const WishList = () => {
  TabTitle('Wish Lists Lists - Gadgetes Heaven')
  const [hartList, setHartList] = useState([]);
  const [cartList,setCartList] = useState([]);

  const data = useLoaderData();
  const handleAddToCart = (id) => {
      const product = hartList.find((item) => item.product_id === id);
    if (!product) return;

    setCartList([...cartList, product]);
    saveToCartList(id); 

    
    const updated = hartList.filter((item) => item.product_id !== id);
    setHartList(updated);
    removeFromHartList(id); 
  };
  useEffect(() => {
    const storedHartList = getStoredHartList();
    const storedHartListInt = storedHartList.map((id) => parseInt(id));

    const hartList = data.filter((hart) =>
      storedHartListInt.includes(hart.product_id)
    );

    setHartList(hartList);
  }, []);

    const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sortCartList = [...hartList].sort((a, b) => b.price - a.price);
      setHartList(sortCartList);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            Carts
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <a
                className="btn border-2 border-purple-600 bg-purple-200 font-bold rounded-full text-purple-700"
                onClick={() => handleSort("price")}
              >
                Sort by Price
                <VscSettings className="text-xl font-bold"></VscSettings>
              </a>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="w-10/12 mx-auto my-12 flex flex-col bg-gray-100 p-8">
        {hartList.map((hart) => (
          <Hart 
          key={hart.product_id} 
          hart={hart}
          handleAddToCart={handleAddToCart}
          ></Hart>
        ))}
      </div>
    </>
  );
};

export default WishList;

import { useEffect, useState } from "react";
import { getStoredCartList } from "../../utilites/utilites";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import CartHart from "../CartHart/CartHart";
import { VscSettings } from "react-icons/vsc";
import favicon from "../../assets/Group.png";

import Modal from "react-modal";
import { TabTitle } from "../../utilites/gadgetTitle";
import { CgMenuGridO } from "react-icons/cg";
import { GoGitPullRequestClosed } from "react-icons/go";

const CartsLists = () => {
  TabTitle("Carts Lists - Gadgetes Heaven");

  const [opens , setOpens] = useState(false)

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleDelete = (idToDelete) => {
    const updatedItems = cartList.filter(
      (cart) => cart.product_id !== idToDelete
    );
    setCartList(updatedItems);

    const stored = getStoredCartList().filter(
      (id) => parseInt(id) !== idToDelete
    );
    localStorage.setItem("cart-list", JSON.stringify(stored));
  };

  const handleCloseModal = () => {
    localStorage.clear();
    setIsOpen(false);
    setCartList([]);

    navigate("/");
  };

  const [cartList, setCartList] = useState([]);
  const navigate = useNavigate();

  const handleParches = () => {
    setIsOpen(true);
  };

  const data = useLoaderData();
  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sortCartList = [...cartList].sort((a, b) => b.price - a.price);
      setCartList(sortCartList);
    }
  };
  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map((id) => parseInt(id));

    const cartList = data.filter((cart) =>
      storedCartListInt.includes(cart.product_id)
    );

    setCartList(cartList);
  }, []);

  const totalPrice = cartList.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  const formattedTotal = parseFloat(totalPrice.toFixed(2));

  return (
    <>
      <div className="navbar relative">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-2xl">
            Carts
          </Link>
        </div>
     <div className="md:hidden text-2xl" onClick={() => setOpens(!opens)}>
      {
        opens === true ? <GoGitPullRequestClosed /> 
        : 
        <CgMenuGridO ></CgMenuGridO >
      }
         
     </div>
        <div className={`md:flex absolute top-12 right-4 ${opens ? "bg-purple-100 px-3 rounded-lg py-2" : 'hidden'}`}>
          <ul className="md:menu md:menu-horizontal px-1 gap-4 items-center ">
            <li>
              <h3 className="my-3 rounded-full font-bold text-xl">
                Total Price: {formattedTotal}
              </h3>
            </li>
            <li>
              <NavLink
                className="btn border-2 border-purple-600 bg-purple-200 font-bold rounded-full text-purple-700 hover:bg-purple-600 hover:text-white mb-3"
                onClick={() => handleSort("price")}
              >
                Sort by Price
                <VscSettings className="text-xl font-bold"></VscSettings>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`btn font-bold rounded-full  
                  ${
                    cartList.length === 0
                      ? "text-gray-400 bg-white cursor-not-allowed"
                      : "text-white bg-gradient-to-t from-purple-600 to-purple-900"
                  }`}
                onClick={handleParches}
                disabled={cartList.length === 0}
              >
                Purchase
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-10/12 mx-auto my-12 flex flex-col bg-blue-100 p-8">
        {cartList.map((cart) => (
          <CartHart
            key={cart.product_id}
            cart={cart}
            handleDelete={handleDelete}
          ></CartHart>
        ))}
      </div>
      <div className="">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          className="fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-white max-w-xl px-8 py-6 rounded-md shadow-lg z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
          contentLabel="Example Modal"
        >
          <div className="flex flex-col  items-center">
            <img className="w-12 h-12 " src={favicon} alt="" />
            <h2 className="text-2xl font-bold text-center py-2">
              Payment Successfully
            </h2>
            <p className="text-gray-500 text-center pb-2">
              Thanks for purchasing.
            </p>
            <p className="text-slate-400 text-center">
              Total: {formattedTotal} tk
            </p>
            <button
              className="bg-gray-200 my-2 py-2 rounded-md w-full font-bold"
              onClick={handleCloseModal}
            >
              close
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CartsLists;

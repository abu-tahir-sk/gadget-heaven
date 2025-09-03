import { parse } from "postcss";
import { toast } from "react-toastify";

const getStoredCartList = () => {
  const storedListStr = localStorage.getItem("cart-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCartList = (id) => {
  const storedList = getStoredCartList();
  if (storedList.includes(id)) {
    console.log("");
    toast.warning('already exists in the cart list',{
       position: "top-center",
       autoClose: 5000,
    })
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
    toast.success('cart add successful',{
       position: "top-center",
       autoClose: 5000,
    })

  }
};
const getStoredHartList = () => {
  const storedListStr = localStorage.getItem("hart-list");
  if (storedListStr) {
     const storedList = JSON.parse(storedListStr);
    return storedList.map((id) => parseInt(id));
  } else {
    return [];
  }
};

export const saveToCartList = (id) => {
  const stored = JSON.parse(localStorage.getItem("cart-list")) || [];
  if (!stored.includes(id)) {
    stored.push(id);
    localStorage.setItem("cart-list", JSON.stringify(stored));
  }
};


export const removeFromHartList = (id) => {
  const stored = getStoredHartList();
  const updated = stored.filter((itemId) => itemId !== parseInt(id));
  localStorage.setItem("hart-list", JSON.stringify(updated));
  return updated;
};

const addToStoredHartList = (id) => {
  const storedList = getStoredHartList();
  if (storedList.includes(id)) {
      toast.warning('already exists in the Wish list list',{
       position: "top-center",
       autoClose: 5000,
    })
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("hart-list", storedListStr);
      toast.success('Wish list add successful',{
       position: "top-center",
       autoClose: 5000,
    })
  }
};
export { addToStoredCartList,addToStoredHartList,getStoredCartList, getStoredHartList };

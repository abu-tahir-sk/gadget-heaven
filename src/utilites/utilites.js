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
    console.log("already exists in the cart list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
  }
};
const getStoredHartList = () => {
  const storedListStr = localStorage.getItem("hart-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredHartList = (id) => {
  const storedList = getStoredHartList();
  if (storedList.includes(id)) {
    console.log("already exists in the cart list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("hart-list", storedListStr);
  }
};
export { addToStoredCartList,addToStoredHartList,getStoredCartList, getStoredHartList };

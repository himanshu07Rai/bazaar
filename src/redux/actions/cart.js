// import axios from "axios";
export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: { ...item, quantity: 1 },
  };
};

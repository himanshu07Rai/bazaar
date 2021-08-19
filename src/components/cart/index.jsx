import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
const CartItems = styled.div``;
const CartItemsHeader = styled.div``;
const Cart = () => {
  const c = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("c");
  return (
    <>
      <CartItems>
        <CartItemsHeader>Cart Items</CartItemsHeader>
        {c.length === 0 && <div> No Items are added</div>}
        {c.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="image" />
            <div>{item.title}</div>
            <div>
              <h1>{item.quantity}</h1>
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                +
              </button>
              <button>-</button>
            </div>
          </div>
        ))}
      </CartItems>
    </>
  );
};

export default Cart;

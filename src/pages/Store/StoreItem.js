import React from "react";
import { IoCartOutline } from "react-icons/io5";

export const StoreItem = ({ data, onAddToCart, onItemClick }) => {
  const { Photo, amount, productName } = data;
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the click from triggering the modal
    onAddToCart(data); // Add item to cart
    console.log("item added");
  };

  return (
    <div
      className="store-item col-md-12"
      onClick={onItemClick}
      style={{ cursor: "pointer" }}
    >
      <img src={Photo} width="100%" />
      <div className="d-flex">
        {" "}
        <small style={{ flexGrow: 1 }}>{productName}</small>
        <h6>₦{amount}</h6>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent modal trigger
          onAddToCart(data); // Add item to cart
        }}
      >
        <span>
          {" "}
          <IoCartOutline />
        </span>
        Add to cart
      </button>
    </div>
  );
};

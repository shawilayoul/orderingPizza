import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart } from "./cartSlice";

const DeleteItems = ({pizzaId}) => {
    const dispatch = useDispatch();
  return (
    <button
      className="bg-yellow-500 w-20 rounded-lg p-1 w-40"
      onClick={() => dispatch(deleteCart(pizzaId))}
    >
      delete{" "}
    </button>
  );
};

export default DeleteItems;

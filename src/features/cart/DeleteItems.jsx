import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart } from "./cartSlice";

const DeleteItems = ({pizzaId}) => {
    const dispatch = useDispatch();
  return (
    <button
      className="bg-red-500 text-white rounded-md p-1"
      onClick={() => dispatch(deleteCart(pizzaId))}
    >
      delete{" "}
    </button>
  );
};

export default DeleteItems;

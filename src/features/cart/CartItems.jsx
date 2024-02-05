import { useDispatch, useSelector } from "react-redux";
import DeleteItems from "./DeleteItems";
import EmptyCart from "./EmptyCart";
import {

  getCurrentQuantityById,
} from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  return (
    <li className="flex justify-between  py-2 items-center gap-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center gap-5">
        <div>
          <p>{`$ ${totalPrice}`}</p>
        </div>
        <div>
          <DeleteItems pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;

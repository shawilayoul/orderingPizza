import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../cart/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "./CartItems";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col gap-2">
      <Link to="/menu">
        <span className="text-blue-500"> &larr; Back to menu</span>
      </Link>

      <h2>Your cart, {user.username}</h2>
      <div>
        <ul>
          {cart.map((item) => (
            <CartItem item={item} id={item.pizzaId} />
          ))}
        </ul>
      </div>
      <div className="flex gap-3">
        <Link to="/order/new" className="bg-yellow-500 text-sm p-1 font-normal">
          Order pizzas
        </Link>
        <button
          className="bg-gray-200 text-sm p-1"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;

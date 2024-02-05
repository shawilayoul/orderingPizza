import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../cart/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "./CartItems";
import EmptyCart from "./EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user);

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="flex flex-col gap-3 p-2">
      <Link to="/menu">
        <span className="text-blue-500"> &larr; Back to menu</span>
      </Link>

      <h2>Your cart, {user.username}</h2>
      <div>
        <ul>
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
      </div>
      <div className="flex gap-3">
        <Link
          to="/order/new"
          className="bg-yellow-500 rounded-lg text-sm p-1 font-normal"
        >
          Order pizzas
        </Link>
        <button
          className="text-sm border-2 rounded-lg p-1"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;

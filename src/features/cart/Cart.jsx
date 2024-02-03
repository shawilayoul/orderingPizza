import { Link } from "react-router-dom";

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

  return (
    <div className="flex flex-col gap-2">
      <Link to="/menu">
        <span className="text-blue-500"> &larr; Back to menu</span>
      </Link>

      <h2>Your cart, %NAME%</h2>

      <div className="flex gap-3">
        <Link to="/order/new" className="bg-yellow-500 text-sm p-1 font-normal">
          Order pizzas
        </Link>
        <button className="bg-gray-200 text-sm p-1">Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;

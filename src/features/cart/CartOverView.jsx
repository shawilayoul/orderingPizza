import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const totalCartQauntity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const totalCartPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0)
  );
  if (!totalCartQauntity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p>
        <span>{totalCartQauntity} pizzas</span>
        <span>{`$ ${totalCartPrice}`}</span>
      </p>
      <Link to="/cart" className="tracking-widest">
      Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function CartOverview() {
  const totalCartQauntity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const totalCartPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0)
  );
  {/*if (!totalCartQauntity) return null;*/}
  return (
    <div className="flex relative text-red-800 items-center justify-betwee  py-5 text-sm uppercase  sm:px-6 md:text-base">
      {/*<p>
        <span>{totalCartQauntity} pizzas</span>
        <span>{`$ ${totalCartPrice}`}</span>
  </p>*/}
      <Link to="/cart" className="tracking-widest">
     < FiShoppingCart />
     <p className="absolute right-1 top-0 bottom ">{totalCartQauntity}</p>
      </Link>
    </div>
  );
}

export default CartOverview;

import React from "react";
import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartOverview from "../features/cart/CartOverView";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="flex fixed w-screen px-10 z-10 h-14  bg-white border-2 items-center justify-between p-2">
      <Link to="/" className="tracking-widest">
        <h2 className="text-red-800">The best Pizza</h2>
      </Link>
      {/*<SearchOrder />*/}
      <div>
        {" "}
        <ul className="flex gap-14 justify-between items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li>Organic</li>
          <li>Contact</li>
        </ul>
      </div>
      <CartOverview />
    </div>
  );
};

export default Header;

import React from "react";
import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="flex h-12 bg-yellow-400 items-center justify-between p-2">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      {user.username && <p>Welcome {user.username}</p>}
    </div>
  );
};

export default Header;

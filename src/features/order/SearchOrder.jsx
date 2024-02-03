import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [qery, setQery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!qery) return;
    navigate(`/order/${qery}`);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={qery}
          onChange={(e) => setQery(e.target.value)}
          placeholder="Search order"
          className="p-1 rounded-lg text-sm"
        />
      </form>
    </div>
  );
};

export default SearchOrder;

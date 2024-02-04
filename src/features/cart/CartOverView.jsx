import { useSelector } from "react-redux";

function CartOverview() {
  const totalCartQauntity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const totalCartPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0)
  );
  return (
    <div className="flex justify-between items-center h-12 p-2 bg-black text-white">
      <p>
        <span>{totalCartQauntity} pizzas</span>
        <span>{`$ ${totalCartPrice}`}</span>
      </p>
      <a href="/cart">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;

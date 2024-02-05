import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import DeleteItems from "../cart/DeleteItems";
import {
  getCurrentQuantityById,
  increaseCartQuantity,
  decreaseCartQuantity,
} from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;
  const handleAddToCart = (e) => {
    e.preventDefault();
    const items = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addToCart(items));
  };

  return (
    <div>
      {/*<Link to="/order/new" className="text-blue-500">create new Order</Link>*/}
      <li className={`flex gap-2 py-1 bg-slate-10 border-y`}>
        <img
          src={imageUrl}
          alt={name}
          className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        />
        <div className=" flex grow flex-col">
          <p className="font-medium">{name}</p>
          <p className="text-sm capitalize italic text-stone-500">
            {ingredients.join(", ")}
          </p>
          <div className="mt-auto flex items-center justify-between">
            {!soldOut ? (
              <p className="text-sm">{`$ ${unitPrice}`}</p>
            ) : (
              <p className="text-sm font-medium uppercase text-stone-500">
                Sold out
              </p>
            )}
            {isInCart && (
              <div className="flex justify-center items-center gap-3">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="bg-yellow-500 p-1 rounded-lg w-10"
                    onClick={() => dispatch(increaseCartQuantity(id))}
                  >
                    +
                  </button>
                  <p>{currentQuantity}</p>
                  <button
                    className="bg-yellow-500 p-1 rounded-lg w-10"
                    onClick={() => dispatch(decreaseCartQuantity(id))}
                  >
                    -
                  </button>
                </div>
                <DeleteItems pizzaId={id} />
              </div>
            )}
            {!soldOut && !isInCart ? (
              <button
                className="text-sm bg-yellow-400 p-1 cursor-pointer rounded-full w-40"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </li>
    </div>
  );
}

export default MenuItem;

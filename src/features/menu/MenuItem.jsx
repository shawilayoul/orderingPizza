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
    <div className="">
      {/*<Link to="/order/new" className="text-blue-500">create new Order</Link>*/}
      <li
        className={`flex flex-col justify-between items-center py-5 gap-3 border-1  m-2 w-40 p-2 bg-gray-100 rounded-lg`}
      >
        <img
          src={imageUrl}
          alt={name}
          className={`h-40  w-40 ${soldOut ? "opacity-70 grayscale" : ""}`}
        />
        <div className=" flex grow items-center justify-center flex-col">
          <p className="font-medium">{name}</p>
          <p className="text-sm capitalize italic text-stone-500">
            {ingredients.join(", ")}
          </p>
          <div className="mt-auto flex flex-col gap-2 items-center py-2">
            {!soldOut ? (
              <p className="text-sm">{`$ ${unitPrice}`}</p>
            ) : (
              <p className="text-sm font-medium uppercase text-stone-500">
                Sold out
              </p>
            )}
            {isInCart && (
              <div className="flex flex-col-reverse gap-3">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="bg-red-500 text-white p-1 rounded-sm w-8"
                    onClick={() => dispatch(increaseCartQuantity(id))}
                  >
                    +
                  </button>
                  <p>{currentQuantity}</p>
                  <button
                    className="bg-red-500 p-1 text-white rounded-sm  w-8"
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
                className="text-sm bg-red-400  text-white cursor-pointer rounded-full px-5 py-1"
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

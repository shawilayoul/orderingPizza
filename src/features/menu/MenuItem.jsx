import { Link } from "react-router-dom";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <div>
      {/*<Link to="/order/new">create new Order</Link>*/}
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
            <button className="text-sm bg-yellow-400 p-1 cursor-pointer rounded-full w-40">
              ADD TO CART
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default MenuItem;

import React from "react";
import pizaa from "../assets/pizzaHome.jpg";
import pizza1 from "../assets/pizza1.jpg";
import pizza2 from "../assets/pizza2.jpg";
import pizza3 from "../assets/pizza3.jpg";
import pizza4 from "../assets/pizza4.jpg";
import pizza5 from "../assets/pizza5.jpg";
import { Link } from "react-router-dom";

const pizzas = [
  {
    id: 1,
    imgUrl: pizza1,
    name: "Pepperoni",
    prize: 12,
  },
  {
    id: 2,
    imgUrl: pizza2,
    name: "Caiankika",
    prize: 18,
  },
  {
    id: 3,
    imgUrl: pizza3,
    name: "Hesto Checken",
    prize: 20,
  },
  {
    id: 4,
    imgUrl: pizza4,
    name: "Virianian",
    prize: 15,
  },
  {
    id: 5,
    imgUrl: pizza5,
    name: "Pepperoni",
    prize: 13,
  },
];
const Home = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-16 h-svh">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-semibold">
            <soan className="text-red-500">Feel</soan> the Extra
            <br />
            Ordinary <br /> Love our Pizzas
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            delectus recusandae reprehenderit alias dolor nisi ducimus <br />
            id fugiat error rerum earum facere consectetur reiciendis
          </p>
          <div>
            <button className="bg-red-500 text-white p-1 mx-2 rounded-md">
              <Link to="/menu">View menu</Link>
            </button>
            {/*<button className="bg-yellow-500 text-white p-1 rounded-md">
              get order
  </button>*/}
          </div>
        </div>
        <div>
          <img
            src={pizaa}
            alt="home"
            className="h-80 w-80 rounded-full shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div children="flex ">
          <h3 className="text-center text-red-500 text-lg font-medium">
            Our Best sellers
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Consectetur distinctio,
          </p>
        </div>
        <ul className="flex gap-5 p-2">
          {pizzas.map((pizz) => (
            <li
              key={pizz.id}
              className="flex flex-col gap-2 p-1 shadow-2xl bg-white"
            >
              <img src={pizz.imgUrl} alt="piz" className="w-28 h-28" />
              <p>{pizz.name}</p>
              <p>${pizz.prize}</p>
              <button className="bg-red-500 rounded-md text-white px-2">
                Order Now
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

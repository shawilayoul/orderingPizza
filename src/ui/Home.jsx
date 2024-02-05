import React from "react";
import pizaa from "../assets/pizzaHome.jpg";
import { Link } from "react-router-dom";

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
            <button className="bg-yellow-500 text-white p-1 rounded-md">
              get order
            </button>
          </div>
        </div>
        <div>
          <img src={pizaa} alt="home" className="h-80 w-80 rounded-full" />
        </div>
      </div>
     {/*} <div>
        <div>
          <h3>Our Best sellers</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
            Consectetur distinctio, magni nulla odio labore architecto <br/>
          </p>
        </div>
         
  </div>*/}
    </div>
  );
};

export default Home;

import React from "react";
import CreateUser from "../features/user/CreateUser"

const Home = () => {
  return (
    <div className="bg-slate-200 flex flex-col  justify-center items-center  gap-3 h-screen">
      <h1 className="flex flex-col items-center m-0">
        The best pizza.
        <br />
        <span className="text-yellow-500 text-center">
          Straight out of the oven, straight to you.
        </span>
      </h1>
     <CreateUser/>
    </div>
  );
};

export default Home;
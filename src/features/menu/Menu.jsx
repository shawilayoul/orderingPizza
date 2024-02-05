import React from "react";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();
  return (
    <div className="flex flex-wrap px-3 my-20">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export async function menuData() {
  const menu = await getMenu();
  return menu;
}
export default Menu;

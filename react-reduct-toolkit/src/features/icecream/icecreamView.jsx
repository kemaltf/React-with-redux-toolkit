import React from "react";
import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const numOfIceCream = useSelector((state) => state.icecream.numOfIcecreams);

  return (
    <div>
      <h2>number of icecreams - {numOfIceCream}</h2>
      <button>Order icecream</button>
      <button>Restock icecream</button>
    </div>
  );
};

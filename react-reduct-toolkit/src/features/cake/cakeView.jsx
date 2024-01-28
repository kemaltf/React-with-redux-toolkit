import React from "react";
import { useSelector } from "react-redux";
export const CakeView = () => {
  // state refer to the store (inside the store.js we can see several
  // reducer (aka: cake,inceream, user)) and numOfCakes is taken from
  // cakeSlice inside initialState.
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>number of cakes - {numOfCakes}</h2>
      <button>Order cake</button>
      <button>Restock cake</button>
    </div>
  );
};

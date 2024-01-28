import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../cake/cakeSlice";

export const CakeView = () => {
  const [value, setValue] = React.useState(1);
  // state refer to the store (inside the store.js we can see several
  // reducer (aka: cake,inceream, user)) and numOfCakes is taken from
  // cakeSlice inside initialState.
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock cake</button>
    </div>
  );
};

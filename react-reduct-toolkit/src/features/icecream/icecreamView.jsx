import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../icecream/icecreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1);
  const numOfIceCream = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of icecreams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecream
      </button>
    </div>
  );
};

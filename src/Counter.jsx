import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter = () => {
  // const [count, setCount] = useState(0);

  //In order to read a variable from the redux store
  // const count = useSelector((state) => state.counter.count); //hook //We moved this to App.js

  //Use the action stuff from the duck
  const dispatch = useDispatch(); //hook

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch(increment()); //Auto import from duck
  };

  const handleDecrement = () => {
    // if (count > 0) {
    // setCount(count - 1);
    dispatch(decrement());
    // }
  };

  return (
    <div style={{ justifyContent: "center" }}>
      {/* <h2> {`Count: ${count}`} </h2> */}
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
    </div>
  );
};

export default Counter;

import Counter from "./Counter";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/ducks/user";

export default function App() {
  const dispatch = useDispatch();

  //this is what starts all the calls
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  //
  //the counter comes from the reducer in configStore.js
  //and count comes from the reducer in the ducks/counter.js file
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <Counter />
    </div>
  );
}
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/ducks/user";
import { CircularProgress } from "@material-ui/core";

export default function App() {
  const dispatch = useDispatch();

  //this is what starts all the calls
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  //the counter comes from the reducer in configStore.js
  //and count comes from the reducer in the ducks/counter.js file
  return (
    <div className="App">
      {user ? <h1>{`Hello ${user.firstName}`}</h1> : <CircularProgress />}
    </div>
  );
}

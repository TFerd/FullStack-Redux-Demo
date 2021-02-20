import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/ducks/user";
import { CircularProgress } from "@material-ui/core";

export default function App() {
  const dispatch = useDispatch();

  //this is what starts all the calls
  useEffect(() => {
    console.log("dispatched");
    dispatch(getUser());
  }, []);

  const userList = [];
  //@TODO: NOW THE BACKEND SHOULD RETURN A LIST OF USERS IF THATS WHAT YOU WANT, THOMAS

  const user = useSelector((state) => state.user.user);
  // console.log(user);

  for (var i in user){
    // userList.push([i, user[i]]);
    userList.push(user[i]);
  }
  
  console.log(userList);

  //the counter comes from the reducer in configStore.js
  //and count comes from the reducer in the ducks/counter.js file
  return (
    <div className="App">
      {/* {user ? <h1>{`Hello ${user.firstName}`}</h1> : <CircularProgress />} */}
      {/* {(userList === undefined || userList.length == 0) ? ( */}
        {(!user) ? (

        <div>
        <h1>Click this button to load users</h1>
        {/* <button onClick={handleLoadUsers}>Load users</button> */}
              </div>
      ) : (
        // <h2>{userList}</h2>
        userList.map((user, index) => {
          return <h1 key={index}>{user.age}</h1>
        })
      )}
    </div>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getUser, getUserList } from "./redux/ducks/user";
// import { CircularProgress } from "@material-ui/core";

import UserList from "./components/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//MOVING EVERYTHING TO THE COMPONENTS FOLDER

export default function App() {
  // const dispatch = useDispatch();

  // //this is what starts all the calls
  // useEffect(() => {
  //   console.log("dispatched");
  //   dispatch(getUserList()); //This getUser method sets the state variable user

  //   console.log("TESTING: single user fetch with id parameter...");
  //   dispatch(getUser(1));
  // }, []);

  // const userList = useSelector((state) => state.user.userList);
  // console.log("Userlist", userList);
  // //@TODO: NOW THE BACKEND SHOULD RETURN A LIST OF USERS IF THATS WHAT YOU WANT, THOMAS

  // const user = useSelector((state) => state.user.user);
  // // console.log(user);

  // //user right now is technically an array of objects because of some testing i was doing
  // //usually it would only be a single object
  // // for (var i in user) {
  // //   // userList.push([i, user[i]]);
  // //   userList.push(user[i]);
  // // }

  // console.log("user is: ", user);
  //the counter comes from the reducer in configStore.js
  //and count comes from the reducer in the ducks/counter.js file
  return (
    // <div className="App">
    //   {!userList ? (
    //     <div>
    //       <CircularProgress />
    //       {/* <button onClick={handleLoadUsers}>Load users</button> */}
    //     </div>
    //   ) : (
    //     // <h2>{userList}</h2>

    //     userList.map((user, index) => {
    //       return <h1 key={index}>{user.firstName}</h1>;
    //     })
    //   )}
    // </div>

    <div className="App">
      <h1>Front End React Demo</h1>
      <Router>
        <Switch>
          {/* <h1>Front End React Demo</h1> */}
          {/* <h3>Thomas Ferdinand</h3> */}
          {/* <UserList /> */}

          <Route exact path="/" children={<UserList />} />
          {/* <Route path="/todo/:id" children={ User } /> */}

          {/* Button that sets a boolean showUserList to true maybe?
          Also maybe change the text on the button from show to hide */}
        </Switch>
      </Router>
    </div>
  );
}

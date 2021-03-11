import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserList } from "../redux/ducks/user";
import { useHistory } from "react-router-dom";

const UserList = () => {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();
  const history = useHistory();

  //this is what starts all the calls
  useEffect(() => {
    // console.log("dispatched");
    dispatch(getUserList()); //This getUser method sets the state variable userList

    // console.log("TESTING: single user fetch with id parameter...", 1);
    // dispatch(getUser(1)); //THIS IS HOW YOU PASS PARAMS
  }, []);

  return (
    <>
      {userList ? (
        <div>
          {userList.map((user) => (
            <h3
              key={user.id}
              onClick={() => history.push(`/user/${user.id}`)}
            >{`${user.firstName} ID: ${user.id} (click me)`}</h3> //Later, create another component for single users
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default UserList;

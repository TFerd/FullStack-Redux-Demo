import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserList } from "../redux/ducks/user";

const UserList = () => {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  //this is what starts all the calls
  useEffect(() => {
    console.log("dispatched");
    dispatch(getUserList()); //This getUser method sets the state variable userList

    console.log("TESTING: single user fetch with id parameter...");
    dispatch(getUser(1));
  }, []);

  return (
    <>
      {userList ? (
        <div>
          {userList.map((user) => (
            <h3
              key={user.id}
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

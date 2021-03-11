import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../redux/ducks/user";
import { CircularProgress } from "@material-ui/core";

const User = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();

  //userId here is kinda redundant, but its good to make sure we get
  //the id from the database too, rather than just the param
  const { id: userId, firstName, lastName } = user || {};

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  //@TODO: change this back button so that it just sets the url to the index
  return (
    <div>
      {user && id == userId ? (
        <div>
          <button
            onClick={() => {
              setUser({});
              history.goBack();
              setUser({});
            }}
          >
            Back
          </button>
          <h2>{`User: ${firstName} ${lastName}`}</h2>
          <h3>more details here</h3>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default User;

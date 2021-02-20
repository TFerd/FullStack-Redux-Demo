export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const SET_USERLIST = "SET_USERLIST";

//connect to:
export const getUser = () => ({
  type: GET_USER
});

export const setUser = (user) => ({
  type: SET_USER,
  user //same as user: user
});

export const setUserList = (userList) => ({
  type: SET_USERLIST,
  userList
})

const initialState = {
  user: undefined,
  userList: undefined
};

//redux saga will handle the getUser function
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    case SET_USERLIST:
      const {userList} = action;
      return {...state, userList}
    default:
      return state;
  }
};

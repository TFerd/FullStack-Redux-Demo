export const GET_USER = "GET_USER";
export const GET_USERLIST = "GET_USERLIST";
const SET_USER = "SET_USER";
const SET_USERLIST = "SET_USERLIST";

//IF WHAT YOU'RE LOOKING FOR ISN'T IN HERE, IT'S PROBABLY IN ROOTSAGA.JS

//connects to: ???THE SAGA???
export const getUser = (userId) => ({
  type: GET_USER,
  payload: userId
});

export const getUserList = () => ({
  type: GET_USERLIST
});

export const setUser = (user) => ({
  type: SET_USER,
  user //same as user: user
});

export const setUserList = (userList) => ({
  type: SET_USERLIST,
  userList
});

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
      const { userList } = action;
      return { ...state, userList };
    default:
      return state;
  }
};

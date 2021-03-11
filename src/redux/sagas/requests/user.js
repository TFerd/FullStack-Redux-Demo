import axios from "axios";

//CHANGE THESE TO CONNECT TO THE BACKEND AT PORT 8081

//Perhaps handle getUser different ways (by id, by first or last name, etc...)
export function requestGetUser(userId) {
  // console.log(
  //   "./requests/user.js requestGetUser() called...userId is: ",
  //   userId
  // );
  // console.log("Requesting:", "https://my-json-server.typicode.com/tferd1/demo/users/" + userId);

  //Comment out the my-json-server url and replace with localhost when ready to connect to  backend
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/tferd1/demo/users/" + userId
    //url: "localhost:8081/user/" + userId
  });
}

export function requestGetUserList() {
  console.log("./requests/user.js requestGetUserList() called...");

  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/tferd1/demo/users"
  });
}

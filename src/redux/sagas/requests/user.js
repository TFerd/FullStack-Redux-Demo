import axios from "axios";

//Perhaps handle getUser different ways (by id, by first or last name, etc...)
export function requestGetUser(userId) {
  console.log(
    "./requests/user.js requestGetUser() called...userId is: ",
    userId
  );
  // console.log("Requesting:", "https://my-json-server.typicode.com/tferd1/demo/users/" + userId);

  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/tferd1/demo/users/" + userId
  });
}

export function requestGetUserList() {
  console.log("./requests/user.js requestGetUserList() called...");

  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/tferd1/demo/users"
  });
}

import axios from "axios";

const instance = axios.create({
  baseURL: "http://idontcare.shop"
  // headers: {
  //   "content-type": "application/json;charset=UTF-8",
  //   accept: "application/json,",
  // },
});

// header 세팅(네트워크)
// instance.defaults.headers.common["Authorization"] = USER_TOKEN; 

// 쿠키 or 로컬스토리지 값 넣기


export default instance;
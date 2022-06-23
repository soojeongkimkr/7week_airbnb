// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://idontcare.shop"
//   // headers: {
//   //   "content-type": "application/json;charset=UTF-8",
//   //   accept: "application/json,",
//   // },
// });

// // header 세팅(네트워크)
// // instance.defaults.headers.common["Authorization"] = USER_TOKEN; 

// // 쿠키 or 로컬스토리지 값 넣기


// export default instance;






import axios from "axios"
import Cookies from "universal-cookie"
const instance = axios.create({ baseURL: "http://idontcare.shop"
}, );

const cookie = new Cookies();

// header 세팅(네트워크)
instance.defaults.headers.common["Authorization"] = 'Bearer '+cookie.get('token');
// 쿠키 or 로컬스토리지 값 넣기

export default instance;
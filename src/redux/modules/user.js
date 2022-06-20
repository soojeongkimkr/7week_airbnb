import axios from "axios";
import { createAction } from "redux-actions";
// 전역 관리(db 서버와 연결)를 위한 instance import
import instance from "../../shared/api";

// Actions
const LOG_IN = "member/LOG_IN";
const LOGIN_CHECK = "member/LOGIN_CHECK";
const LOG_OUT = "member/LOG_OUT";

// 초기값
const initialState = {
    email: "email",
    password: "password",
};

// Action Creators
// 로그인
export const Login = (token) => {
    return { type: LOG_IN, token };
};

// 로그인 체크
export const Logincheck = (userId) => {
    return { type: LOGIN_CHECK, userId };
};

// 로그아웃
export const Logout = () => {
    return { type: LOG_OUT };
};

// middlewares
// 회원가입
export const signupDB = (email, password) => {
    console.log(email, password);
    //   return async function (dispatch, getState, { history }) {
    return async function (dispatch, getState) {
        await axios;
        instance
            .post("/member/guest", {
                email: email,
                password: password,
            })
            .then(function (response) {
                // 통신 성공 시 response 반환
                // const message = response.data.message;
                // window.alert(message);
                window.alert('회원 가입 성공');
                // history.push("/user/login");
            })
            .catch(function (error) {
                // db 서버 에러 메세지 반환
                // const err_message = error.response.data.errorMessage;
                // window.alert(err_message);
                window.alert('회원 가입 에러');
            });
    };
};

// 로그인
// export const loginFB = (email, password) => {
//     return async function (dispatch, getState) {
//         await axios;
//         instance
//             .post("/member/login", {
//                 email: email,
//                 password: password,
//             })
//             .then(function (response) {
//                 const token = response.data;
//                 // console.log(response.data);
//                 // 로컬 스토리지에 토큰 값 저장
//                 localStorage.setItem("token", token);
//                 // 토큰 값으로 email 받아오기
//                 axios
//                     .get("/member", {
//                         headers: { Authorization: ` ${localStorage.getItem("token")}` },
//                     })
//                     .then(function (response) {
//                         const email = response.data;
//                         console.log(email);
//                         // 로컬 스토리지에 유저네임 저장
//                         localStorage.setItem("email", email);
//                         console.log("logincheckFB !! ", response);
//                         window.alert(email + "님 접속을 환영 합니다.");
//                         dispatch(Logincheck(email));
//                     })
//                     .catch(function (error) {
//                         console.log("logincheckFB error !!", error);
//                     });
//                 // history.push("/");
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     };
// };

// 로그아웃
// export const LogoutFB = () => {
//     return function (dispatch, getState) {
//         dispatch(Logout());
//         // history.push("/");
//         window.alert("로그아웃 되었습니다.");
//     };
// };

// 토큰 해독
// export const loginCheckFB = () => {
    // return function (dispatch, getState, { history }) {
// };

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // case "member/LOG_IN":
        //     state.token = action.token;

        //     return state;

        // case "member/LOGIN_CHECK":
        //     state.userId = action.userId;
        //     state.nickname = action.nickname;
        //     console.log(state.userId);
        //     console.log(state);
        //     return state;

        // case "member/LOG_OUT":
        //     state.is_login = false;
        //     // 로컬스토리지에서 토큰 값, 유저네임 삭제
        //     localStorage.removeItem("token");
        //     localStorage.removeItem("username");
        //     return state;

        default:
            return state;
    }
}
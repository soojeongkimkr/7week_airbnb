import axios from "axios";
import { Cookies } from "react-cookie"
// import { setCookie, getCookie } from '../redux/modules/user';
import { createAction } from "redux-actions";
// 전역 관리(db 서버와 연결)를 위한 instance import
import instance from "../../shared/api";

const cookies = new Cookies();

// Actions
const LOG_IN = "member/LOG_IN";
const LOGIN_CHECK = "member/LOGIN_CHECK";
const LOG_OUT = "member/LOG_OUT";
const LOG_IN_SNS = "member/LOG_IN_SNS";

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
export const Logincheck = (name) => {
    return { type: LOGIN_CHECK, name };
};

// 로그아웃
export const Logout = () => {
    return { type: LOG_OUT };
};

// sns 로그인
export const LoginSns = (token) => {
    return { type: LOG_IN, token };
};

// middlewares
// 회원가입
export const signupDB = (email, password) => {
    console.log(email, password);
    //   return async function (dispatch, getState, { history }) {
    return async function (dispatch, getState) {
        await
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
//         await
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

// sns 로그인
// export const loginSns = (email, password) => {
//     return async function (dispatch, getState) {
//         localStorage.setItem("email", email);
//     };
// };

// export const loginDBSns = (name, picture) => {
//     return async function (dispatch, getState) {
//         // return cookies.set(name, value, {path: "/"}) {
//         // await axios;
//         await
//         instance
//             .get("/member", {
//                 // headers: { Authorization: ` ${localStorage.getItem("token")}` },
//                 // headers: { Authorization: `Bearer ${getCookie(['token']);}` },
//                 // headers: { Authorization: ` ${getCookie(['token']);}` },
//                 headers: { Authorization: `Bearer getCookie(['token']);` },
//             })
//             .then(function (response) {
//                 console.log(response);
//                 // const name = response.body; //맞는지 체크
//                 const name = response.data;
//                 console.log(name);
//                 // 로컬 스토리지에 유저네임 저장
//                 // localStorage.setItem("name", name);
//                 // 쿠키에 저장
//                 // cookies.set(name, value, { path: "/" });
//                 console.log("유저명 받아오기 완료 ", response);
//                 window.alert(name + "님 접속을 환영 합니다.");
//                 dispatch(Logincheck(name));
//             })
//             .catch(function (error) {
//                 console.log("유저명 받아오기 실패", error);
//             });
//     };
// };

export const getUserInfo = async () => {
    await instance.get('/member')
        .then(function(response) {
            console.log(response);
            const userName = response.data.name
            const userPic = response.data.picture
            console.log(userName);
            console.log(userPic);
            return response.data
        }).catch((error) => {
            // console.log('오류');
            console.log(error);
        })
}

export const setCookie = (name, value, option) => {
    const cookies = new Cookies();
    // console.log('쿠키값 받아오기');
    // return cookies.set(name, value, { ...option });
    return cookies.set(name, value, { path: "/" });
    // navigate('/');
}

export const getCookie = (name) => {
    return cookies.get(name);
}

// 로그아웃
// export const LogoutFB = () => {
//     return function (dispatch, getState) {
//         dispatch(Logout());
//         // history.push("/");
//         window.alert("로그아웃 되었습니다.");
//     };
// };

// 토큰 해독
export const loginCheckFB = () => {
    return async function (dispatch, getState, { history }) {
        await
        instance
            .post("/member")
            .then(function (response) {
                // 통신 성공 시 response 반환
                console.log(response)
                // history.push("/user/login");
            })
            .catch(function (error) {
                console.log(error)
                // db 서버 에러 메세지 반환
                // const err_message = error.response.data.errorMessage;
                // window.alert(err_message);
            });
};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "member/LOG_IN":
            state.token = action.token;
            return state;
            
            case "member/LOG_IN_SNS":
            state.token = action.token;
            console.log(state.token, '로그인 리듀서');
            return state;

        case "member/LOGIN_CHECK":
            state.userId = action.userId;
            state.nickname = action.nickname;
            console.log(state.userId);
            console.log(state);
            return state;

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
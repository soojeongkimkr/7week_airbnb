import React from "react";
import styled, { css } from 'styled-components';
import '../css/style.css';

import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signupDB } from "../redux/modules/user";

const Login = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  // 회원관련
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "userEmail") {
      setUserEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const signUpForm = () => {
    if (userEmail === "" || password === "") {
      alert("빈칸을 입력해주세요");
    } else {
      dispatch(signupDB(userEmail, password));
    }
  };

  // 회원 sns
  const code = new URL(window.location.href).searchParams.get("code");

  const REST_API_KEY = "[0df0cd5d1dad03decd6a4ad7d9850366]";
  // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const kakaoSns = 'http://idontcare.shop/oauth2/authorization/kakao'

  // useEffect(() => {
  //   Kakao.init('7d8c1640b793f1a97746c2bd5da3e850');
  // },[])

  // function kakaoLogin() {
  //   window.Kakao.Auth.login({
  //     scope: 'account_email, profile_image', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
  //     success: function (response) {
  //       console.log(response) // 로그인 성공하면 받아오는 데이터
  //       window.Kakao.API.request({ // 사용자 정보 가져오기 
  //         url: '/v2/user/me',
  //         success: (res) => {
  //           const kakao_account = res.kakao_account;
  //           console.log(kakao_account)
  //         }
  //       });
  //       // window.location.href='/ex/kakao_login.html' //리다이렉트 되는 코드
  //     },
  //     fail: function (error) {
  //       console.log(error);
  //     }
  //   });
  // }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
            {header}
          </header>
          <main>
            {props.children}
            <p>에어비앤비에 오신 것을 환영합니다.</p>
            {/* 로그인 */}
            <Form>
              <Input type="text" required placeholder="이메일(회원가입)" name="email" value={userEmail} onChange={onChange}/>
              <Input type="password" required placeholder="비밀번호(회원가입)" name="password" value={password} onChange={onChange}/>
              <Input type="password" placeholder="인증코드(회원가입)" style={{ marginTop: "20px" }} />
              <InputSubmit type="submit" value="계속" onClick={signUpForm} />
            </Form>
            <button>구글로 로그인하기</button>
            <button>네이버로 로그인하기</button>
            {/* <button onClick={kakaoLogin}>카카오로 로그인하기</button> */}
            <a href={kakaoSns}>카카오로 로그인하기</a>
            <button>이메일로 로그인하기</button>
          </main>
          {/* <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer> */}
        </section>
      ) : null}
    </div>
  );
};

const Form = styled.form`

`

const Input = styled.input`
display:block;
margin:0 auto;
`

const InputSubmit = styled.input`
display:block;
margin:0 auto;
cursor:pointer;
`

export default Login;
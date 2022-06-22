import React from "react";
import styled, { css } from 'styled-components';
import '../css/style.css';

import { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signupDB } from "../redux/modules/user";

const Login = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  // 회원관련
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // 회원 sns 링크
  const googleSns = 'http://idontcare.shop/oauth2/authorization/google'
  const naverSns = 'http://idontcare.shop/oauth2/authorization/naver'
  const kakaoSns = 'http://idontcare.shop/oauth2/authorization/kakao'

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section style={{textAlign:"center"}}>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
            {header}
          </header>
          <main>
            {props.children}
            <p>에어비앤비에 오신 것을 환영합니다.</p>
            <Form>
              <Input type="text" required placeholder="이메일(회원가입)" name="email" value={userEmail} onChange={onChange}/>
              <Input type="password" required placeholder="비밀번호(회원가입)" name="password" value={password} onChange={onChange}/>
              <Input type="password" placeholder="인증코드(회원가입)" style={{ marginTop: "20px" }} />
              <InputSubmit type="submit" value="계속" onClick={signUpForm} />
            </Form>
            <div className="orBox">
              <p className="orLogin">또는</p>
              <div className="loginLine"/>
            </div>
            <a href={googleSns} className="snsLogin">구글로 로그인하기</a>
            <a href={naverSns} className="snsLogin">네이버로 로그인하기</a>
            <a href={kakaoSns} className="snsLogin">카카오로 로그인하기</a>
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
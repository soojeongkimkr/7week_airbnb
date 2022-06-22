import React from "react";
import Login from "../components/Login";
import Category from "../components/Category";
import Card from "../components/Card";
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { useCookies } from 'react-cookie';
import Cookies from "universal-cookie";
import { setCookie, getCookie } from '../redux/modules/user';

import Header from '../components/Header';
import Footer from "../components/Footer";

const Main = () => {
  const post_list = useSelector((state) => state.post.list);
  // const [cookies, removeCookie] = useCookies(['token']);
  // const cookies = new Cookies();

  // 로그인 상태 확인
  // var token = document.cookie;
  // console.log(token);
  // const token = localStorage.getItem("token") ? true : false;
  // const cookie = getCookieFunc("token") ? true : false;
  // console.log(cookie);
  
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  // 회원 관련
  // const removeCookieFunc = () => {
  //   removeCookie('token', {path: "/"});
  //   console.log('로그아웃');
  //   // setText("removeCookie");
  // }

  // const getCookieFunc = (param) => {
  //   let result = "getCookie : "+cookies.token;
  // }

  // Cookies.get('name');
  
  // useEffect(() => {
    // console.log(getCookieFunc);
    // getCookieFunc();
  // }, []);

  // const getCookieFunc = () => {
  //   remove('token', {path: "/"})
  // }

  const removeCookie = () => {
    const cookies = new Cookies();
    cookies.remove('token', { path: '/' });
  }

  return (
    <>
      <Header/>
      <Wrap>
        {/* <React.Fragment>
          <button onClick={openModal}>로그인</button>
          <Login open={modalOpen} close={closeModal} header="로그인 또는 회원 가입">
          </Login>
        </React.Fragment> */}
        <div className="inner">
        <Category />
        
        {/* <button onClick={removeCookie}>
          로그아웃
        </button> */}

        {/* <div className="cardBox">
          {post_list.map((list, idx) => {
            return (
              <Card key={idx} data={list} />
            )
          })}
        </div> */}
        </div>
      </Wrap>
      <Footer />
    </>
  );
};

const Wrap = styled.div`
/* padding:80px 40px 0; */
padding:180px 40px 0;

@media screen and (max-width: 1130px) {
  /* padding:80px 10px 0; */
  padding:180px 10px 0;
}

@media screen and (max-width: 950px) {
  /* padding:80px 0 0; */
  padding:180px 0 0;
}
`

export default Main;
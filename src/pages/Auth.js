import React from "react";
import styled, { css } from 'styled-components';
import '../css/style.css';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Auto = (props) => {
  // 회원관련
  const location = useLocation();
  const [cookies, setCookie] = useCookies(['token']);

  // 파라미터 query 값 가져오기 정규식
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  // 파라미터에서 가져올 query명 지정
  var urlParams = getParameterByName('member');


  // 쿠키 저장
  useEffect(() => {
    setCookieFunc();
    // getCookieFunc();
    
  }, []);

  const setCookieFunc = () => {
    setCookie('token', urlParams, {path: "/", maxAge:2000});
    
    let result = "setCookie : ";
  }

  const getCookieFunc = (param) => {
    let result = "getCookie : "+cookies.token;
  }

  console.log(document.cookie);

  // const removeCookieFunc = () => {
  //   removeCookie('token');

  //   setText("removeCookie");
  // }

  // document.cookie = "token=urlParams";

  // const setGlobalCookie = (cookie) => {
  //   setCookie('token', cookie,{maxAge:'43200000'});     
  // }

  // const jwtToken = signIn(signInPayload)
  // if (jwtToken){
  //   setCookie('token', urlParams, {
  //     path: "/",
  //     secure: true,
  //     sameSite: "none",
  //   })
  // }

  // cookies.set('token', urlParams, { path: '/' });

  // const setCookie = (name: token, value: urlParams, option?: any) => {
  //   return cookies.set(name, value, { ...option })
  // }

  // const getCookie = (name: string) => {
  //   return cookies.get(name)
  // }

  // useEffect(() => {
  //   console.log(urlParams);
  //   // localStorage.setItem("token", urlParams);

  // }, [location])


  return (
    <div>
      <p>sns 정보 가져오기</p>
    </div>
  );
};

export default Auto;
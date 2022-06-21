import React from "react";
import styled, { css } from 'styled-components';
import '../css/style.css';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Auto = (props) => {
  // 회원관련
  const location = useLocation();
  const navigate = useNavigate();
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
    navigate('/');
  }, []);

  const setCookieFunc = () => {
    setCookie('token', urlParams, {path: "/", maxAge:2000});
    let result = "setCookie : ";
  }

  const getCookieFunc = (param) => {
    let result = "getCookie : "+cookies.token;
  }

  console.log(document.cookie);

  return (
    <div>
      <p>sns 계정 정보를 불러오는 중</p>
    </div>
  );
};

export default Auto;
import React from "react";
import styled, { css } from 'styled-components';
import '../css/style.css';

import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { loginSns } from "../redux/modules/user";

const Auto = (props) => {
  // 회원관련
  const location = useLocation();

  // 파라미터 query 값 가져오기 정규식
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  
  // 파라미터에서 가져올 query명 지정
  var urlParams = getParameterByName('member');

  useEffect(() => {
    console.log(urlParams);
    localStorage.setItem("token", urlParams);
  }, [location])


  return (
    <div>
      <p>sns 정보 가져오기</p>
    </div>
  );
};

export default Auto;
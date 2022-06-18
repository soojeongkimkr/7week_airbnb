import React from "react";
// import styled from "styled-components";
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <FooterBox className="footerBox">
      <Support>
        <SupportL>© 2022 Airbnb, Inc. ·
          <A href="javascript:void(0);">개인정보 처리방침</A> ·
          <A href="javascript:void(0);">이용약관</A> ·
          <A href="javascript:void(0);">사이트맵</A> ·
          <A href="javascript:void(0);">한국의 변경된 환불 정책</A> ·
          <A href="javascript:void(0);">회사 세부정보</A>
        </SupportL>
        <SupportR>
          <A href="javascript:void(0);">
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ color: "#222", marginTop: "0px", marginRight: "10px", fontSize: "15px" }}
            />
            한국어 (KR)</A>
          <A href="javascript:void(0);">₩ KRW</A>
          <A href="javascript:void(0);">지원 및 참고 자료
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{ color: "#222", marginTop: "0px", marginLeft: "10px", fontSize: "15px" }}
            />
          </A>
        </SupportR>
      </Support>
      <Address>
        웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
      </Address>
    </FooterBox>
  );
};

const FooterBox = styled.footer`
position:fixed;
bottom:0;
padding:12px 40px 12px;
border-top:1px solid #EBEBEB;
background-color:#fff;
`

const Support = styled.div`
display:flex;
justify-content:space-between;
text-align:left;
font-size:14px;
`

const SupportL = styled.div`
color:#222;
word-break:keep-all;
`

const SupportR = styled.div`
display:flex;
align-items:center;
min-width:340px;
margin-left:30px;
font-weight:600;
`

const A = styled.a`
margin:0 10px;
color:#222;
text-decoration:none;
&:hover{
  text-decoration:underline;
}
`

const Address = styled.address`
margin-top:14px;
padding-top:8px;
border-top:1px solid #EBEBEB;
color:#717171;
text-align:left;
font-size:10px;
font-style:normal;
word-break:keep-all;
`

export default Footer;
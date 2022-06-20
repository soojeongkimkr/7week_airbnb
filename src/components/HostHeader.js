import React, {useState} from "react";
import styled, {css} from "styled-components";

import airbnblogo_s from '../img/airbnblogo_s.png';

import {Link} from 'react-router-dom';

import HostAccount from "./HostAccount";


const HostHeader = () => {

  

  return (
    <div>
      <header>
      <HostHeaderWrap>
        <div className="inner">
          <div className="logo">
            <Link to ='/host'>
              <img src={airbnblogo_s} alt="airbnb logo"></img>
            </Link>
          </div>
          <div className="menu_inner">
          <div className="menu">
            <div className="item">
              <span className="item__name"
              >투데이</span>
              <span className="item__name"
              >메세지</span>
              <span className="item__name">달력</span>
              <span className="item__name"
              >인사이트</span>
              <span className="item__name">메뉴</span>

              {/* { mode === 'hotel'?
              (<MenuHotel/>)
              : mode === 'exp'?
              (<MenuExp/>)
              : null
              }  */}
              </div>
            </div>
          </div>

          <HostAccount/>
          </div>
      </HostHeaderWrap>
    </header>


    </div>

  )
};

const HostHeaderWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
      z-index:99;
      position:fixed;
      width: 100%;
      height: 70px;
      top:0;
      border-bottom:1px solid #eee;
      background:#fff;

      .inner{
        position:relative;
        width: 98%;
        margin: 0 auto;
        
      }
      .logo {
        position: absolute;
        width: 72px;
        height: 69px;
        cursor: pointer;
        z-index: 1;
      }

      .logo img {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 72px;
      }

      /* 헤더 중앙 메뉴 */
      .menu_inner {
          position: absolute;
          width: 100%;
      }

      .menu_inner .menu {
          /* background-color:darkblue; */
          width:70%;
          margin: auto;
          height: 80px;
          top: 0;
          bottom: 0;
      }

      .menu_inner .menu .item {
          /* background-color:darkgrey; */
          /* position: absolute; */
          top: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
      }

      .menu .item .item__name {
          margin-top: 18px;
          padding: 10px 16px;
          font-size: 14px;
          color: #222;
          cursor: pointer;
      }

      .menu .item .item__name:hover {
          color: #717171;
      }
      
      
      .menu .item .item__name::after {
        content: "";
        width: 0;
        height: 2px;
        border-radius: 10px;
        background-color: #ccc;
        margin: auto;
        display: block;
        margin-top: 7px;
        transition: width .1s;
    }

    .menu .item .item__name:hover::after {
        width: 25px;
    }



      /* 메뉴 클릭시 on off */
      /* .menu .item .item__name.on::after {
          content: "";
          width: 17px;
          height: 2px;
          border-radius: 10px;
          background-color: #fff;
          margin: auto;
          display: block;
          margin-top: 7px;
      }

      .menu .item .item__name.on:hover {
          color: #fff;
      } */

      /* 메뉴 클릭시 on off (스크롤 후 배경이 흰색인 상태에서) */
      /* .menu .item .item__name.black::after {
          content: "";
          width: 17px;
          height: 2px;
          border-radius: 10px;
          background-color: #222;
          margin: auto;
          display: block;
          margin-top: 7px;
      }

      .menu .item .item__name.black:hover {
          color: #222;
      } */


      /* 메뉴에서 옵션으로 뜨는 창 */
      /* 위치 */

      .menu_inner .location_search {
          /* display:none; */
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          /* height: 166px; */
          border-radius: 30px;
          background-color: #fff;
          box-shadow: 0px 0px 20px rgba(65, 3, 63, 0.15);
      }

      .menu_inner .location_search  {
          position:relative;
          margin-top: 24px;
          margin-left: 32px;
          /* width:370px; */
          /* height:145px; */
      }
      
      /* .menu_inner .location_search div.location_search_txt {
          padding: 8px 0;
          font-size: 14px;
          font-weight: bold;
      } */

      
      

      


      .menu_inner .location_search div>img{
          width:50px;
          border-radius: 10px;
      }
      .menu_inner .location_search{
          color:#222;
      }
      
      

      /* 체크인 */
      .menu_inner .checkin {
          display: none;
          position: absolute;
          top: 80px;
          left: 0;
          width: 700px;
          height: 400px;
          border-radius: 30px;
          background-color: #fff;
          box-shadow: 0px 0px 20px rgba(65, 3, 63, 0.15);
      }

      /* 체크아웃 */
      .menu_inner .checkout {
          display: none;
          position: absolute;
          top: 80px;
          right: 0;
          width: 700px;
          height: 400px;
          border-radius: 30px;
          background-color: #fff;
          box-shadow: 0px 0px 20px rgba(65, 3, 63, 0.15);
      }

      /* 인원 */
      .menu_inner .guestnumber {
          display:none;
          position: absolute;
          top: 80px;
          right: 0;
          border-radius: 30px;
          background-color: #fff;
          box-shadow: 0px 0px 20px rgba(65, 3, 63, 0.15);
      }
      .menu_inner .guestnumber_wrap {
          position: relative;
          margin:32px;
      }
      .menu_inner .guestnumber_wrap>div {
          height:71px;
          width:330px;
          margin-bottom: 10px;
      }
      .menu_inner .guestnumber_wrap>div:nth-of-type(5){
          height:47px;
      }
      .menu_inner .guestnumber_wrap>div::after{
          position:absolute;
          content:"";
          width:330px;
          height:1px;
          background-color: #cccccc;
          opacity: .3;
          display:block;
          margin: auto;
          margin-top:18px;
      }
      .menu_inner .guestnumber_wrap>div:last-child::after{
          display:none;
      }
      .menu_inner .guestnumber_wrap>div>ul{
          display: flex;
      }

      .menu_inner .guestnumber_wrap>div ul .txt ul {
          position:relative;
      }

      .menu_inner .guestnumber_wrap>div ul .txt ul .title {
          font-size:16px;
          font-weight: bold;
          color:#222;
      }

      .menu_inner .guestnumber_wrap>div ul .txt ul .detail {
          font-size:14px;
          color:#717171;
      }

      .menu_inner .guestnumber_wrap>div ul .numberbutton {
          position:absolute;
          display:flex;
          margin-top:3px;
          right:0;
          
      }

      .menu_inner .guestnumber_wrap>div ul .numberbutton .button__minus {
          position: relative;
          width:30px;
          height:30px;
          border-radius: 100px;
          border:1px solid #cccccc;
          cursor: pointer;
      }

      .menu_inner .guestnumber_wrap>div ul .numberbutton .button__minus .material-icons {
          position:absolute;
          top:5px;
          left:5px;
          color:#cccccc;
          font-size:20px;
      }
      .menu_inner .guestnumber_wrap>div ul .numberbutton .result{
          position:relative;
          padding: 0 15px;
          top:3px;
          
      }
      .menu_inner .guestnumber_wrap>div ul .numberbutton .button__plus {
          position: relative;
          margin:auto;
          margin:auto;
          width:30px;
          height:30px;
          border-radius: 100px;
          border:1px solid grey;
          cursor: pointer;
      }

      .menu_inner .guestnumber_wrap>div ul div.numberbutton .button__plus .material-icons {
          position:absolute;
          top: 5px;
          left:5px;
          color:grey;
          font-size:20px;
      }

      .menu_inner .guestnumber_wrap>.petnumber ul div ul .detail {
          color:#222;
          font-weight: bold;
          text-decoration: underline;
      }


            ${device.tablet}{
              
            }
          `
        }}
      `;


export default HostHeader;
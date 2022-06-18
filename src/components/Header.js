import React, {useState} from "react";
import styled, {css, keyframes} from "styled-components";

import airbnblogo from '../img/airbnblogo.png';

import {Link} from 'react-router-dom';

import MenuHotel from './MenuHotel';
import MenuExp from './MenuExp';
import IsLogin from "./IsLogin";
import IsNotLogin from "./IsNotLogin";

const Header = () => {
  const [mode, setMode] = useState("hotel");
  const [isLogin, setIsLogin] = useState("false")
  
  React.useEffect(()=>{
    
  },[])

  return (
    <header>
      <HeaderWrap>
        <div className="inner">
          <div className="logo">
            <Link to ='/'>
              <img src={airbnblogo} alt="airbnb logo"></img>
            </Link>
          </div>
          <div className="menu_inner">
          <div className="menu">
            <div className="item">
              <span className="item__name"
              onClick={()=>{setMode("hotel")}}
              >숙소</span>
              <span className="item__name"
              onClick={()=>{setMode("exp")}}
              >체험</span>
              <span className="item__name">온라인 체험</span>
              { mode === 'hotel'?
              (<MenuHotel/>)
              : mode === 'exp'?
              (<MenuExp/>)
              : null
              } 

                {/* 체험 옵션창  */}
                {/* <div className="optionList"> */}
                   {/* 체험 위치   */}
                  {/* <div className="location_search option">
                        <div><img
                            src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq" alt=""/>
                        </div>
                        <div>근처 추천 장소</div>
                  </div> */}
                  {/* 체험 날짜  */}
                  {/* <div className="checkout option">
                  </div> */}
                {/* </div> */}
              </div>
              
            </div>
          </div>

          {isLogin === "true"?
            <IsLogin/>
            :
            isLogin === "false" ?
            <IsNotLogin/>
          : null
          } 
          </div>
      </HeaderWrap>
    </header>
  );
};

const HeaderWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
      position:fixed;
      width: 100%;
      height: 160px;
      top:0;
      border-bottom:1px solid #eee;

      .inner{
        position:relative;
        width: 1350px;
        margin: 0 auto;
        
      }
      .logo {
        position: absolute;
        width: 102px;
        height: 80px;
        cursor: pointer;
        z-index: 1;
      }

      .logo img {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 120px;
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
          font-size: 16px;
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
    .menu .item .item__name:nth-of-type(3):hover::after {
        width: 60px;
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

     





export default Header;


import React from "react";

import styled, {css} from "styled-components";

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const IsLogin = () => {


  return (
    <IsLoginWrap>
    <nav className="header_right_wrap">
          <div className="header_right">
            <div className="header_right_host">
              <div className="host">호스트 모드로 전환</div>
              <div className="language">
                <LanguageOutlinedIcon/>
              </div>
            </div>

            <div className="signin" tabIndex="-1">
              <div className="signin_item">
                <MenuOutlinedIcon/>
                <AccountCircleIcon/>
              </div>
              <div className="signinTxt">
                <div>
                  <div
                  style={{fontWeight: '600'}}
                  > 메세지 </div>
                  <div
                  style={{fontWeight: '600'}}
                  > 알림 </div>
                  <div
                  style={{fontWeight: '600'}}
                  > 여행 </div>
                  <div
                  style={{fontWeight: '600'}}
                  > 위시리스트 </div>
                  <div> 숙소 관리 </div>
                  <div> 체험 호스팅하기 </div>
                  <div> 호스트 추천하기 </div>
                  <div> 계정 </div>
                  <div> 도움말 </div>
                  <div> 로그아웃 </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </IsLoginWrap>
  );
}
const IsLoginWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
      position: absolute;
      width: 350px;
      height: 80px;
      right: 0;

      /* 우측 메뉴 */
      /* .header_right_wrap {
        
      } */

      .header_right_wrap .header_right {
        position: absolute;
        display: flex;
        height: 42px;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }

      .header_right_wrap .header_right .header_right_host {
        display: flex;
        margin-top: 10px;
      }

      .header_right_wrap .header_right .header_right_host .host{
        font-size: 14px;
        font-weight: bold;
        padding: 11px 20px;
        border-radius: 100px;
        color: #222;
      }
      /* .headerWrap .header_right_wrap .header_right .header_right_host .host a.up {
          font-size: 14px;
          font-weight: bold;
          padding: 11px 20px;
          border-radius: 100px;
          color: #222;
      } */
      .header_right_wrap .header_right .header_right_host .host:hover {
          background-color: rgba(247, 247, 247);
      }

      .header_right_wrap .header_right .header_right_host .language {
          width:100px;
          height:100px;
          background:red;
      }

      .header_right_wrap .header_right .header_right_host .language:hover {
          background-color: rgba(255, 255, 255, 0.2);
      }

      /* .header_right_wrap .header_right .header_right_host .language {
          position: absolute;
          color: #222;
          top: 10px;
          left: 10px;
          font-size: 20px;
      } */

      .header_right_wrap .header_right .signin {
          background-color: #fff;
          width: 77px;
          height: 42px;
          border: 1px solid rgba(224,224,224);
          border-radius: 50px;
          box-sizing: border-box;
          margin-left: 10px;
          
      }

      .header_right_wrap .header_right .signin .signin_item {
          position: absolute;
          height: 40px;
          display: flex;
          top: 12px;
          bottom: 0;
          right: -22px;
          margin: auto;
          cursor: pointer;
      }

      .header_right_wrap .header_right .signin_item div:first-child {
          padding-right: 5px;
          margin-top: 2.5px;
      }

      .header_right_wrap .header_right .signin_item :nth-child(2) {
          color: #696969;
          font-size: 30px;
      }

      /* signin 옵션창 */
      .header_right_wrap .header_right .signinTxt {
          position: absolute;
          display: flex;
          flex-direction: column;
          text-align:left;
          width:200px;
          background-color: #fff;
          top:60px;
          right:0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0px 0px 20px rgba(65, 3, 63, 0.15);
      }
      .header_right_wrap .header_right .signinTxt>div{
          margin-left:20px;
          margin-top:30px;
          
      }
      .header_right_wrap .header_right .signinTxt div{
          margin-bottom:15px;
      }
      .header_right_wrap .header_right .signinTxt div:nth-of-type(4):after,
      .header_right_wrap .header_right .signinTxt div:nth-of-type(8):after{
          content:"";
          width:250px;
          height:1px;
          margin-top:15px;
          margin-left: -20px;
          background-color: #cccccc;
          opacity: .5;
          display:block;
      }

      .header_right_wrap .header_right .signinTxt div{
          font-size: 14px;
          color:#222;
      }


      

      ${device.tablet}{
        
      }
    `
  }}
`;

export default IsLogin;
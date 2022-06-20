import React, { useState } from "react";
import styled, {css} from "styled-components";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import hostpagebackground from '../img/hostpagebackground.jpg'
import pricePic from '../img/pricePic.jpeg';
import condition from '../img/condition.jpeg';
import inform from '../img/inform.jpeg';

import HostHeader from "../components/HostHeader";

import HostReservationNotice from '../components/HostReservationNotice'
import HostingTip from "../components/HostingTip";

const HostPage = () => {


  return (
    <>
    <HostHeader/>
    <HostPageWrap>
      
      <div className="background"
      style={{
        backgroundImage:`url(${hostpagebackground})`, backgroundPosition:'center'
      }}>
        <div className="contents">
          <div className="content">
            <div className="title">투데이</div>
            <div className="detail">반갑습니다! 이제 곧 최고의 호스트가 되실 수 있습니다. 호스팅 시작 방법을 확인해보세요.</div>
          </div>
          {/* 카드 1번 */}
          <div className="cards">
            <div className="card">
              <div className="pic">
                <img src={pricePic} alt="달력과 요금 맞춤 설정하기"/>
              </div>
              <div className="txt">
                <div>달력과 요금 맞춤 설정하기</div>
              </div>
            </div>
          

          {/* 카드 2번 */}
            <div className="card">
              <div className="pic">
                <img src={condition} alt="게스트의 숙소 예약 방식 확인하기"/>
              </div>
              <div className="txt">
                <div>게스트의 숙소 예약 방식 확인하기</div>
              </div>
            </div>

          {/* 카드 3번 */}
            <div className="card">
              <div className="pic">
                <img src={inform} alt="첫 게스트를 맞이할 준비하기"/>
              </div>
              <div className="txt">
                <div>첫 게스트를 맞이할 준비하기</div>
                <div className="checkIcon">
                  <CheckCircleOutlineIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <HostReservationNotice/>
      <HostingTip/>
    </HostPageWrap>
    </>
  );
  
};


const HostPageWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
      .background{
        background-repeat: none;
        width:100%;
        height:680px;
        margin-top:60px;
        display:flex;
        justify-content:center;
      }
      .contents{
        display:flex;
        flex-direction:column;
        margin-left: -300px;
      }
      .content .title{
        text-align: left;
        margin-bottom: 25px;
        margin-top: 75px;
        font-size: 32px;
        color: #fff;
        font-weight: 600;
        line-height:36px;
      }
      .content .detail{
        text-align: left;
        margin-bottom: 40px;
        font-size:16px;
        color: #fff;
        line-height:20px;
        font-weight:400;
      }
      
      .cards{
        display:flex;
      }
      .card{
        position: relative;
        width: 308px;
        height: 400px;
        border-radius:15px;
        overflow:hidden;
        margin-right: 20px;
        box-shadow: 0px 5px 10px rgba(65, 3, 63, 0.2);
        cursor:pointer;
      }
      .card .pic{
        
        width: 308px;
        height: 308px;
      }
      .card .pic img{
        width: 308px;
        height: 308px;
      }
      .card .txt{
        background: #000;
        height:92px;
        display:flex;
      }
      .card .txt>div{
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        padding: 25px;
        flex-grow:1;
      }
      .card .txt .checkIcon{
        color:#fff;
        width: 5px;
        display:flex;
        justify-content:center;
      }

    `
  }}
`

export default HostPage;
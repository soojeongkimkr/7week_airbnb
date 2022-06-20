import React, { useState } from "react";
import styled, {css} from "styled-components";

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const HostingTip= () => {

  return (
    <HostingTipWrap>
      <div className="tipcontents">
        <div className="tiptxt">
          호스팅 관련 팁과 업데이트
        </div>
        <div className="tipcards">
          <div className="tipcard">
            <div className="tippic">
              <img src="https://a0.muscache.com/im/pictures/3c930824-3462-40c4-afc2-19d5ef019594.jpg?im_w=720" alt="눈에 띄는 숙소를 만드는 방법"/>
            </div>
            <div className="tiptxt">
              <div>
              눈에 띄는 숙소를 만드는 방법
              </div>
            </div>
          </div>
          <div className="tipcard">
            <div className="tippic">
            <img src="https://a0.muscache.com/im/pictures/1caeb016-a2ad-4c00-86a3-4cafc77431e0.jpg?im_w=720" alt="멋진 숙소 설명 작성하기"></img>
            </div>
            <div className="tiptxt">
              <div>멋진 숙소 설명 작성하기</div>
            </div>
          </div>
          <div className="tipcard">
            <div className="tippic" >
            <img src="https://a0.muscache.com/im/pictures/c6b34a30-9190-4915-a746-ebb986309044.jpg?im_w=720" alt="달력 및 예약 설정 알아보기"/>
            </div>
            <div className="tiptxt">
              <div>달력 및 예약 설정 알아보기</div>
            </div>
          </div>
          <div className="tipcard">
            <div className="tippic">
              <img src="https://a0.muscache.com/im/pictures/c8c24577-9079-4af8-b64b-200feb855d33.jpg?im_w=720" alt="가이드북을 통해 게스트에게 유용한 현지 정보 알려주기"/>
            </div>
            <div className="tiptxt">
              <div>가이드북을 통해 게스트에게 유용한 현지 정보 알려주기</div>
            </div>
          </div>
        </div>
        <div className="askToSuperHost">
          <div className="tiptitle">슈퍼호스트에게서 배우기</div>
          <button>
            <div>
            슈퍼호스트에게 물어보기
            </div>
            <ArrowForwardIosOutlinedIcon style={{fontSize:'15px'}}/>
            
            
          </button>
        </div>
      </div>
    </HostingTipWrap>

  );
}
const HostingTipWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
      background: #000;
      display:flex;
      justify-content:center;
      .tipcontents{
        display:flex;
        flex-direction:column;
        width:1280px;
        padding: 64px 0;
        .tiptxt{
        text-align: left;
        margin-bottom: 25px;
        margin-top: 75px;
        font-size: 26px;
        color: #fff;
        font-weight: 600;
      }
      .tipcards{
        display:flex;
      }
      .tipcard{
        position: relative;
        width: 308px;
        border-radius: 15px;
        overflow: hidden;
        margin-right: 20px;
        box-shadow: 0px 5px 10px rgba(65, 3, 63, 0.2);
        height: 328px;
        background:#222;
        cursor:pointer;
          .tippic{
          width: 308px;
          height: 231px;
            >img{
            width: 308px;
            height: 231px;
            
          }
        }
      .tiptxt{
        margin:0 auto;
        width:308px;
        height:97px;
        
        >div{
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          text-align: left;
          padding: 25px;
          
        }
      }
      
      }
      }
      
      
      .askToSuperHost{
        font-size:18px;
        color:#fff;
        text-align: left;
        padding: 64px 0;
        .tiptitle{
          margin-bottom:24px;
        }
        button{
          width: 308px;
          height:70px;
          background:#222;
          border:1px solid transparent;
          border-radius:10px;
          color:#fff;
          font-size:18px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:16px;
          cursor:pointer;
        }
        
      }
      
      
      
      
      
    `
  }}
`

export default HostingTip;
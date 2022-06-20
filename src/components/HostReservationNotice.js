import React, { useState } from "react";
import styled, {css} from "styled-components";

import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

const HostReservationNotice = () => {
  

  return (
    <ReservationNoticeWrap>
      <div className="reservcontents">
        <div className="title">
          <div className="txt">
            예약
          </div>
          <div className="countR">
            <u>모든 예약(0개)</u>
          </div>
        </div>
        <div className="btns">
          <div className="btn">체크아웃 예정(0건)</div>
          <div className="btn">현재 호스팅 중(0건)</div>
          <div className="btn">체크인 예정(0건)</div>
          <div className="btn">예정(0건)</div>
        </div>

        <div className="infoReserv">
          <div class="notice">
            <div className="checkIcon">
              <FactCheckOutlinedIcon style={{fontSize:'32px', color:'#666'}}/>
            </div>
            <div className="noticeDetail">오늘과 내일은 체크아웃하는<br/>게스트가 없습니다.</div>  
          </div>
        </div>
      </div>
    </ReservationNoticeWrap>

  );
}
const ReservationNoticeWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
      background: #fff;
      display:flex;
      justify-content:center;
      .reservcontents{
        display:flex;
        flex-direction:column;
        width:1280px;
        padding: 64px 0;
        .title{
        display:flex;
        justify-content:space-between;
        color:#222;
        .txt{
          font-size:26px;
          font-weight:600;
          line-height:30px;
          color:#222;
        }
      }
      .btns{
        display:flex;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-right:10px;
        font-size:14px;
        .btn{
          padding: 8px 16px;
          border: 1px solid #ccc;
          border-radius: 100px;
          margin-right: 10px;
          &:hover{
            border:1px solid #222;
          }
        }
      }
      .infoReserv{
        display:flex;
        justify-content:center;
        align-items:center;
        height:200px;
        width: 1280px;
        background: #f7f7f7;
        border-radius: 15px;
        .notice{
          display:flex;
          flex-direction: column;
          width:200px;
          height: 200px;
          justify-content:center;
          align-items:center;
          .checkIcon{
            margin-bottom: 10px;
          }
          .noticeDetail{
            font-size:14px;
            font-weight:400;
            line-height:18px;
          }
        }
        
      }
      }
    `
  }}
`

export default HostReservationNotice;
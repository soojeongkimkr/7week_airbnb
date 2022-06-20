import React from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'
import startHosting from '../img/starthosting.png'


const SetHosting10 = (props) => {
 
  return (
    <SetHostingWrap>
      <div className='txt'>
        <Link to ='/'>
          <div className='logo'>
            <img width="50px" src={airbnblogo_ws} alt="에어비엔비 로고"/>
          </div>
        </Link>
        <div className="content">
          <div className='detail'>
            새로운 숙소 페이지를 확인하세요!
          </div>
        </div>
      </div>
      

      {/* 우측페이지 */}
      <div className='select'>
        <div className='wraper'>
            <div className='contents'>
              <div className='pic'>
                <img src ={startHosting} alt="숙소 사진"/>
              </div>
              <div style={{fontSize:'26px', fontWeight:'700'}}>아름다운 아파트</div>
              <hr style={{width:'100%', opacity:'0.3', marginBottom:'30px'}}/>
              <div><b>수정님이 호스팅하는 공동주택의 개인실</b></div>
              <hr style={{ width:'100%', opacity:'0.3', marginBottom:'30px'}}/>
              <div style={{fontSize:'16px'}}>최대 인원 5명 · 침실 1개 · 침대 1개 · 욕실 1개</div>
              <hr style={{width:'100%', opacity:'0.3', marginBottom:'30px'}}/>
              <div style={{fontSize:'16px'}}>숙소 설명</div>
              <hr style={{width:'100%', opacity:'0.3', marginBottom:'30px'}}/>
              <div style={{fontSize:'16px', fontWeight:'700'}}>위치</div>
              <div style={{fontSize:'16px', fontWeight:'700'}}>주소</div>
            </div> 
        </div>
        <div className='btns'>
          <Link to={`/host/post/${props.param}/9price`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/hotel/${props.param}`}>
            <button className='nextBtn'>다음</button>
          </Link>
        </div>
      </div>

    </SetHostingWrap>
  )
}

const SetHostingWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
    width: 100%;
    height: 100%;
      
      .txt{
        position: fixed;
        width: 50%;
        height: 100%;
        background: url(${startHosting});
        background-position: center;

        .logo{
          margin-top: 3vh;
          margin-left: 2vw;
          cursor: pointer;
        }
        .content{
          display: flex;
          flex-direction: column;
          margin-top: 40vh;

          .detail{
          color: #fff;
          font-size: 48px;
          font-weight: 600;
          line-height: 70px;
          text-align:left;
          margin-left: 2vw;
          }
          button{
            width: 180px;
            height: 50px;
            margin: 40px;
            color: #fff;
            font-weight: 700;
            font-size: 16px;
            border-radius: 10px;
            border: 1px solid transparent;
            background: linear-gradient(to right, rgba(209,50,60), rgba(196,45,101));
            cursor:pointer;
          }
        }
      }

      .select{
        position: absolute;
        overflow: hidden;
        left:50%;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items:center;

          .wraper{
            animation: fadein 1s ease-in-out;
            position: absolute;
            border: 1px solid #ddd;
            border-radius: 40px;
            font-size: 18px;
            margin-bottom: 12px;
            overflow: hidden;
            box-shadow: 2px 5px 55px rgba(100, 100, 100, 0.3);
          }
            .contents{
              display:flex;
              flex-direction:column;
              /* padding: 30px; */
              margin:30px;
              border-radius: 30px;
            }

            .pic{
              border-radius: 25px;
              width: 315px;
              height: 200px;
              overflow:hidden;
              margin-bottom: 35px;
              margin-left:0px;

              img{
                width:100%;
                height:100%;
              }
            }

            div{
              text-align:left;
              margin-right: auto;
              margin-bottom: 15px;
              margin-left:10px;
            }
            .pic{

              img{
                border-radius: 5px;
              }
            }
          }
        }
        
        .preBtn{
          position:absolute;
          bottom: 3vh;
          left: 3vw;
          background: #000;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          padding: 14px 24px;
          border: 1px solid transparent;
          border-radius: 8px;
          cursor:pointer;

        }

        .nextBtn{
          position:absolute;
          bottom: 3vh;
          right: 3vw;
          background: #000;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          padding: 14px 24px;
          border: 1px solid transparent;
          border-radius: 8px;
          cursor:pointer;

        }
      
      @keyframes fadein{
        0% {
          opacity: 0;
          transform: translateY(50px);
        }
        100% {
          opacity: 1;
          transform: none;
        }

    `
    
  }}`
export default SetHosting10;
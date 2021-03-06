import React,{useRef} from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'
import startHosting from '../img/starthosting.png'


const SetHosting3 = () => {

  const address = useRef()
  // console.log(address.current.value)

  const threeStepDone = () => {
    localStorage.setItem('address', JSON.stringify(address.current.value))
  }
  
  
  return (
    <SetHostingWrap>
      
      {/* 좌측 화면 */}
      <div className='txt'>
        <Link to ='/'>
          <div className='logo'>
            <img width="50px" src={airbnblogo_ws} alt="에어비엔비 로고"/>
          </div>
        </Link>
        <div className="content">
          <div className='detail'>
            숙소 위치는 어디인가요?
          </div>
        </div>
      </div>

      {/* 우측 화면 */}
      <div className='select'>
          <div className='address'>
            <input type="text" placeholder='주소를 입력하세요.' ref={address}>
            </input>
        </div>


        {/* 버튼 */}
        <div className='btns'>
          <Link to={`/host/post/2private`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/host/post/4numbers`}>
            <button className='nextBtn' onClick={threeStepDone}>다음</button>
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
        flex-direction:column;


        .address{
          animation: fadein 1s ease-in-out;
          margin-bottom: 5vh;
           
          input{
            outline: none;
            width: 25vw;
            height: 90px;
            border: 2px solid #ddd;
            border-radius: 20px;
            font-size: 18px;
            padding-left: 30px;
            padding-right: 30px;
            margin-bottom: 12px; 
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
export default SetHosting3;
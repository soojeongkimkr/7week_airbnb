import React from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'
import startHosting from '../img/starthosting.png'


const SetHosting8 = (props) => {
  const [option, setOption] = React.useState('apt');

   // 레이아웃 버튼 선택
   const isChecked = (e) => {
    if (e.target.checked){
      setOption(e.target.value)
    }
  }
  


  return (
    <SetHostingWrap>
      <div className='movie'>
        <video width="120%"  autoPlay="autoplay" muted="muted" loop={true}>
          <source src="https://a0.muscache.com/v/55/86/558653ec-da4e-5148-b0e2-828b7a691e86/558653ecda4e5148b0e2828b7a691e86_4000k_1.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className='txt'>
        <Link to ='/'>
          <div className='logo'>
            <img width="50px" src={airbnblogo_ws} alt="에어비엔비 로고"/>
          </div>
        </Link>
        <div className="content">
          <div className='detail'>
            숙소에 대해 설명해 주세요.
          </div>
        </div>
      </div>
      <div className='select'>
      <div className='title'>
            숙소 설명 작성하기
        </div>
        <div className='address'>
          <textarea type="text" defaultValue='편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을 것입니다.'/>
        </div>

        <div className='btns'>
          <Link to={`/host/post/${props.param}/7title`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/host/post/${props.param}/9price`}>
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
    .movie{
        position: fixed;
        width:50%;
        overflow:hidden;
      }
      
      .txt{
        position: fixed;
        width: 50%;
        height: 100%;
      

        .logo{
          osition:absolute;
          margin-top: 3vh;
          margin-left: 2vw;
          cursor: pointer;
        }
        .content{
          display: flex;
          flex-direction: column;
          margin-top: 40vh;

          .detail{
          position:absolute;
          bottom: 10vh;
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
        flex-direction:column;

      
        textarea{
          animation: fadein 1s ease-in-out;
          outline: none;
          width: 30vw;
          height: 200px;
          border: 2px solid #ddd;
          border-radius: 20px;
          font-size: 18px;
          padding-top: 30px;
          padding-left: 30px;
          padding-right: 30px;
          margin-bottom: 12px; 
        }
        
        .title{
          animation: fadein 1s ease-in-out;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
          margin-top: -40px;
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
export default SetHosting8;
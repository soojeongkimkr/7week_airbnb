import React from 'react';
import styled, {css} from "styled-components";
import { Link, useParams } from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'


const StartHosting = () => {

  

  return (
    <>
    <StartHostingWrap>
      <div className='txt'>
        <Link to ='/'>
          <div className='logo'>
            <img width="50px" src={airbnblogo_ws} alt="에어비엔비 로고"/>
          </div>
        </Link>
        <div className="content">
          <div className='detail'>
            호스팅을<br/>
            시작해보세요
          </div>
          <Link to={`/host/post/1property`}><button>호스팅 시작하기</button></Link>
        </div>
      </div>
      <div className='movie'>
        <video autoPlay="autoplay" muted="muted" loop={true}>
          <source src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4" type="video/mp4" />
        </video>
      </div>

    </StartHostingWrap>
    </>
  )
}

const StartHostingWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
    width: 100%;
    height: 100%;
      
      .txt{
        position:fixed;
        width:50%;
        height:100%;
        background:#000;

        .logo{
          margin: 30px;
          cursor:pointer;
        }
        .content{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          margin-top: 30vh;

          .detail{
          color:#fff;
          font-size: 64px;
          font-weight: 600;
          line-height: 70px;
          
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

      .movie{
        position: absolute;
        overflow:hidden;
        left:50%;
        width: 50%;
        height: 100%;
      }

    `
  }}`
export default StartHosting;
import React from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'
import startHosting from '../img/starthosting.png'


const SetHosting3 = (props) => {
  const [option, setOption] = React.useState('island');

   // 레이아웃 버튼 선택
   const isChecked = (e) => {
    if (e.target.checked){
      setOption(e.target.value)
    }
  }
  


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
            숙소 위치는 어디인가요?
          </div>
        </div>
      </div>
      <div className='select'>
        <div className='address'>
          <input type="text" placeholder='주소를 입력하세요.'>
          </input>
        </div>
        <div className='title'>
          카테고리를 선택해주세요.
        </div>
        
        {/* 카테고리 옵션들 */}
        <div className='options'>
          <div className='option island'
          style={option === 'island' ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}>
            <input type="radio" value="island" id="island" name="option"
            onChange={isChecked}
            style={{display:'none'}}
            />
            <label htmlFor='island'>
              <div>섬</div>
              <div className='pic'>
                
              </div>
            </label>
          </div>
          <div className='option park'
          style={option === 'park' ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}
          > 
            <input type="radio" value="park"  id="park" name="option"
            onChange={isChecked}
            style={{display:'none'}}
            />
            <label htmlFor='park'>
              <div>국립공원</div>
              <div className='pic'>
                
              </div>
            </label>
          </div>
          <div className='option wood'
          style={option === 'wood' ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}
          > 
            <input type="radio" value="wood"  id="wood" name="option"
            onChange={isChecked}
            style={{display:'none'}}
            />
            <label htmlFor='wood'>
              <div>통나무집</div>
              <div className='pic'>
                
              </div>
            </label>
          </div>
          
          
          
          
          
        </div>

        <div className='btns'>
          <Link to={`/host/post/${props.param}/2private`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/host/post/${props.param}/4numbers`}>
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
        .title{
          animation: fadein 1s ease-in-out;
          margin-bottom: 2vh;
          /* text-align:left; */
          /* margin-left: 6vw; */
        }

        .options{
          animation: fadein 1s ease-in-out;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          justify-content: center;
          align-items: center;
          margin-left: 15vw;
          margin-right: 15vw; 
          
          .option{
            display:flex;
            justify-content: center;
            align-items: center;
            width: 5vw;
            height: 7vh;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 18px;
            padding : 20px;
            margin: 10px;
            margin-bottom: 12px; 

            label{
              display:flex;
              /* flex-direction: column; */
              justify-content: center;
              flex-grow:1;
              width: 7vw;
              height: 7vh;
              padding: 20px;

              div{
              display:flex;
              justify-content:center;
              align-items: center;
              
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
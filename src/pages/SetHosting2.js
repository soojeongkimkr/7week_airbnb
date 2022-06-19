import React from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'
import startHosting from '../img/starthosting.png'


const SetHosting2 = (props) => {
  const [option, setOption] = React.useState('apt');

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
            게스트가 머무르게 될 숙소의 종류가 무엇인가요?
          </div>
        </div>
      </div>
      <div className='select'>
        <div className='options'>
          <div className='option apt'
          style={option === 'apt' ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}>
            <input type="radio" value="apt" id="apt" name="option"
            onChange={isChecked}
            style={{display:'none'}}
            />
            <label htmlFor='apt'>
              <div>아파트</div>
              <div className='pic'>
                <img width="56px" src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240" alt="아파트"/>
              </div>
            </label>
          </div>
          <div className='option house'
          style={option === 'house' ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}
          > 
            <input type="radio" value="house" name="option" id="house"
            onChange={isChecked}
            style={{display:'none'}}
            />
            <label htmlFor='house'>
              <div>주택</div>
              <div className='pic'>
                <img width="56px" src="https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240" alt="주택"/>
              </div>
            </label>
          </div>
          <div className='option hotel'
          style={option === 'hotel' ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}
          > 
            <input type="radio" value="hotel" name="option" id="hotel"
            onChange={isChecked}
            style={{display:'none'}}
            />
            <label htmlFor='hotel'>
              <div>호텔</div>
              <div className='pic'>
                <img width="56px" height="56px" src="https://a0.muscache.com/im/pictures/a2c9ad21-b159-4fd2-b417-d810fb23c6a9.jpg?im_w=240" alt="호텔"/>
              </div>
            </label>
          </div>
        </div>

        <div className='btns'>
          <Link to={`/host/post/${props.param}/1property`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/host/post/${props.param}/3location`}>
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

        .options{
          animation: fadein 1.5s ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        

          .option{
            display:flex;
            width: 15vw;
            height: 90px;
            border: 2px solid #ddd;
            border-radius: 20px;
            font-size: 18px;
            padding-left: 30px;
            padding-right: 30px;
            margin-bottom: 12px; 

            label{
              display: flex;
              justify-content: space-between;
              flex-grow:1;
            }
            div{
              display:flex;
              justify-content:center;
              align-items:center;
            }
            .pic{

              img{
                border-radius: 5px;
              }
            }
          }
        }

        .btns{

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
export default SetHosting2;
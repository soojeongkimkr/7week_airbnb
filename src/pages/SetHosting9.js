import React from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';



const SetHosting9 = (props) => {
  const [priceCount, setPriceCount] = React.useState(10000);
  const [servicePriceCount, setServicePriceCount] = React.useState(10000);
  const [cleanPriceCount, setCleanPriceCount] = React.useState(10000);
  

  const pricePlus = () => {
    setPriceCount( priceCount+5000 )
  }

  const priceMinus = () => {
    if(priceCount > 10000)
    setPriceCount( priceCount-5000 )
  }
  const servicePricePlus = () => {
    setServicePriceCount( servicePriceCount + 5000 )
  }
  
  const servicePriceMinus = () => {
    if(servicePriceCount > 10000)
    setServicePriceCount( servicePriceCount - 5000 )
  }
  const cleanPricePlus = () => {
    setCleanPriceCount( cleanPriceCount + 5000 )
  }
  
  const cleanPriceMinus = () => {
    if(cleanPriceCount > 10000)
    setCleanPriceCount( cleanPriceCount - 5000 )
  }

 
  


  return (
    <SetHostingWrap>
      <div className='movie'>
        <video width="120%"  autoPlay="autoplay" muted="muted" loop={true}>
          <source src="https://a0.muscache.com/v/9c/d4/9cd47434-c6bd-58ec-90b7-b50aa7dba461/9cd47434c6bd58ec90b7b50aa7dba461_4000k_1.mp4" type="video/mp4"/>
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
            이제 요금을 설정하실 차례입니다.
          </div>
        </div>
      </div>
      <div className='select'>


      {/* 하루 숙박비 */}
      <div className='options'>
        <div className='price dayprice'>
        <RemoveCircleOutlineIcon onClick={priceMinus}
          style={priceCount === 10000 ? {marginRight:'25px', color:'#ddd', fontSize: '35px'}: {marginRight:'25px', color:'#717171', fontSize: '35px'}}
          />
        <div className='option apt'>
          <div className='pic'>
            <div className='num'>
              ₩ {priceCount}
            </div>
          </div>
        </div>
        <AddCircleOutlineOutlinedIcon onClick={pricePlus}
        style={{marginLeft:'25px', color:'#717171', fontSize: '35px'}}
        />
        </div>
        <div className='perday'>/ 박</div>

        <hr style={{width: '100px', opacity:'0.3', marginTop:'50px'}}/>


        {/* 청소비 */}
        <div className='cleanprice' style={{marginTop:'50px'}}>청소비</div>
        <div className='price'>
        <RemoveCircleOutlineIcon onClick={cleanPriceMinus}
          style={cleanPriceCount === 10000 ? {marginRight:'25px', color:'#ddd', fontSize: '35px'}: {marginRight:'25px', color:'#717171', fontSize: '35px'}}
          />
        <div className='option apt'>
          <div className='pic'>
            <div className='num'>
              ₩ {cleanPriceCount}
            </div>
          </div>
        </div>
        <AddCircleOutlineOutlinedIcon onClick={cleanPricePlus}
        style={{marginLeft:'25px', color:'#717171', fontSize: '35px'}}
        />
        </div>

        {/* 서비스비 */}
        <div className='serviceprice' style={{marginTop:'30px'}}>서비스비</div>
        <div className='price'>
        <RemoveCircleOutlineIcon onClick={servicePriceMinus}
          style={servicePriceCount === 10000 ? {marginRight:'25px', color:'#ddd', fontSize: '35px'}: {marginRight:'25px', color:'#717171', fontSize: '35px'}}
          />
        <div className='option apt'>
          <div className='pic'>
            <div className='num'>
              ₩ {servicePriceCount}
            </div>
          </div>
        </div>
        <AddCircleOutlineOutlinedIcon onClick={servicePricePlus}
        style={{marginLeft:'25px', color:'#717171', fontSize: '35px'}}
        />
        </div>
      </div>
      

        <div className='btns'>
          <Link to={`/host/post/${props.param}/8description`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/host/post/${props.param}/10check`}>
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

        .options{
          animation: fadein 1s ease-in-out;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction:column;

          .dayprice{
            margin-top: 0px;

          }

          .price{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
          }
        

          .option{
            display:flex;
            width: 10vw;
            height: 90px;
            border: 1px solid #999;
            border-radius: 20px;
            font-size: 18px;
            padding-left: 30px;
            padding-right: 30px;
            margin-bottom: 12px; 

            .pic{
              display:flex;
              width: 15vw;
              height: 90px;
              justify-content:center;
              align-items:center;

              .num{
                font-size:40px;
                font-weight: 600;
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
      }
    `
  }}`
export default SetHosting9;
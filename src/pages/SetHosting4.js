import React from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png';
import startHosting from '../img/starthosting.png';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const SetHosting4 = () => {

  const [guestCount, setGuestCount] = React.useState(1);
  const [bedCount, setBedCount] = React.useState(1);
  const [bedroomCount, setBedroomCount] = React.useState(1);
  const [bathCount, setBathCount] = React.useState(1);


  const guestplus = () => {
    setGuestCount( guestCount+1 )
  }
  const guestminus = () => {
    if(guestCount > 1)
    setGuestCount( guestCount-1 )
  }

  const bedplus = () => {
    setBedCount( bedCount+1 )
  }
  const bedminus = () => {
    if(bedCount > 1)
    setBedCount( bedCount-1 )
  }

  const bedroomplus = () => {
    setBedroomCount( bedroomCount+1 )
  }
  const bedroomminus = () => {
    if(bedroomCount > 1)
    setBedroomCount( bedroomCount-1 )
  }

  const bathplus = () => {
    setBathCount( bathCount+1 )
  }
  const bathminus = () => {
    if(bathCount > 1)
    setBathCount( bathCount-1 )
  }


  const fourStepDone = () => {
    localStorage.setItem('maxGuest', JSON.stringify(guestCount))
    localStorage.setItem('bedCount', JSON.stringify(bedCount))
    localStorage.setItem('bedRoomCount', JSON.stringify(bedroomCount))
    localStorage.setItem('bathRoomCount', JSON.stringify(bathCount))
  }
  // const goToBack = () => {
  //   localStorage.removeItem('address')
  // }
  
  


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
            숙소에서 맞이할 최대 인원수를 알려주세요.
          </div>
        </div>
      </div>
      <div className='select'>
        <div className='options'>
          <div className='option apt'>
            <label htmlFor='apt'>
              <div className = 'title'>게스트</div>
              <div className='pic'>
                <RemoveCircleOutlineIcon onClick={guestminus}
                style={guestCount === 1 ? {marginRight:'15px', color:'#ddd', fontSize: '35px'}: {marginRight:'15px', color:'#717171', fontSize: '35px'}}
                />
                  <div className='num'>
                  {guestCount}
                  </div>
                <AddCircleOutlineOutlinedIcon onClick={guestplus}
                style={{marginLeft:'15px', color:'#717171', fontSize: '35px'}}
                />
              </div>
            </label>
          </div>
          <div className='option house'> 
            <label htmlFor='house'>
            <div className= 'title'>침대</div>
              <div className='pic'>
                <RemoveCircleOutlineIcon onClick={bedminus} 
                style={bedCount === 1 ? {marginRight:'15px', color:'#ddd', fontSize: '35px'}: {marginRight:'15px', color:'#717171', fontSize: '35px'}}
                />
                  <div className='num'>
                  {bedCount}
                  </div>
                <AddCircleOutlineOutlinedIcon onClick={bedplus} style={{marginLeft:'15px', color:'#717171', fontSize: '35px'}}/>
              </div>
            </label>
          </div>
          <div className='option hotel'> 
            <label htmlFor='hotel'>
            <div className= 'title'>침실</div>
              <div className='pic'>
                <RemoveCircleOutlineIcon onClick={bedroomminus}
                style={bedroomCount === 1 ? {marginRight:'15px', color:'#ddd', fontSize: '35px'}: {marginRight:'15px', color:'#717171', fontSize: '35px'}}
                />
                  <div className='num'>
                  {bedroomCount}
                  </div>
                <AddCircleOutlineOutlinedIcon onClick={bedroomplus} style={{marginLeft:'15px', color:'#717171', fontSize: '35px'}}/>
              </div>
            </label>
          </div>
          <div className='option hotel'> 
            <label htmlFor='hotel'>
            <div className= 'title'>욕실</div>
              <div className='pic'>
                <RemoveCircleOutlineIcon onClick={bathminus}
                style={bathCount === 1 ? {marginRight:'15px', color:'#ddd', fontSize: '35px'}: {marginRight:'15px', color:'#717171', fontSize: '35px'}}
                />
                  <div className='num'>
                  {bathCount}
                  </div>
                <AddCircleOutlineOutlinedIcon onClick={bathplus} style={{marginLeft:'15px', color:'#717171', fontSize: '35px'}}/>
              </div>
            </label>
          </div>
        </div>

        <div className='btns'>
          <Link to={`/host/post/3location`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/host/post/5facility`}>
            <button className='nextBtn' onClick={fourStepDone}>다음</button>
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
          animation: fadein 1s ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        

          .option{
            display:flex;
            width: 25vw;
            height: 80px;
            /* border: 2px solid #ddd; */
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
              
              color: #222;
            }
            .title{
              font-size: 26px;
              font-weight: 600;
            }
            .pic{
              
              .num{
                font-size: 20px;
                width: 20px;
                height: 20px;

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
export default SetHosting4;
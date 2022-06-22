import React from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'
import startHosting from '../img/starthosting.png'

import {useDispatch, useSelector} from 'react-redux'
import {getFacilitiesDB} from '../redux/modules/facilities'


const SetHosting5 = () => {
  const dispatch = useDispatch();
  const [option, setOption] = React.useState([]);
  React.useEffect(()=>{
    dispatch(getFacilitiesDB())
  },[])

  const facilities = useSelector(state => state.facilities.posts)
  // console.log(facilities&&facilities[0].type)


  const fiveStepDone = () => {
    localStorage.setItem('facilities', JSON.stringify(option))
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
            숙소 편의시설 정보를 추가해 주세요.
          </div>
        </div>
      </div>

      <div className='select'>
        <div className='contents'>
        {facilities&&facilities.map((v,i) => {
          return( 
            <div key={i}>
              <div className='title'>
                {v.type}
              </div>
              <div className='options' >
            {v.data.map((l,j)=>{
              return(
                  <div className='option' key={j}
                  style={option.includes(l.id) ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}
                  > 
                    <input type="checkbox" value={l.name} name='option' id={l.name}
                    style={{display:'none'}}
                    onChange={(e)=>{
                      if(e.target.checked){
                        setOption((pre)=>{
                          const newData = [...pre];
                          newData.push(l.id)
                          return newData
                        })
                        console.log(e.target.checked)
                      } else{
                        console.log(e.target.checked)
                        setOption((pre)=>{
                          const newData = pre.filter((v,i)=>{
                            return l.id !== v
                          })
                          return newData
                        })
                      }
                    }}
                    />
                    <label htmlFor={l.name}>
                      <div>{l.name}</div>
                    </label>
                  </div>
                
              )
            })}
             </div>
          </div>
          )
        })}
        
        </div>
        <div className='btns'>
          <Link to={`/host/post/4numbers`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/host/post/6pics`}>
            <button className='nextBtn' onClick={fiveStepDone}>다음</button>
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
          text-align: left;
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
        align-items:center;
        flex-direction:column;
        
        
        .contents{
          overflow-y: scroll;
          height:80%;
          padding: 0 30px;
          /* border-bottom: 1px solid #ccc; */
        }

        .title{
          animation: fadein 1s ease-in-out;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .options{
          animation: fadein 1s ease-in-out;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          margin-bottom: 70px;
          margin-top : 10px;
          margin-left: 2vw;
          margin-right: 5vw;
          
        }

        .option{
            display:flex;
            width: auto;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 18px;
            margin: 10px;

            label{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-grow:1;
              padding: 1em;
            }
          }

        .btns{
          width: 100%;
          border: 1px solid #eee;

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
export default SetHosting5;
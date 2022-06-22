import React from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import airbnblogo_ws from '../img/airbnblogo_ws.png'
import startHosting from '../img/starthosting.png'

import {useDispatch, useSelector} from 'react-redux'
import { getCategoriesDB } from "../redux/modules/categories";





const SetHosting = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(getCategoriesDB());
  }, []);

  const categories = useSelector((state) => state.categories.posts);
  console.log(categories)

  const [option, setOption] = React.useState([]);

  console.log(option)
  

  const oneStepDone=()=>{
    localStorage.setItem('category', JSON.stringify(option))
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
            호스팅할 숙소 유형을 알려주세요.
          </div>
        </div>
      </div>


      <div className='select'>
        <div className='contents'>
          {/* 카테고리 옵션들 */}
          <div className='options'>
          {/* 데이터 가져와서 맵돌리기 */}
          {categories && categories.map((l,i)=> {
                return(
            <div className='option' key={i}
            style={option.includes(l.id) ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}>
            <input type="checkbox" value={l.category} id={l.category} name="option"
            onChange={(e)=>{
              if (e.target.checked){
              setOption((pre)=>{
                const newData=[...pre];
                newData.push(l.id)
                return newData
              })
              console.log(e.target.checked)
               }else{
                console.log(e.target.checked)
                setOption((pre)=>{
                  const newData = pre.filter((v,i)=>{
                    return l.id !== v
                    })
                    return newData
                })
               }
              }}
            style={{display:'none'}}
            />
            <label htmlFor={categories[i].category}>
              <div>{categories[i].category}</div>
            </label>
            </div>
            )
          })}
          {/* ------------- 리스트 ----------------*/}
        </div>
      </div> 

        <Link to={`/host/post/2private`} >
          <button onClick={oneStepDone}>다음</button>
        </Link>
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
        flex-direction:column;

        .contents{
          overflow-y: scroll;
          height:80%;
          padding: 0 30px;
          border-bottom:1px solid #ddd;
          
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
          margin-top : 10px;
          margin-left: 2vw;
          margin-right: 5vw; 
          
          .option{
            display:flex;
            width: auto;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 18px;
            margin: 10px;
            

            label{
              display:flex;
              justify-content: center;
              justify-content: center;
              flex-grow:1;
              padding: 1em;
              

              div{
              display:flex;
              justify-content:center;
              align-items: center;
              
            }
            }
          }
        }


        button{
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
export default SetHosting;
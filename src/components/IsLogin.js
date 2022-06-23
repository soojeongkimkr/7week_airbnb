import React, {useState} from "react";

import styled, {css} from "styled-components";
import { getUserInfoDB } from "../redux/modules/user";

import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Cookies from "universal-cookie";
// import { setCookie, getCookie } from '../redux/modules/user';

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const IsLogin = () => {
  const dispatch = useDispatch();
  const [menuVisible, setmenuVisible] = useState(false);
  // const [cookies, removeCookie] = useCookies(['token']);
  // const cookies = new Cookies();

  React.useEffect(()=>{
    
    dispatch(getUserInfoDB())

  },[])

  const user_data = useSelector(state => state.user.user)
  // const pic = user_data.picture
  console.log(user_data)

  // 로그아웃
  const removeCookie = () => {
    const cookies = new Cookies();
    cookies.remove('token', { path: '/' });
    alert('로그아웃');
  }

  return (
    <IsLoginWrap>
    <nav className="header_right_wrap">
          <div className="header_right">
            <div className="header_right_host">
              <Link to ='/startHosting'><div className="host">호스트 모드로 전환</div></Link>
              <div className="language">
                <LanguageOutlinedIcon/>
              </div>
            </div>

            <div className="signin" tabIndex="-1">
              <div
              onClick={()=>{setmenuVisible(!menuVisible)}}
              className="signin_item">
                <MenuOutlinedIcon/>
                <div className="usePic"
                style={{width:'29px', height:'29px', borderRadius:'50%',
                
                }}>
                  <img src={user_data&&user_data.picture} alt="프로필"
                  style={{width:'29px', height:'29px', borderRadius:'50%',
                }}/>
                </div>
                {/* <AccountCircleIcon/> */}                
              </div>
              {menuVisible && 
              <div className="signinTxt">
                <div>
                  <div
                  style={{fontWeight: '600'}}
                  > 메세지 </div>
                  <div
                  style={{fontWeight: '600'}}
                  > 알림 </div>
                  <div
                  style={{fontWeight: '600'}}
                  > 여행 </div>
                  <div
                  style={{fontWeight: '600'}}
                  > 위시리스트 </div>
                  <div> 숙소 관리 </div>
                  <div> 체험 호스팅하기 </div>
                  <div> 호스트 추천하기 </div>
                  <div> 계정 </div>
                  <div> 도움말 </div>
                  <div onClick={removeCookie}> 로그아웃 </div>
                </div>
              </div>
            }
            </div>
          </div>
        </nav>
        </IsLoginWrap>
  );
}
const IsLoginWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
      position: absolute;
      width: 350px;
      height: 80px;
      right: 0;

      /* 우측 메뉴 */
      /* .header_right_wrap {
        
      } */
      .usePic{
       
      }

      .header_right_wrap .header_right {
        position: absolute;
        display: flex;
        height: 42px;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }

      .header_right_wrap .header_right .header_right_host {
        display: flex;
        margin-top: 8px;
        align-items:center;
      }

      .header_right_wrap .header_right .header_right_host .host{
        font-size: 14px;
        font-weight: 600;
        padding: 11px 20px;
        border-radius: 100px;
        color: #222;
      }
      /* .headerWrap .header_right_wrap .header_right .header_right_host .host a.up {
          font-size: 14px;
          font-weight: bold;
          padding: 11px 20px;
          border-radius: 100px;
          color: #222;
      } */
      .header_right_wrap .header_right .header_right_host .host:hover {
          background-color: rgba(247, 247, 247);
      }

      .header_right_wrap .header_right .header_right_host .language {
          margin-right: 20px;
          color: #222;
          width: 32px;
          height: 32px;
          border-radius:100px;
          cursor:pointer;
      }
      .header_right_wrap .header_right .header_right_host .language :nth-child(1) {
          font-size: 20px;
          margin-top: 6px;
      }

      .header_right_wrap .header_right .header_right_host .language:hover {
        background-color: rgba(247, 247, 247);
      }

      /* .header_right_wrap .header_right .header_right_host .language {
          position: absolute;
          color: #222;
          top: 10px;
          left: 10px;
          font-size: 20px;
      } */

      .header_right_wrap .header_right .signin {
          display: flex;
          width: 82px;
          height: 42px;
          border: 1px solid rgba(224,224,224);
          border-radius: 50px;
          box-sizing: border-box;
          
      }
      .header_right_wrap .header_right .signin:hover{
        box-shadow: 2px 3px 3px rgba(65, 10, 63, 0.1);
      }

      .header_right_wrap .header_right .signin .signin_item {
          display: flex;
          justify-content:center;
          align-items:center;
          margin-left: 10px;
          cursor: pointer;
      }
      

      .header_right_wrap .header_right .signin_item :nth-child(2) {
          color: #696969;
          font-size: 35px;
          margin-left: 7px;
      }

      /* signin 옵션창 */
      .header_right_wrap .header_right .signinTxt {
          position: absolute;
          display: flex;
          flex-direction: column;
          text-align:left;
          width:200px;
          background-color: #fff;
          top:60px;
          right:0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0px 0px 20px rgba(65, 3, 63, 0.15);
      }
      .header_right_wrap .header_right .signinTxt>div{
          margin-left:20px;
          margin-top:30px;
          
      }
      .header_right_wrap .header_right .signinTxt div{
          margin-bottom:15px;
          cursor:pointer;
      }
      .header_right_wrap .header_right .signinTxt div:nth-of-type(4):after,
      .header_right_wrap .header_right .signinTxt div:nth-of-type(8):after{
          content:"";
          width:250px;
          height:1px;
          margin-top:15px;
          margin-left: -20px;
          background-color: #cccccc;
          opacity: .5;
          display:block;
      }

      .header_right_wrap .header_right .signinTxt div{
          font-size: 14px;
          color:#222;
      }


      

      ${device.tablet}{
        
      }
    `
  }}
`;

export default IsLogin;
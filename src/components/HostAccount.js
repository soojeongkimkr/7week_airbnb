import React, {useState} from "react";

import styled, {css} from "styled-components";


import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Account = () => {
  const [mode, setMode] = useState();
  const [visible, setVisible] = useState(false);
  const [alarmModalVisible, setAlarmModalVisible] = useState(false);
  

  return (
    <AccountWrap> 
      
          <div className="header_right">
              <div className="alarm"  onClick={()=>{setAlarmModalVisible(!alarmModalVisible); setVisible(false)}}>
                <NotificationsNoneIcon/>
              </div>
              <div className="profile_circle_wrap" onClick={()=>{setVisible(!visible); setAlarmModalVisible(false)}}>
                <div className="profile_circle"></div>
              </div>
              {visible && 
            <div className="signin" tabIndex="-1">
              <div className="signinTxt">
                  <div
                  style={{fontWeight: '600'}}
                  > 프로필 </div>
                  <div
                  style={{fontWeight: '600'}}
                  > 계정 </div>
                  <div
                  style={{fontWeight: '600'}}
                  > 도움 요청 </div>
                  <div> 언어 및 번역 </div>
                  <div> ₩ KRW </div>
                  <div> 호스트 추천하기 </div>
                  <div> 체험 추천하기 </div>
                  <div> 체험 호스팅하기 </div>
                  <div> 게스트 모드로 전환 </div>
                  <div> 로그아웃 </div>
              </div>
            </div>
          }
          </div>

          <div className="header_right">
            {alarmModalVisible && 
            <div className="alarm_modal">
              <div>알림</div>
              <div className="notice">
                <NotificationsNoneIcon/>
                <div>현재 알림 없음</div>
                <div className="notice_detail">(현재는) 알림이 없습니다. <br/> 새로운 소식이 있으면 알려드리겠습니다.</div>
              </div>
            </div>
          }
          </div>
    </AccountWrap>

  )


}
const AccountWrap = styled.div`
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

      .header_right {
        position: absolute;
        display: flex;
        height: 42px;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }


      .header_right .host{
        font-size: 14px;
        font-weight: bold;
        padding: 11px 20px;
        border-radius: 100px;
        color: #222;
      }

      .header_right .host:hover {
          background-color: rgba(247, 247, 247);
      }

      .header_right .alarm {
          margin-right: 20px;
          padding:4px;
          color: #717171;
          width: 32px;
          height: 32px;
          border-radius:100px;
          border:1px solid #ccc;
          cursor:pointer;
      }
      .header_right .alarm :nth-child(1) {
          font-size: 20px;
          margin-top: 6px;
          color:#222;
      }
      
      .header_right .alarm:hover {
        background-color: rgba(247, 247, 247);
      }


      .header_right .profile_circle_wrap{
          width: 42px;
          height: 42px;
          border: 1px solid rgba(224,224,224);
          border-radius: 50px;
          box-sizing: border-box;
          margin-left: 10px;
      }

      .header_right .profile_circle {
          margin: 4px auto;
          height: 32px;
          width: 32px;
          border-radius: 80px;
          border:1px solid #ccc;
          box-sizing: border-box;
          background: #fff;
          cursor: pointer;
      }



      /* signin 옵션창 */
      .header_right .signinTxt {
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

      .header_right .alarm_modal{
          position: absolute;
          display: flex;
          flex-direction: column;
          text-align:left;
          width:400px;
          background-color: #fff;
          top:60px;
          right:0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0px 0px 20px rgba(65, 3, 63, 0.15);
      }
      .header_right .signinTxt>div{
          margin-left:20px;
          margin-top:25px;
          font-size: 14px;
          color:#222;
      }
      .header_right .alarm_modal>div:nth-of-type(1){
          margin-left: 20px;
          margin-top: 25px;
          font-size: 14px;
          color:#222;
          margin-bottom: 100px;
      }
      .header_right .notice{
          font-size: 14px;
          color:#222;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          margin-bottom:120px;
      }
      .header_right .notice .notice_detail{
        margin-top:30px;
        color:#717171;
        text-align:center;
      }
      
      .header_right .signinTxt div:nth-of-type(3):after,
      .header_right .signinTxt div:nth-of-type(5):after{
          content:"";
          width:250px;
          height:1px;
          margin-top:25px;
          margin-left: -20px;
          background-color: #cccccc;
          opacity: .5;
          display:block;
      }
      .header_right .signinTxt :nth-child(10){
          margin-bottom:25px;
      }

      ${device.tablet}{
        
      }

  
    `
  }}
`
export default Account;
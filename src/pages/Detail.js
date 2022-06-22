import React from "react";
import {useDispatch} from 'react-redux'

import detail from '../css/detail.css'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import Header from '../components/Header';
import Footer from "../components/Footer";

import {getPostDB} from '../redux/modules/post'





const Detail = () => {
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(getPostDB());
  },[])

  
  return (
    <>
    <Header/>
      <div className = "inner">
        <div className="title">
          <div className="name">
          숙소 이름
          </div>
          <div className="share">
            <div><IosShareOutlinedIcon style={{display:'flex', fontSize:"16px", marginRight:'5px'}}/></div>
            <div><u>공유하기</u></div>
          </div>
          <div className="save">
            <div><FavoriteBorderRoundedIcon style={{display:'flex', fontSize:"16px", marginRight:'5px'}}/></div>
            <div><u>저장</u></div>
          </div>
        </div>

        {/* 숙소 이미지 갤러리 */}
        <div className="imgs">
          <div className="img1">
            
          </div>
          <div className="img2" >
            
          </div>
          <div className="img3">
            
          </div>
          <div className="img4">
            
          </div>
          <div className="img5">
            
          </div>
        </div>


        <div className="wraper">
          <div className="txt">
            <div className="numberWrap">
              <div className="introTitleWrap">
                <div className="introTitle">
                  Dorothy님이 호스팅하는 돔하우스
                </div>
                <div className="nums">
                  최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개  
                </div>
              </div>
              <div className="profilePic">
                {/* 프로필사진 들어가는 곳 */}
              </div>
            </div>

            <hr/>

            {/* 에어커버 */}
            <div className="airCover">
              <img src='' alt=''/>
              <div className="coverTxt">모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.</div>
              <div className="more"><u>더 알아보기</u></div>
            </div>

            <hr/>

            {/* 숙소 설명 */}
            <div className="detailTxt">
            Adaaran Club Rannalhi is featured among the best hotels in Maldives and sits exclusively at the tip of the South Male atoll within the exotic collection of islands known as the Maldives. Its unique location offers access to pristine beaches, excellent scuba diving opportunities and a relaxed environment with easy access to the capital city of Male.

            </div>

            <hr/>

            {/* 숙소에 있는 방 갯수 */}
            <div className="rooms">
              <div className="roomsTitle">
                숙박 장소
              </div>
              <div className="card">
                <div className="icon">
                  
                </div>
                <div className="roomType">
                  침실 1개
                </div>
              </div>
            </div>

            <hr/>

            {/* 숙소 편의시설 */}
            <div className="facility">
              <div className="facilityTitle">
                숙소 편의 시설
              </div>
              <div className="facilityLists">
                <div>무선 인터넷</div>
                <div>수영장</div>
                <div>TV</div>
                <div>에어컨</div>
              </div>
            </div>

            <hr/>

            {/* 체크인 아웃 달력 */}
            <div className="calendar">
              <div className="calendarTitle">
                체크인 날짜를 선택해주세요.
              </div>

              {/* 달력 위치 */}
              
              <div className="resetDay">
                <u>날짜 지우기</u>
              </div>
            </div>
          </div>



        

          {/* 예약하기 창 */}
          <div className="reservation">
            <div className="wrap">
              <div className="perdayprice">
                <div>₩</div>
                <div>/박</div>
              </div>
              <div className="select">
                <div className="checkinout">
                  <div className="checkin">
                    <div>체크인</div>
                    <div>날짜</div>
                  </div>
                  <div className="checkout">
                    <div>체크아웃</div>
                    <div>날짜</div>
                  </div>
                </div>
                <div className="peopleNum">
                  <div>
                    <div>인원</div>
                    <div>게스트 1명</div>
                  </div>
                  <div className="numIcon">
                    <KeyboardArrowDownIcon/>
                  </div>
                </div>
                
                <div className="peopleNumCount">
                  {/* 명수 선택 자리 */}
                </div>
              </div>

              <div className="selectDone">
                <div>예약하기</div>
              </div>

              <div className="doneNotice">예약 확정 전에는 요금이 청구되지 않습니다.</div>

              <div className="detailprice">
                <div className="defaultprice">
                  <div><u>₩</u></div>
                  <div>₩</div>
                </div>  
                <div className="serviceprice">
                  <div><u>서비스 수수료</u></div>
                  <div>₩</div>
                </div>  
                <hr style={{width:'100%', opacity:'0.3'}}/><br/>
                <div className="totalprice">
                  <div><b>총 합계</b></div>
                  <div><b>₩</b></div>
                </div>  
              </div>

            </div>
          </div>
        </div>
        

        <hr/>

      </div>

      
    <Footer />
    </>
  );
};

export default Detail;
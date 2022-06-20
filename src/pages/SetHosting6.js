import React, {useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import airbnblogo_ws from '../img/airbnblogo_ws.png'


const SetHosting6 = (props) => {
  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);
  const fileInput3 = useRef(null);
  const fileInput4 = useRef(null);
  const fileInput5 = useRef(null);
  const [attachment1, setAttachment1] = useState("");
  const [attachment2, setAttachment2] = useState("");
  const [attachment3, setAttachment3] = useState("");
  const [attachment4, setAttachment4] = useState("");
  const [attachment5, setAttachment5] = useState("");
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();
  const [file5, setFile5] = useState();
  
  const [option, setOption] = React.useState('apt');


  // 이미지 미리보기 함수
  const saveImage1 = (e) => {
    const reader = new FileReader();
    const theFile = fileInput1.current.files[0];
    console.log(theFile);
    setFile1(theFile)
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
        const {
            currentTarget: { result },
        } = finishiedEvent;
        setAttachment1(result);
    };
  };
  const saveImage2 = (e) => {
    const reader = new FileReader();
    const theFile = fileInput2.current.files[0];
    console.log(theFile);
    setFile2(theFile)
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
        const {
            currentTarget: { result },
        } = finishiedEvent;
        setAttachment2(result);
    };
  };
  const saveImage3 = (e) => {
    const reader = new FileReader();
    const theFile = fileInput3.current.files[0];
    console.log(theFile);
    setFile3(theFile)
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
        const {
            currentTarget: { result },
        } = finishiedEvent;
        setAttachment3(result);
    };
  };
  const saveImage4 = (e) => {
    const reader = new FileReader();
    const theFile = fileInput4.current.files[0];
    console.log(theFile);
    setFile4(theFile)
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
        const {
            currentTarget: { result },
        } = finishiedEvent;
        setAttachment4(result);
    };
  };
  const saveImage5 = (e) => {
    const reader = new FileReader();
    const theFile = fileInput5.current.files[0];
    console.log(theFile);
    setFile5(theFile)
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
        const {
            currentTarget: { result },
        } = finishiedEvent;
        setAttachment5(result);
    };
  };


  return (
    <SetHostingWrap>
      <div className='movie'>
        <video width="120%"  autoPlay="autoplay" muted="muted" loop={true}>
          <source src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4" type="video/mp4"/>
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
            이제 숙소 사진을 올릴 차례입니다.
          </div>
        </div>
      </div>
      <div className='select'>
        <div className='title'>
          어때요? 사진이 마음에 드시나요?
        </div>
        <div className='options'>
          {/* <div className='option apt'
          style={option === 'apt' ? {background:'#f7f7f7', border:'2px solid #222' }: {background:'#fff'}}>
            <input type="radio" value="apt" id="apt" name="option"
            onChange={isChecked}
            style={{display:'none'}}
            />
            <label htmlFor='apt'>
              
              <div className='pic'>
              
              </div>
              <div>아파트</div>
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
              
              <div className='pic'>

              </div>
              <div>주택</div>
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
              
              <div className='pic'>

              </div>
              <div>호텔</div>
            </label>
          </div> */}

        {/* 데이터 가져와서 맵돌리기 */}
        {/* 1번째 사진 */}
        <div className='option hotel'> 

          <label style={{position:'relative'}}>
          <div style=
          {attachment1 ? {
          display:'none'
          }
          :
          {
            position:'absolute',
            margin:'0 auto',
            width: '33vw',
            height: '30vh'
            
          }}>
          <AddPhotoAlternateIcon style={{ cursor: "pointer", color:'#222', marginTop:'14vh' }} />
          <span style={{color:'#222', marginLeft:'0.5em',cursor: "pointer"}}></span>
          <form style={{ display: "none" }}>
            <label htmlFor="file">
          <input
            ref={fileInput1}
            type="file"
            id="file-input"
            name="file"
            accept="image/*"
            onChange={saveImage1}
            style={{ display: "none" }}
            multiple="multiple"
          ></input>
          </label>
          </form>
          </div>

          {/* 이미지 미리보기 */}
          {attachment1 ? 
          <div>
            <img src ={attachment1}
              style={{
                width: "100%",
                height: "100%"
              }} alt=""/>
            </div>
          : 
            <div
              style={{
                width: "100%",
                height: "100%",
                display: 'none',
                // margin: "auto",
              }}
            ></div>
          }
          </label> 
        </div>


        {/* 2번째 사진 */}
        <div className='option hotel'> 

        <label style={{position:'relative'}}>
          <div style=
          {attachment2 ? {
          display:'none'
          }
          :
          {
            position:'absolute',
            margin:'0 auto',
            width: '16vw',
            height: '14vh'
            
          }}>
        <AddPhotoAlternateIcon style={{ cursor: "pointer", color:'#222', marginTop:'5vh' }} />
        <span style={{color:'#222', marginLeft:'0.5em',cursor: "pointer"}}></span>
        <form style={{ display: "none" }}>
          <label htmlFor="file">
        <input
          ref={fileInput2}
          type="file"
          id="file-input"
          name="file"
          accept="image/*"
          onChange={saveImage2}
          style={{ display: "none" }}
          multiple="multiple"
        ></input>
        </label>
        </form>
        </div>

        {/* 이미지 미리보기 */}
        {attachment2 ? 
        <div>
          <img src ={attachment2}
            style={{
              width: "100%",
              height: "100%"
            }} alt=""/>
          </div>
        : 
          <div
            style={{
              width: "100%",
              height: "100%",
              display: 'none',
              // margin: "auto",
            }}
          ></div>
        }
        </label> 
        </div>

        {/* 3번째 사진 */}
        <div className='option hotel'> 

        <label style={{position:'relative'}}>
          <div style=
          {attachment2 ? {
          display:'none'
          }
          :
          {
            position:'absolute',
            margin:'0 auto',
            width: '16vw',
            height: '14vh'
            
          }}>
        <AddPhotoAlternateIcon style={{ cursor: "pointer", color:'#222', marginTop:'5vh' }} />
        <span style={{color:'#222', marginLeft:'0.5em',cursor: "pointer"}}></span>
        <form style={{ display: "none" }}>
          <label htmlFor="file">
        <input
          ref={fileInput3}
          type="file"
          id="file-input"
          name="file"
          accept="image/*"
          onChange={saveImage3}
          style={{ display: "none" }}
          multiple="multiple"
        ></input>
        </label>
        </form>
        </div>

        {/* 이미지 미리보기 */}
        {attachment3 ? 
        <div>
          <img src ={attachment3}
            style={{
              width: "100%",
              height: "100%"
            }} alt=""/>
          </div>
         : 
          <div
            style={{
              width: "100%",
              height: "100%",
              display: 'none',
              // margin: "auto",
            }}
          ></div>
        }
        </label> 
        </div>
          

          
        {/* 4번째 사진 */}
        <div className='option hotel'> 

        <label style={{position:'relative'}}>
          <div style=
          {attachment2 ? {
          display:'none'
          }
          :
          {
            position:'absolute',
            margin:'0 auto',
            width: '16vw',
            height: '14vh'
            
          }}>
        <AddPhotoAlternateIcon style={{ cursor: "pointer", color:'#222', marginTop:'5vh' }} />
        <span style={{color:'#222', marginLeft:'0.5em',cursor: "pointer"}}></span>
        <form style={{ display: "none" }}>
          <label htmlFor="file">
        <input
          ref={fileInput4}
          type="file"
          id="file-input"
          name="file"
          accept="image/*"
          onChange={saveImage4}
          style={{ display: "none" }}
          multiple="multiple"
        ></input>
        </label>
        </form>
        </div>

        {/* 이미지 미리보기 */}
        {attachment4 ? 
        <div>
          <img src ={attachment4}
            style={{
              width: "100%",
              height: "100%"
            }} alt=""/>
          </div>
         : 
          <div
            style={{
              width: "100%",
              height: "100%",
              display: 'none',
              // margin: "auto",
            }}
          ></div>
        }
        </label> 
        </div>
          

          {/* 5번째 사진 */}
          <div className='option hotel'> 

          <label style={{position:'relative'}}>
          <div style=
          {attachment2 ? {
          display:'none'
          }
          :
          {
            position:'absolute',
            margin:'0 auto',
            width: '16vw',
            height: '14vh'
            
          }}>
          <AddPhotoAlternateIcon style={{ cursor: "pointer", color:'#222', marginTop:'5vh' }} />
          <span style={{color:'#222', marginLeft:'0.5em',cursor: "pointer"}}></span>
          <form style={{ display: "none" }}>
            <label htmlFor="file">
          <input
            ref={fileInput5}
            type="file"
            id="file-input"
            name="file"
            accept="image/*"
            onChange={saveImage5}
            style={{ display: "none" }}
            multiple="multiple"
          ></input>
          </label>
          </form>
          </div>

          {/* 이미지 미리보기 */}
          {attachment5 ? 
          <div>
            <img src ={attachment5}
              style={{
                width: "100%",
                height: "100%"
              }} alt=""/>
            </div>
          : 
            <div
              style={{
                width: "100%",
                height: "100%",
                display: 'none',
                // margin: "auto",
              }}
            ></div>
          }
          </label> 
          </div>
          
        </div>

            {/* 버튼 */}
        <div className='btns'>
          <Link to={`/host/post/${props.param}/5facility`}>
            <button className='preBtn'>이전</button>
          </Link>
          <Link to={`/host/post/${props.param}/7title`}>
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
    /* position: fixed; */
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
          position:absolute;
          margin-top: 3vh;
          margin-left: 2vw;
          cursor: pointer;
        }
        .content{
          display: flex;
          flex-direction: column;

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
        align-items:center;
        flex-direction:column;

        .title{
          animation: fadein 1s ease-in-out;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
          margin-top: -40px;
        }

        .options{
          animation: fadein 1s ease-in-out;
          display:grid;
          grid-template-columns: 1fr 1fr;
          /* align-items:stretch; */
          /* display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; */

          .option:nth-child(1){
            grid-column-start: 1;
	          grid-column-end: 3;
	          grid-row-start: 1;
	          grid-row-end: 2;
            width: 33vw;
            height: 30vh;
          }
        

          .option{
            width: 16vw;
            height: 14vh;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 18px;
            margin: 10px;
            margin-bottom: 12px; 
            box-sizing:border-box;
            overflow:hidden;

            label{
              /* display: flex;
              justify-content: center;
              margin-top:3.5vh; */
              /* flex-direction:column; */
              /* justify-content: space-between; */
              /* flex-grow:1; */
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
export default SetHosting6;
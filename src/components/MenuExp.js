import React from "react";

import styled, {css} from "styled-components";

const MenuExp = () => {

  return (
    <MenuExpWrap >
    <div tabIndex="-1" className="item__contents">
      <div className="contents__menu">
          <div className="contents">
              <div className="first">여행지</div><br/>
              <input type="text" placeholder="여행지 검색"/>
          </div>
          <div className="contents">
              <div>날짜</div><br/>
              <div>원하는 날짜를 입력하세요.</div>
          </div>
          <div className="contents">
              <div>여행자</div><br/>
              <div>여행자 추가</div>
          </div>
        <div>
        </div>
        <div className="search_icon">
          {/* <div><span className="material-icons">search</span></div> */}
          <div className="searchTxt">검색</div>
        </div>
        <div className="startSearchTxt"></div>
      </div>
    </div>
    </MenuExpWrap>
  )
}


const MenuExpWrap = styled.div`
  ${({ theme }) => {
    const { fontSizes, device, colors } = theme;
    return css`
      position: absolute;
      top: 80px;
      width: 850px;
      height: 65px;
      transition: .2s;
      border-radius: 200px; 
      border:1px solid rgba(224,224,224);
      box-sizing: border-box;
      box-shadow: 0px 5px 10px rgba(65, 3, 63, 0.15);
      transition: width .2s;
      background-color: rgba(247,247,247);
      cursor: pointer;

      /* .menu .item .item__contents .contents__menu div{
        float:left;
      } */
      /* .menu .item .item__contents .contents__menu .search_icon .searchTxt{
        color:#fff;
      } */
      /* .menu .item .item__contents .contents__menu .startSearchTxt{
          display:none;
          color:#222;
          font-size:14px;
          font-weight: bold;
          position: absolute;
          left:25px;
          cursor: pointer;
      } */
      
      .item__contents .contents__menu{
        display:flex;
        align-items:center;
      }

      
      /* .menu .item .item__contents .contents__menu>.on {
          position: relative;
          flex-grow: 1;
          border-radius: 200px;
          box-sizing: border-box;
          box-shadow: 0px 0px 20px rgba(53, 50, 53, 0.3);
      } */

      .item__contents .contents__menu .contents {
          box-sizing: border-box;
          position:relative;
          border-radius: 200px;
          height: 100%;
          width: 100%;
          padding-left: 25px;
          padding-top:15px;
          padding-bottom:12px;
      }
      .item__contents .contents__menu .contents>.first{
        margin-left:2px;
      }
      .item__contents .contents__menu .contents>div, input{
        float:left;
      }
      input{
        
      }
      /* 여행지 검색 */
      .item__contents .contents__menu .contents:nth-of-type(1) {
          padding-left: 35px;
          border-radius: 200px;
          /* box-sizing: border-box; */
      }
      /* 여행자 검색 */
      .item__contents .contents__menu .contents:nth-of-type(3) {
          padding-left: 25px;
          padding-right:100px;
          border-radius: 200px;
      }
      
      
      .item__contents .contents__menu .contents::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          width: 1px;
          height: 25px;
          background-color: rgba(0, 0, 0, .1);
      }
      .item__contents .contents__menu .contents:nth-of-type(3)::before {
          display:none;
      }
      .item__contents .contents__menu .contents:hover {
          background-color: rgba(235, 235, 235);
          cursor: pointer;
      }

      .item__contents .contents__menu .search_icon {
          position: absolute;
          display:flex;
          justify-content: center;
          align-items: center;
          right: 10px;
          width: 90px;
          height: 47px;
          background-color: #ff385c;
          border-radius: 50px;
          cursor: pointer;
      }


      .item__contents .contents__menu .search_icon:hover {
          background-color: #f0264b;
      }

      /* .menu .item .item__contents .contents__menu .search_icon.on{
          position: relative;
          width: 90px;
          height: 47px;
          right: 140px;
          background-color: #f0264b;
          border-radius: 50px;
          cursor: pointer;
      } */

      /* .item__contents .contents__menu .search_icon.on:hover {
          background-color: #f0264b;
      } */

      .item__contents .contents__menu .search_icon{
          display: flex;
          justify-content: center;
          align-items: center;
          
      }
      /* .item__contents .contents__menu .search_icon .material-icons {
          color: #fff;
          font-size: 22px;
          /* top: 13px;
          left: 13px; 
      }*/
      .item__contents .contents__menu .search_icon .searchTxt{
          color:#fff;
          display:block;
          font-weight: bold;
          margin-top: 2px;
      }

      .item__contents .contents__menu .contents input {
          height: inherit;
          outline: none;
          background-color: transparent;
          border: 0px solid transparent;
          color: #222;
          width: 125px;
      }

      .item__contents .contents__menu .contents>div:nth-of-type(1) {
          font-size: 12px;
          font-weight: bold;
      }

      .item__contents .contents__menu .contents>div:nth-of-type(2) {
          font-size: 14px;
          color: #929292
      }

      ${device.tablet}{
              
      }

    `
  }}
`




export default MenuExp;
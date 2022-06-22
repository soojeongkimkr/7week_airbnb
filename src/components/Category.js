import React from "react";
import styled from 'styled-components';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {useDispatch, useSelector} from 'react-redux'
import {getCategoriesDB} from '../redux/modules/categories'
import {getPostListDB} from '../redux/modules/post'

const Category = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "black", borderRadius: "50%", opacity: "1" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "black", borderRadius: "50%", opacity: "1" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 14,
    slidesToScroll: 9,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  const dispatch = useDispatch();
  const [option, setOption] = React.useState();

  React.useEffect(()=>{
    dispatch(getCategoriesDB())
  },[]);

  const categories = useSelector(state => state.categories.posts)
  // console.log(categories)

  // 카테고리별 목록 불러오기
  const category = useSelector(state => state.post.posts)


  return (
    <Wrap>
      <Slider {...settings}>
        {categories&&categories.map((v,i)=>{
          return(
            <div className="categories" key={i} onClick={()=>{
                setOption(i)
                dispatch(getPostListDB(i))
                }
              } >
              <div>{v.category}</div>
            </div>
          )
        })}
        
      </Slider>

      <div className="cardWrap">
        {category&&category.map((v,i)=>{
          return(
            <div className="content">
            <div className="card" style={{backgroundImage:`url(${v.mainImage})`, backgroundPosition:'center'}}>
            </div>
            <div className="txt">
              <div className="titleWrap">
                <div className="region">
                  {v.title}
                </div>
                <div className="new">
                  NEW
                </div>
                </div>
                <div className="priceWrap">
                  <div className="price">
                    ₩{v.price} /박
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        

        
        
      </div>
      {/* <div className="content">
          <div className="card">
          </div>
          <div className="txt">
            <div className="titleWrap">
              <div className="region">
                제주도
              </div>
              <div className="new">
                NEW
              </div>
            </div>
            <div className="priceWrap">
              <div className="price">
                ₩120000 /박
              </div>
            </div>
          </div>
        </div> */}
    </Wrap>
  );
};

const Wrap = styled.div`
 margin-top:20px;

 .categories{
   font-size: 14px;
   
   div{
     width: auto;
     height:30px;
     text-align:center;
     display:flex;
     justify-content:center;
     align-items:center;
   }
 }

 .cardWrap{
   margin-top: 30px;
   display: flex;
   justify-content:space-between;
   flex-wrap: wrap;
 }
 .content{
   width: 19%;
   display:flex;
   flex-direction:column;
   margin-right:10px;
 }
 .card{
   background:blue;
   height: 200px;
   border-radius: 20px;
   margin: 0 auto;
 }
 .txt{
   width: 90%;
   height: 100px;
   border-radius: 20px;
   margin: 0 auto;
 }
 .titleWrap{
   display:flex;
   justify-content:space-between;
   margin-top: 10px;
 }
 .priceWrap{
   text-align:left;
   margin-top: 5px;
 }
`

export default Category;
import React from "react";
import styled, { css } from 'styled-components';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Category = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%", opacity: "1" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
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

  return (
    <Wrap className="categorySlider">
      <Slider {...settings}>
        <p>섬</p>
        <p>국립공원</p>
        <p>통나무집</p>
        <p>기상천외한 숙소</p>
        <p>해변 근처</p>
        <p>초소형 주택</p>
        <p>디자인</p>
        <p>캠핑장</p>
        <p>A자형 주택</p>
        <p>호숫가</p>
        <p>북극</p>
        <p>멋진 수영장</p>
        <p>동굴</p>
        <p>서핑</p>
        <p>최고의 전망</p>
        <p>복토 주택</p>
        <p>열대 지역</p>
        <p>셰어하우스</p>
        <p>Luxe</p>
      </Slider>
    </Wrap>
  );
};

const Wrap = styled.div`

`

export default Category;
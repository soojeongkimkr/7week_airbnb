import React from "react";
import Login from "../components/Login";
import Category from "../components/Category";
import Card from "../components/Card";

import styled, { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const post_list = useSelector((state) => state.post.list);

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrap>
      {/* <React.Fragment>
        <button onClick={openModal}>로그인</button>
        <Login open={modalOpen} close={closeModal} header="로그인 또는 회원 가입">
        </Login>
      </React.Fragment> */}
      <Category />

      <div className="cardBox">
        {post_list.map((list, idx) => {
          return (
            <Card key={idx} data={list} />
          )
        })}
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
padding:80px 40px 0;

@media screen and (max-width: 1130px) {
  padding:80px 10px 0;
}

@media screen and (max-width: 950px) {
  padding:80px 0 0;
}
`

export default Main;
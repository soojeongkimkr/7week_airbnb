import React from "react";
import Signup from "./Signup";

import { useState } from 'react';

const Main = () => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>로그인</button>
      <Signup open={modalOpen} close={closeModal} header="로그인 또는 회원 가입">
      </Signup>
    </React.Fragment>
  );
};

export default Main;
import React from "react";
import Login from "../components/Login";

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
    <div>
      {/* <React.Fragment>
        <button onClick={openModal}>로그인</button>
        <Login open={modalOpen} close={closeModal} header="로그인 또는 회원 가입">
        </Login>
      </React.Fragment> */}
    </div>
  );
};

export default Main;
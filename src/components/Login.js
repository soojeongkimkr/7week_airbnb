import React from "react";
import styled, { css } from 'styled-components';

import '../modal.css';

const Login = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
            {header}
          </header>
          <main>
            {props.children}
            <p>에어비앤비에 오신 것을 환영합니다.</p>
            <Form>
              <Input type="text" required placeholder="ID" />
              <Input type="password" required placeholder="비밀번호" />
              <InputSubmit type="submit" value="계속" />
            </Form>
            <button>회원 가입</button>
          </main>
          {/* <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer> */}
        </section>
      ) : null}
    </div>
  );
};

const Form = styled.form`

`

const Input = styled.input`
display:block;
margin:0 auto;
`

const InputSubmit = styled.input`
display:block;
margin:0 auto;
cursor:pointer;
`

export default Login;
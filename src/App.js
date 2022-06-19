import React from "react";
import './App.css';

//스타일
import styled, { css, ThemeProvider } from 'styled-components';
import theme from './theme';

import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import StartHosting from './pages/StartHosting'
import HostPage from "./pages/HostPage";
import SetHosting from "./pages/SetHosting"

function App() {
  

  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path='/startHosting' element={<StartHosting/>}></Route>
          <Route path="/host" element={<HostPage/>}></Route>
          <Route path="/setHosting" element={<SetHosting/>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}


export default App;

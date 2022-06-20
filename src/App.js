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
import SetHosting2 from "./pages/SetHosting2"
import SetHosting3 from "./pages/SetHosting3"
import SetHosting4 from "./pages/SetHosting4"
import SetHosting5 from "./pages/SetHosting5"
import SetHosting6 from "./pages/SetHosting6"
import SetHosting7 from "./pages/SetHosting7"
import SetHosting8 from "./pages/SetHosting8"
import SetHosting9 from "./pages/SetHosting9"
import SetHosting10 from "./pages/SetHosting10"

function App() {
  

  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/hotel/:id" element={<Detail/>}></Route>
          <Route path='/startHosting' element={<StartHosting/>}></Route>
          <Route path="/host" element={<HostPage/>}></Route>
          <Route path="/host/post/:id/1property" element={<SetHosting/>}></Route>
          <Route path="/host/post/:id/2private" element={<SetHosting2/>}></Route>
          <Route path="/host/post/:id/3location" element={<SetHosting3/>}></Route>
          <Route path="/host/post/:id/4numbers" element={<SetHosting4/>}></Route>
          <Route path="/host/post/:id/5facility" element={<SetHosting5/>}></Route>
          <Route path="/host/post/:id/6pics" element={<SetHosting6/>}></Route>
          <Route path="/host/post/:id/7title" element={<SetHosting7/>}></Route>
          <Route path="/host/post/:id/8description" element={<SetHosting8/>}></Route>
          <Route path="/host/post/:id/9price" element={<SetHosting9/>}></Route>
          <Route path="/host/post/:id/10check" element={<SetHosting10/>}></Route>
        
        </Routes>
      </div>
    </ThemeProvider>
  );
}


export default App;

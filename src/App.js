import React from "react";
import './App.css';

//스타일
import styled, { ThemeProvider } from "styled-components";
import theme from './theme';

import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Detail from "./pages/Detail";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}


export default App;

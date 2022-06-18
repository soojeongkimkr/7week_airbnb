import React from "react";
import './App.css';
import theme from './css/theme';
import styled, { css } from 'styled-components';

import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Main from "./pages/Main";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
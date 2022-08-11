import React from "react";
import Main from "./components/Main"
import DasomPost from "./pages/DasomPost"
import DasomUpdate from "./pages/DasomUpdate"
import { Routes, Route, Link, Redirect } from 'react-router-dom'

import Detail from '../src/component/Detail/Detail'


import './App.css';


const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/detail/:id" element={<div style={{
          display: 'flex'
        }}><Detail /></div>} />

        <Route path="/post" element={<DasomPost />} />
        <Route path="/update/:id" element={<DasomUpdate />} />
      </Routes>
    </>

  )
}


export default App;


import React from "react";
import Main from "./components/Main"
import DasomPost from "./pages/DasomPost"
import Detail from "./components/Detail"
import DasomUpdate from "./pages/DasomUpdate"
import { Routes, Route, Link, Redirect } from 'react-router-dom'


const App = () => {


  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/post" element={<DasomPost/>}/>
      <Route path="/update/:id" element={<DasomUpdate/>}/>
    </Routes>
    </>

  )
}


export default App;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getReply, __postReply, __deleteReply, __patchReply, __patchReply2 } from "./redux/modules/replySlice";
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Reply from "./component/Reply/Reply";
import Detail from "./component/Detail/Detail";
import Main from "./component/Main/Main";



function App () {


  

  return ( 
       <div className="App">
          
    <Routes>
      <Route path="/" element={<Main/>}/>
      
      <Route path="/detail/:id" element={
          <div style={{display:'flex'}}>
              <div style={{}}>
                  <Detail></Detail>
              </div>

              <div style={{}}>
                  <Reply></Reply>
              </div>
          </div>} 
        />\
     </Routes>

          
        
        
        </div>
        
  );
};




export default App;
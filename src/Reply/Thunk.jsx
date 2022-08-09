// src/App.jsx

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusNumber, __addNumber } from "../store";

const Thunk = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counterSlice.number);

 
  
 

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={(e)=>{setNumber(+e.target.value)}} />
      <button onClick={()=>{dispatch(__addNumber(number))}}>더하기</button>          {/*thunk 함수를 디스패치한다. payload는 thunk함수에 넣어주면, */} 
      <button onClick={()=>{dispatch(minusNumber(number))}}>빼기</button>            {/*// 리덕스 모듈에서 payload로 받을 수 있다.*/}
    </div>
  );
};

export default Thunk;
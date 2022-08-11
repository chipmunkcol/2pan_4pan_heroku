// src/App.js
import styled from "styled-components";
import { useEffect, useState } from "react";
import React, { useSelector, useDispatch } from "react-redux";
import axios from "axios"; // axios import 합니다.
import { useParams } from "react-router-dom";
import { __getTodos } from "../../redux/modules/todosSlice";


const Detail = () => {

const { isLoading, error, todos } = useSelector((state) => state.todos);
console.log(todos)

const params = useParams().id
const param = todos.findIndex((v)=>v.id === Number(params))
// console.log(params)

const dispatch = useDispatch()


useEffect(()=>{
    dispatch(__getTodos)

},[])
  
  return (
    <div style={{display:'flex', flexDirection: 'column', width: '100%'}}>
        
      
        <Image_Container>
          <Image_Title>
            title
          </Image_Title>
            {todos[param].url}
        </Image_Container>
        <Info_Container>
          <Info_Title>
            info
          </Info_Title>
            {todos[param].content}
        </Info_Container>
        
      
      </div>
  );
};



export default Detail;



const Image_Container = styled.div`
  box-sizing: border-box;
  width: 96%;
  height: 339px;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

const Image_Title = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
`;

const Info_Container = styled.div`
  margin: 24px 0 0 0;
  box-sizing: border-box;
  width: 96%;
  height: 201px;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

const Info_Title = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
`;  


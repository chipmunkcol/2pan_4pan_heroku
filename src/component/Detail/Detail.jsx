// src/App.js
import styled from "styled-components";
import { useEffect, useState } from "react";
import React, { useSelector, useDispatch } from "react-redux";
import axios from "axios"; // axios import 합니다.
import { useParams } from "react-router-dom";
import { __getTodos } from "../../store";


const Detail = () => {

const { isLoading, error, todos } = useSelector((state) => state.todos);
console.log(todos)

const params = useParams().id
const param = todos.findIndex((v)=>v.id === Number(params))
// console.log(params)

const dispatch = useDispatch()


useEffect(()=>{
    dispatch(__getTodos())

},[])
  
  return (
    <div style={{display:'flex', flexDirection: 'column', width: '100%'}}>
        
      
        <Image_Container>
          <Image_Title>
            title
          </Image_Title>
          <StImg todoc={todos[param].imgUrl}></StImg>
            
        </Image_Container>
        <Info_Container>
          <Info_Title>
            info
          </Info_Title>
          <div style={{padding:'20px', display:'flex', flexDirection:'column', fontStyle:'normal', fontWeight:'600', fontSize:'16px', lineHeight:'30px'}}>
            <div style={{display:'flex'}}> <span style={{width:'14%', display:'flex', justifyContent:'flex-end'}}>Title:</span> <span style={{margin:'0 0 0 10px', width:'80%'}}>{todos[param].title }</span></div>
            <div style={{display:'flex'}}> <span style={{width:'14%', display:'flex', justifyContent:'flex-end'}}>Content:</span> <span style={{margin:'0 0 0 10px', width:'80%'}}>{todos[param].content}</span></div>
          </div>
            
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
  justify-content: center;
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
  justify-content: center;
  display: flex;
  height: 30px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
`;  

const StImg = styled.div`
  width:100%;
  height:89%;
  bottom:1px;
  background-image: url(${props => props.todoc});
	background-repeat: no-repeat;
	background-size: cover;
  background-position: center;
  cursor:pointer;

`

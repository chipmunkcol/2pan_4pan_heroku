import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom";
import axios from 'axios';
import { __addNumber, __getTodos } from "../store";


const Detail = () => {

  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo_arr, setTodos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetchTodos()
    dispatch(__getTodos());
  }, [])

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos( data );
  };

  const current_obj = todos.find((data) => data.id === Number(id))

  
  if(isLoading) {
    return (
      <StWrapper>
        <h1>로딩중!</h1>
      </StWrapper>
    ) 
  } else{
    return (
      <>
        <GlobalStyle />
        <StWrapper>
          <StItem>
            <h1>{current_obj.title}</h1>
            <h1>{current_obj.content}</h1>
            <Stbutton
              onClick={() => {navigate("/")
              }}style={{ cursor: "pointer" }}>
              메인으로
            </Stbutton>
          </StItem>
        </StWrapper>
      </>
    );
    
  }


          }

export default Detail;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

	body {
		padding: 0;
		margin: 0;
    background-color: ecdede; 
	}
  html {
    height:100%;
  }
  `;

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const StItem = styled.div`
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border:3px solid orange;
`;

const Stbutton = styled.div`
  width: 30%;
  background-color: antiquewhite;
  padding: 20px;
  margin: 0px 0px 50px 0px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  &:hover {
    background-color: #f2ae81;
  }
`;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import Card from "./Card"
import { __getTodos } from "../store";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios"
import main_logo from "../img/logo.png"


const Main = () => {


  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return (
      <StWrapper>
        <h1>로딩중!</h1>
      </StWrapper>
    )
  } else {

    return (
      <>
        <StHeader>
          <img src={main_logo} style={{ cursor: "pointer" }} onClick={() => { navigate("/") }}></img>
          <Btn onClick={() => { navigate("/post") }}>Post</Btn>
        </StHeader>
        <StMainList>
          {todos.map((todo) => {
            return <Card todo={todo} key={todo.id} />
          })}
        </StMainList>
      </>
    );
  }
}

export default Main;

const StHeader = styled.div`
  width: 1032px;
  height:80px;
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

const StMainList = styled.div`
  width:1032px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Btn = styled.label`
    padding: 6px 16px;
    background: linear-gradient(180deg, #FFFFFF 0%, #E3E3E3 100%);
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
`;
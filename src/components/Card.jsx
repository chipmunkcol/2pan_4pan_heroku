import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteList, __getTodos } from "../store";
import { useEffect } from "react";
import styled from "styled-components"
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios"




const Card = ({ todo }) => {



  const [todo_arr, setTodos] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { isLoading, error, todos } = useSelector((state) => state.todos);

  const onClickDeleteButtonHandler = () => {
    dispatch(deleteList(todo.id))
  };


  return (
    <>
      <StCard>

        {/* card */}
        <StCardHeader>
          {/* card title */}
          <StSpan>{todo.title}</StSpan>

          <StButtonWrap>
            {/* card update button */}
            <StButton onClick={() => {
              navigate("/update/" + todo.id)
            }}></StButton>

            {/* card delete button */}
            <StButton style={{ backgroundColor: '#FF594F' }} onClick={() => {
              onClickDeleteButtonHandler();
            }}></StButton>
          </StButtonWrap>
        </StCardHeader>

        {/* image */}
        <div><StImg onClick={() => { navigate("/detail/" + todo.id) }} todoc={todo.imgUrl}></StImg></div>
      </StCard>

    </>
  );
};



export default Card;

const StCard = styled.div`
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
  border: 1px solid #D7D7D7;
  border-radius: 4px;
  margin-bottom: 40px;
`

const StSpan = styled.span`
`

const StCardHeader = styled.div`
  width: 496px;
  padding: 2px 0;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
  text-align: center;
  position: relative;
`

const StButtonWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 4px;
  right: 6px;
`;

const StButton = styled.button`
  background: none;
  width:18px;
  height:18px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  margin-left: 6px;
  background-color:#57D063;
`

const StImg = styled.div`
  width: 496px;
  height: 310px;
  border: 1px solid #d7d7d7;
  border-radius: 0 0 4px 4px;
  background-image: url(${props => props.todoc});
	background-repeat: no-repeat;
	background-size: cover;
  cursor:pointer;
`
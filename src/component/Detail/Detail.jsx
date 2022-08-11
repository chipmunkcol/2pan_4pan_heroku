// src/App.js
import styled from "styled-components";
import { useEffect, useState } from "react";
import React, { useSelector, useDispatch } from "react-redux";
import axios from "axios"; // axios import 합니다.
import { useParams } from "react-router-dom";
import { __getTodos } from "../../store";
import Header from "../../components/postbox/Header"
import Reply from '../../components/Reply/Reply'


const Detail = () => {

  const { isLoading, error, todos } = useSelector((state) => state.todos);
  console.log(todos)

  const params = useParams().id
  const param = todos.findIndex((v) => v.id === Number(params))
  // console.log(params)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(__getTodos())

  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

      <Header />

      <ContentsWrap>

        <PostWrap>
          {/* image */}
          <Image_Container>
            <Image_Title>
              title
            </Image_Title>
            <StImg todoc={todos[param].imgUrl}></StImg>
          </Image_Container>

          {/* text */}
          <Info_Container>
            <Info_Title>
              info
            </Info_Title>
            <Info_comment>
              <InfoSpanWrap><InfoSpan>Title:</InfoSpan> {todos[param].title}</InfoSpanWrap>
              <InfoSpanWrap><InfoSpan>Content:</InfoSpan> {todos[param].content}</InfoSpanWrap>
            </Info_comment>
          </Info_Container>
        </PostWrap>

        {/* comment */}
        <Reply />
      </ContentsWrap>


    </div>
  );
};

export default Detail;

const InfoSpanWrap = styled.div`
  display: flex;
`;

const InfoSpan = styled.div`
  width: 66px;
  text-align: right;
  margin-right: 6px;
`;

const PostWrap = styled.div`
`;

const ContentsWrap = styled.div`
  width: 1032px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Image_Container = styled.div`
  width: 496px;
  height: 339px;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  text-align: center;
  margin-bottom: 24px;
`;

const Image_Title = styled.div`
  height: 30px;
  justify-content: space-between;
  padding: 4px 0;
  text-align: center;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
  border-bottom: 1px solid #d7d7d7;
`;

const Info_comment = styled.div`
  padding: 24px;
`;

const Info_Container = styled.div`
  width: 496px;
  height: 201px;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

const Info_Title = styled.div`
  height: 30px;
  justify-content: space-between;
  padding: 4px 0;
  text-align: center;
  align-items: center;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
  border-bottom: 1px solid #d7d7d7;
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

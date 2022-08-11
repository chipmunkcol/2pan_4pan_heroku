import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos, updateList } from "../../store";
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom";



import styled from "styled-components";

// Component
import InputBox from "./UpInputBox";
import AddImage from "./UpAddImage";

const PostBox = (fileImage) => {

    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(__getTodos());
    }, [])
    
    const { isLoading, error, todos } = useSelector((state) => state.todos);
    const { id } = useParams();
    const up_todo = todos.find((data) =>  data.id === Number(id))
    
    const [urlFile, setUrlFile] = useState(up_todo.imgUrl)

    return (
        <>
            <PostBoxTop>Post</PostBoxTop>
            <PostBoxWrap>
                {/* 
                    리덕스를 사용하는 방법
                    -> 이미지를 추가한 함수를 리덕스에 저장하는 디스패치를 같이 해주면
                    스토어에 저장된 이미지 url을 인풋컴포넌트에서 유즈셀렉터를이용해사용하는방법
                    
                    부모에 state를 선언해서
                    이미지에는 이미지 값을 저장하는 state를 생성
                    state를 생성해서 부모에서 선언한 props로 저장한 이미지 state를 가져가서 사용하기
                */}
                <AddImage urlFile={urlFile} setUrlFile={setUrlFile}/>
                <InputBox urlFile={urlFile}/>
            </PostBoxWrap>
        </>
    );
}


const PostBoxTop = styled.div`
    background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
    border: 1px solid #D7D7D7;
    border-radius: 4px 4px 0 0;
`;

const PostBoxWrap = styled.div`
    width: 1032px;
    display: flex;
    justify-content: space-between;
    padding: 94px;
    background-color: #fff;
    border: 1px solid #D7D7D7;
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
    border-radius: 0 0 4px 4px;
`;

export default PostBox;
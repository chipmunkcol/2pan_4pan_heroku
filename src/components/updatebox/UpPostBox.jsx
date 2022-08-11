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
    const up_todo = todos.find((data) => data.id === Number(id))

    const [urlFile, setUrlFile] = useState(up_todo.imgUrl)

    return (
        <>
            <PostBoxTop>Post</PostBoxTop>
            <PostBoxWrap>
                <AddImage urlFile={urlFile} setUrlFile={setUrlFile} />
                <InputBox urlFile={urlFile} />
            </PostBoxWrap>
        </>
    );
}


const PostBoxTop = styled.div`
    background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
    border: 1px solid #D7D7D7;
    border-radius: 4px 4px 0 0;
    text-align: center;
    padding: 4px 0;
`;

const PostBoxWrap = styled.div`
    width: 1032px;
    display: flex;
    justify-content: space-between;
    padding: 94px;
    border: 1px solid #D7D7D7;
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
    border-radius: 0 0 4px 4px;
`;

export default PostBox;
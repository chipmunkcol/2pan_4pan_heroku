import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addList } from "../../store";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


import { v4 as uuid_v4 } from "uuid";
import { Navigate } from "react-router-dom";

const InputBox = ({ urlFile }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const handlePost = () => {
        // if (!title || !contents || !imgUrl) return alert("빈칸 없이 입력해 주세요");
        if (!title || !contents) return alert("빈칸 없이 입력해 주세요");
        // console.log(fileImage);
        // setImageUrl(fileImage);

        const newPost = {
            title: title,
            content: contents,
            imgUrl: urlFile
        }
        dispatch(addList(newPost))
        navigate("/");
    }

    return (
        <>
            <InputBoxWrapContainer>
                <InputBoxWrap>
                    <div>Title</div>
                    <TitleInput
                        type="text"
                        placeholder="12 character limit"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength='12'
                    />
                </InputBoxWrap>
                <InputBoxWrap>
                    <div>Contents</div>
                    <ContentsInput
                        placeholder="60 character limit"
                        value={contents}
                        onChange={(e) => setContents(e.target.value)}
                        maxLength='60'
                    />
                </InputBoxWrap>
                <BtnWrap onClick={handlePost}>
                    <Button btn="Post" />
                </BtnWrap>
            </InputBoxWrapContainer>

        </>
    );

}


const InputBoxWrapContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputBoxWrap = styled.div`
    text-align: left;
`;

const TitleInput = styled.input`
    width: 308px;
    margin-top: 8px;
    margin-bottom: 16px;
    padding: 6px 16px;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
`;

const ContentsInput = styled.textarea`
    width: 308px;
    height: 188px;
    margin-top: 8px;
    padding: 6px 16px;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
`;

const BtnWrap = styled.div`
    margin-top: 18px;
    text-align: right;
`;

export default InputBox;
import React, { Component, useState } from "react";
import styled from "styled-components";

// Component
import InputBox from "./InputBox";
import AddImage from "./AddImage";

const PostBox = (fileImage) => {

    const [urlFile, setUrlFile] = useState("")


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
    padding: 4px 0;
    text-align: center;
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
import React, { Component } from "react";
import styled from "styled-components";

// Component
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import AddImage from "../components/AddImage";

const PostBox = () => {
    return (
        <>
            <PostBoxTop>Post</PostBoxTop>
            <PostBoxWrap>
                <AddImage />
                <InputBox />
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
    border: 1px solid #D7D7D7;
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
    border-radius: 0 0 4px 4px;
`;

export default PostBox;
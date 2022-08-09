import React from "react";
import styled from "styled-components";



// Component
import Header from "../components/Header"
import Button from "../components/Button";
import PostBox from "../components/PostBox";


const Post = () => {
    return (
        <Container>
            <Header />
            <PostBox />
        </Container>
    );
}

const Container = styled.div`
    width: 1032px;
    margin: 0 auto;
    padding-bottom: 100px;
`;

export default Post;
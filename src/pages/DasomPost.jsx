import React from "react";
import styled from "styled-components";

// Component
import Header from "../components/postbox/Header"
import PostBox from "../components/postbox/PostBox";


const DasomPost = () => {
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

export default DasomPost;
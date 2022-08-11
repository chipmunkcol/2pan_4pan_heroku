import React from "react";
import styled from "styled-components";

// Component
import Header from "../components/updatebox/UpHeader"
import PostBox from "../components/updatebox/UpPostBox";


const DasomUpdate = () => {
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

export default DasomUpdate;
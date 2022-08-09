import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../image/logo.svg";


const Header = () => {
    return (
        <>
            <HeaderWrap>
                <img src={Logo} alt="logo" />
            </HeaderWrap>
        </>
    );
}

const HeaderWrap = styled.h1`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

export default Header;
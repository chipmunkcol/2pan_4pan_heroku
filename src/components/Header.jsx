import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "../image/logo.svg";

class Header extends Component {
    render() {
        return (
            <>
                <HeaderWrap>
                    <img src={Logo} alt="logo" />
                </HeaderWrap>
            </>
        );
    }
}

const HeaderWrap = styled.h1`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

export default Header;
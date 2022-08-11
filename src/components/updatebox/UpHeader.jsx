import React from "react";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// image
import Logo from "../../image/logo.svg";


const Header = () => {


    const navigate = useNavigate();

    return (
        <>
            <HeaderWrap>
                <img src={Logo} alt="logo" onClick={() => {navigate('/')} }/>
                <Btn onClick={() => {navigate("/")}}>Main</Btn>
            </HeaderWrap>
        </>
    );
}

const HeaderWrap = styled.h1`
    height: 80px;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

const Btn = styled.label`
    height: 36px;
    padding: 6px 32px;
    background: linear-gradient(180deg, #FFFFFF 0%, #E3E3E3 100%);
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    margin-right: 20px;
    font-weight: 600;
    font-size:20px;
    cursor: pointer;
`;

export default Header;
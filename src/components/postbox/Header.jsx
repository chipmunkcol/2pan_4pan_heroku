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
                <img src={Logo} style={{ cursor: "pointer" }} alt="logo" onClick={() => { navigate('/') }} />
                <Btn onClick={() => { navigate("/") }}>Main</Btn>
            </HeaderWrap>
        </>
    );
}

const HeaderWrap = styled.div`
    width: 1032px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

const Btn = styled.label`
    padding: 6px 16px;
    background: linear-gradient(180deg, #FFFFFF 0%, #E3E3E3 100%);
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    cursor: pointer;
`;

export default Header;
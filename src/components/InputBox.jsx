import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import ButtonDisabled from "./ButtonDisabled";

class InputBox extends Component {
    render() {
        return (
            <>
                <InputBoxWrapContainer>
                    <InputBoxWrap>
                        <div>Title</div>
                        <TitleInput type="text" placeholder="input text" />
                    </InputBoxWrap>
                    <InputBoxWrap>
                        <div>Contents</div>
                        <ContentsInput placeholder="input contents" />
                    </InputBoxWrap>
                    <BtnWrap>
                        <ButtonDisabled btn="Post" />
                    </BtnWrap>
                </InputBoxWrapContainer>

            </>
        );
    }
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
    height: 192px;
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
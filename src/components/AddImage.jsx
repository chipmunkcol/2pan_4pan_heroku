import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import AddImg from "../image/addImage.svg";

class AddImage extends Component {
    render() {
        return (
            <>
                <AddImageWrap>
                    <img src={AddImg} alt="" />
                    <BtnWrap>
                        <Button btn="image"></Button>
                    </BtnWrap>
                </AddImageWrap>
            </>
        );
    }
}

const AddImageWrap = styled.div`
    width: 494px;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const BtnWrap = styled.div`
    margin-top: 24px;
`;

export default AddImage;
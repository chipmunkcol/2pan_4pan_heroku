import React, { Component } from "react";
import styled from "styled-components";
import { useState } from "react";

// components
import Button from "./Button";

// image
import AddImg from "../image/addImage.svg";
import { render } from "@testing-library/react";


const AddImage = () => {

    const [imgFile, setImgFile] = useState('');

    const onLoadFile = (e) => {
        const file = e.target.files[0];
        console.log(file)
    }
    return (
        <>
            <AddImageWrap>
                <img src={AddImg} alt="AddImage" />
                <BtnWrap>
                    <input
                        type="file"
                        id="addImage"
                        onChange={onLoadFile}
                        accept='image/jpg, image/jpeg, image/png'
                        style={{ display: "none" }}
                    />
                    <Button
                        btn="image"
                        label="addImage"
                    />
                </BtnWrap>
            </AddImageWrap>
        </>
    );
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
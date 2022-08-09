import React, { Component } from "react";
import styled from "styled-components";
import { useState } from "react";
import { render } from "@testing-library/react";

// components
import Button from "./Button";

// image
import AddImg from "../image/addImage.svg";


const AddImage = () => {

    // 이미지 파일을 미리 볼 url을 저장할 state
    const [fileImage, setFileImage] = useState("");

    // 이미지 파일 저장
    const handleChangeFile = (e) => {

        // FileReader API로 이미지 인식
        let reader = new FileReader();

        // imgFile 변수에 선택한 이미지 target 담기
        const imgFile = e.target.files[0];

        // reader에게 파일 url 읽힘
        // const urlFile = reader.readAsDataURL(imgFile);

        console.log(imgFile);

        setFileImage(imgFile);

        // // 읽기 동작이 성공적으로 완료되면 실행(onload)
        // reader.onload = () => {
        //     console.log(fileImage);
        //     // 데이터를 img src에 넣어 미리보기 가능
        //     setFileImage(fileImage);
        //     // 같은 파일을 올리면 초기화
        //     e.target.value = "";

        // }

    }
    return (
        <>
            <AddImageWrap>
                {fileImage && <img src={fileImage} alt="preview image" />}
                <BtnWrap>
                    <input
                        type="file"
                        id="addImage"
                        onChange={handleChangeFile}
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

const ImgWrap = styled.div`
    width:300px;
    height: 200px;
`;

export default AddImage;
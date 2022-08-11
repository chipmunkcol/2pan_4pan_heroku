import React, { Component } from "react";
import styled from "styled-components";
import { useState } from "react";
import { render } from "@testing-library/react";

// components
import Button from "./Button";
import InputBox from "./InputBox";

// image
import AddImg from "../../image/addImage.svg";


const AddImage = ({urlFile, setUrlFile}) => {

    // 이미지 파일을 미리 볼 url을 저장할 state

    // 이미지 파일 선택 클릭 시 실행
    const handleChangeFile = (e) => {

        // 선택한 파일 확인 (아직 인코딩 전)
        // console.log(e.target.files[0])

        // 이미지 데이터를 읽을 때 필요한 거인 듯..? file 개체에 사용하고
        // 이벤트를 사용하여 데이터를 전달함
        let reader = new FileReader();

        // if 선택한 것이 target.files[0]과 일치하면??
        if (e.target.files[0]) {
            // 이미지 데이터를 url로 변환하여 reader에 넣어줌??
            reader.readAsDataURL(e.target.files[0])
        }

        // 인코딩된 파일 정보가 입력되어 있음
        // console.log(reader)

        // reader에서 읽기 동작이 성공적으로 완료되었을 때 실행
        reader.onload = () => {
            // 변수 fileUrl에 reader.result를 넣어줌(인코딩된 이미지파일의 url)
            const fileUrl = reader.result;
            // console.log(fileUrl);
            // useState 변경값으로 fileUrl을 넣어줌으로써 렌더링함
            setUrlFile(fileUrl);
        }
    }
    console.log(urlFile);
    // console.log([fileImage])

    // const fileUrl = reader.result;
    return (
        <>
            <AddImageWrap encType='multipart/form-data'>
                {/* 
                    이미지 소스에 삼항연산자를 사용하여
                    fileImage가 참이면 그대로 fileImage를 반환하고,
                    거짓이면 AddImg를 반환한다.
                */}
                <img
                    src={urlFile ? urlFile : AddImg} alt="image preview"
                    style={{
                        width: "494px",
                        height: "305px",
                        borderRadius: "4px",
                        // 왜안돼 ㅠㅠ
                        backgroundSize: '100% auto',
                        position: 'relative',
                        backgroundPosition: 'center top',
                        backgroundAttachment: 'fixed'
                    }}
                />
                <BtnWrap>
                    <input
                        type="file"
                        id="addImage"
                        onChange={handleChangeFile}
                        accept='image/jpg, image/jpeg, image/png'
                        style={{ display: "none" }}
                    />
                    <Button
                        btn="Image"
                        label="addImage"
                    />
                </BtnWrap>
            </AddImageWrap>

            {/* props */}
            <div style={{ display: "none" }}><InputBox fileImage={urlFile} /></div>
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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getReply, __postReply, __deleteReply, __patchReply, __patchReply2 } from "../../store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import Button from '../../components/postbox/Button'


function Reply() {

  const [reply, setReply] = useState('')
  const [editReply, setEditReply] = useState('')
  const [reLoading, setReLoading] = useState(true)

  const dispatch = useDispatch();
  const { isLoading, error, replys } = useSelector((state) => state.replys)
  console.log(isLoading, error, replys)

  const params = Number(useParams().id)
  const param = replys.findIndex((v) => v.todosId === params)

  useEffect(() => {
    dispatch(__getReply());

  }, [reLoading]);


  if (isLoading) {
    return <div>로딩 중입니다</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <>
      <ContainerReply>
        <ReplyBoxTop>
          comment
        </ReplyBoxTop>
        <ReplyFlex1>


          {
            replys?.map((val) => {
              if (val.edit === false && val.todosId === params) {
                return (

                  <ReplyText key={val.id}>

                    {val.reply}

                    <FontAwesomeIcon type="button" icon={faTrashCan} size='lg' style={{ float: 'right', margin: '10px 10px 0 0' }} onClick={() => {
                      dispatch(__deleteReply(val.id))
                      setReLoading(!reLoading)                /* 삭제 버튼 */
                    }} />
                    <FontAwesomeIcon type="button" icon={faFloppyDisk} size='lg' style={{ float: 'right', margin: '10px 10px 0 0' }} onClick={() => {
                      if (replys.findIndex((v) => v.edit === true) === -1) {   //true가 1개일때만 실행!
                        dispatch(__patchReply(val))
                        setReLoading(!reLoading)
                      } else {
                        alert('댓글은 하나씩만 수정 가능합니다:)')
                      }
                      //되든 안되든 클릭 할때마다 id값을 갖게 되버려서 수정할 id가 아닌 다른 id가 실행됨. 
                    }} />
                  </ReplyText>
                );
              } else if (val.edit === true && val.todosId === params) {
                return (
                  <ReplyText key={val.id}>

                    <input onChange={(e) => { setEditReply(e.target.value) }} placeholder='댓글을 입력해주세요' />

                    <FontAwesomeIcon type="button" icon={faFloppyDisk} size='lg' style={{ float: 'right', margin: '10px 10px 0 0' }} onClick={() => {
                      if (replys.reply !== '') {
                        dispatch(__patchReply2({ ...val, reply: editReply }))
                        setReply('')
                        setReLoading(!reLoading)
                      } else {
                        alert('1글자 이상 입력해주세요 :)')
                      }
                    }} />
                  </ReplyText>

                );
              }
            })
          }


        </ReplyFlex1>

        <ReplyFlex2>
          <form style={{ margin: 'auto 0 auto 0' }} onSubmit={(e) => {
            e.preventDefault();
            if (reply !== '') {
              dispatch(__postReply({ reply: reply, edit: false, todosId: params }))
              setReply('')
              setReLoading(!reLoading)
            } else {
              alert('1글자 이상 입력해주세요~')
            }

          }}>
            <InputText value={reply} placeholder='댓글을 입력해 주세요' onChange={(e) => {
              setReply(e.target.value);
            }} />
            <button style={{ display: "none" }} id="send">Send</button>        {/* 댓글 저장*/}
            <Button btn="send" label="send" />
          </form>
        </ReplyFlex2>

      </ContainerReply>

    </>
  );
}

const InputText = styled.input`
  width: 368px;
  border: 1px solid #D7D7D7;
  border-radius: 4px;
  padding: 3px;
`;

const ReplyBoxTop = styled.div`
    background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
    border-bottom: 1px solid #D7D7D7;
    border-radius: 4px 4px 0 0;
    padding: 3px 0;
    text-align: center;
  `;

const ContainerReply = styled.div`
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    width: 496px;
    height: 564px;

    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
  
    display: flex;
    flex-direction: column;
  `;

const ReplyFlex1 = styled.div`
    height: 500px;
    margin: 0 23px 0 23px;
    
    overflow: auto;
  `;
const ReplyText = styled.div`
        margin: 0 auto 0 auto;
        border-bottom: 1px solid #E1E1E1;
        width: 448px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 50px;
      `;

const ReplyFlex2 = styled.div`
    display: flex;
    justify-content: center;
<<<<<<< HEAD
    width: 494px;
    height: 88px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    padding: 13px;
=======
    height: 73px;
    background-color: #fff;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.08);
    padding: 24px;
>>>>>>> 780116fca858f1e6a4627285adbef3996a1bad91
  `
  

  const Btn = styled.label`
  padding: 3px 16px;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
  border: 1px solid #D7D7D7;
  border-radius: 4px;
  cursor: pointer;
  `;

  const ReplyInput = styled.input`
      width: 308px;
      margin: 0 10px 0 0;
      padding: 6px 16px;
      border: 1px solid #D7D7D7;
      border-radius: 4px;
  `;

export default Reply;
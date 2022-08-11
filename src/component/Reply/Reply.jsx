import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getReply, __postReply, __deleteReply, __patchReply, __patchReply2 } from "../../redux/modules/replySlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'
import { useParams } from "react-router-dom";



function Reply(){

    const [reply, setReply] = useState('')
    const [editReply, setEditReply] = useState('')
    const [reLoading, setReLoading] = useState(true)

    const dispatch = useDispatch();
    const { isLoading, error, replys } = useSelector((state)=>state.replys)
    // console.log(isLoading, error, replys)

    const params = Number(useParams().id)
    const param = replys.findIndex((v)=>v.todosId === params)

    useEffect(() => {
        dispatch(__getReply());

    }, [reLoading]);
    

    if (isLoading) {
        return <div>로딩 중 입니당!...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    return(
      <>
      <ContainerReply>
                <div style={{backgroundColor:'#D7D7D7', textAlign:'center'}}>comment</div>
                  <ReplyFlex1>
  
  
              {           
                  replys?.map((val) => {
                      if ( val.edit === false && val.todosId === params) {
                          return(
                            
                              <ReplyText key={val.id}>
                                  
                                  {val.reply}
                                  
                                  <FontAwesomeIcon type="button" icon={faTrashCan} size='lg' style={{ float: 'right' }} onClick={()=>{                                      
                                      dispatch(__deleteReply(val.id))
                                      setReLoading(!reLoading)                /* 삭제 버튼 */
                                  }}/>
                                  <FontAwesomeIcon type="button" icon={faFloppyDisk} size='lg' style={{ float: 'right', margin: '0 10px 0 0' }} onClick={()=>{
                                      if (replys.findIndex((v)=>v.edit === true) === -1 ) {   //true가 1개일때만 실행!
                                          dispatch(__patchReply(val))
                                          setReLoading(!reLoading)
                                      } else {
                                          alert('댓글은 하나씩만 수정 가능합니다:)')
                                      }
                                              //되든 안되든 클릭 할때마다 id값을 갖게 되버려서 수정할 id가 아닌 다른 id가 실행됨. 
                                  }}/>
                              </ReplyText>
                          );
                      } else if ( val.edit === true && val.todosId === params){ 
                          return(
                              <ReplyText key={val.id}>
                                  
                                  <input onChange={(e)=>{ setEditReply(e.target.value) }} placeholder='댓글을 입력해주세요'/>
                                  
                                  <FontAwesomeIcon type="button" icon={faFloppyDisk} size='lg' style={{ float: 'right', margin: '0 10px 0 0' }} onClick={()=>{
                                      if (replys.reply !== '') {
                                          dispatch(__patchReply2({...val, reply: editReply}))
                                          setReply('')
                                          setReLoading(!reLoading)
                                      } else {
                                          alert('1글자 이상 입력해주세요 :)')
                                      }
                                  }}/>
                              </ReplyText>
                              
                          );
                  }})
              }
                  
  
                   </ReplyFlex1>
  
                    <ReplyFlex2>
                       <form style={{margin:'auto 0 auto 0'}} onSubmit={(e)=>{ e.preventDefault(); 
                          if(reply !== '') {
                            dispatch(__postReply({ reply: reply, edit: false, todosId: params }))
                            setReply('')
                            setReLoading(!reLoading)
                          } else {
                            alert ('1글자 이상 입력해주세요~')
                          }
                            
                            }}>
                          <input value={reply} placeholder='댓글을 입력해주세요' onChange={(e)=>{
                            setReply(e.target.value); }}/>
                          <button>Send</button>        {/* 댓글 저장*/}
                       </form>
                    </ReplyFlex2>
  
              </ContainerReply>
      
      </>
    );
  }
  
  const ContainerReply = styled.div`
    border: 2px solid #D7D7D7;
    width: 500px;
    height: 600px;
  
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
  `;
  
  const ReplyFlex1 = styled.div`
    height: 500px;
    padding: 10px;
    
    overflow: auto;
  `;
      const ReplyText = styled.div`
        padding: 10px;
        border-bottom: 1px solid gray;
      `;
  
  const ReplyFlex2 = styled.div`
    display: flex;
    justify-content: center;
    height: 73px;
    border-top: 2px solid #D7D7D7;
    padding: 13px;
  `


export default Reply;
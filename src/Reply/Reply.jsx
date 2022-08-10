import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";



function Prac() {

    let [reply, setReply] = useState('')
    let [editReply, setEditReply] = useState({reply: "", edit: false})
    let [editId, setEditId] = useState(null)

    let [booleam, setBooleam] = useState(false)

    let [jsonReplys, setJsonReplys] = useState(null)

    const [jsonReply, setJsonReply] = useState({reply: "", edit: false})

    
    // const json = async () => await axios.get('http://localhost:3001/todos')
    // .then(function (response){
    //     setJsonReplys(response.data)
    // })
    // .catch(function (error) {
    //     console.log('무슨에러냐면:'+error)
    // })

    // const json = async () => {
    //     const { data } = await axios.get('http://localhost:3001/todos');
    //     setJsonReplys(data)
    // }

    let json = useSelector((state)=> state)
    console.log(json)

    const saveJsonReply = async (jsonReply) => {
        try {
                var check = await axios.post('http://localhost:3001/todos', jsonReply);
            // console.log(check)
            if (check.status === 201) {
                setReply('');
                setBooleam(!booleam)
            }
        } catch (error) {
            alert('새로고침을 해주세요 :(')
            console.log('error 내용: '+error)
        }
    };

    const deleteJsonReply = async (replyId) => {
        var check = await axios.delete(`http://localhost:3001/todos/${replyId}`);
        // console.log(check)
        if (check.status === 200) {
            setBooleam(!booleam)
        }
    };

    const editJsonReply = async (editId, editReply) => {
        try {
            var check = await axios.patch(`http://localhost:3001/todos/${editId}`, editReply)
            // console.log(check)
            console.log(editId, editReply, 'try')
            if (check.status === 200) {
                setEditReply({...editReply, reply: ''})
                setEditId(null)
                setBooleam(!booleam)
            }
        } catch (error) {
            console.log('error내용: '+error)
            // console.log(check)
            console.log(editId, editReply, 'error')
            alert('수정버튼을 다시 눌러주세용')
            
        }
    }

    const editJsonReply2 = async (editId, editReply) => {
        try {
            var check = await axios.patch(`http://localhost:3001/todos/${editId}`, editReply)
            console.log(check)
            if (check.status === 200) {
                // setEditReply({...editReply, reply: ''})
                setEditId(null)
                setBooleam(!booleam)
            }
        } catch (error) {
            console.log('error내용: '+error)
            alert('새로고침을 해주세요ㅠ')
        }
    }

    let [boolean, setBoolean] = useState(false)

    useEffect(()=>{
        // json()
        // console.log(jsonReplys)
        // console.log(jsonReply)
       
    },[booleam])
    


    return(
        <div>
            미들웨어에 휘둘리지말고 내껄하자!
            

            <div className="containerReply">
                <div style={{backgroundColor:'#D7D7D7'}}>comment</div>
                <div className="replyFlex1">

                    {           // detail?.map((details) => { return(<div></div>  ) })
                        jsonReplys?.map((val) => {
                            if ( val.edit === false ) {
                                return(
                                    <div className="replyText" key={val.id}>
                                        {val.reply}
                                        <FontAwesomeIcon type="button" icon={faTrashCan} size='lg' style={{ float: 'right' }} onClick={(e)=>{                                      
                                            deleteJsonReply(val.id);                   /* 삭제 버튼 */
                                        }}/>
                                        <FontAwesomeIcon type="button" icon={faFloppyDisk} size='lg' style={{ float: 'right', margin: '0 10px 0 0' }} onClick={()=>{
                                            // console.log(jsonReplys.findIndex((v)=>v.edit === true))
                                            if (jsonReplys.findIndex((v)=>v.edit === true) === -1 ) {   //true가 1개일때만 실행!
                                                editJsonReply(val.id, {...editReply, edit: true})
                                            } else {
                                                alert('댓글은 하나씩만 수정 가능합니다:)')
                                            }
                                                    //되든 안되든 클릭 할때마다 id값을 갖게 되버려서 수정할 id가 아닌 다른 id가 실행됨. 
                                        }}/>
                                    </div>
                                );
                            } else if ( val.edit === true ){ 
                                return(
                                    <div className="replyText" key={val.id}>
                                        <input onChange={(e)=>{e.preventDefault()
                                                setEditReply({...editReply, reply: e.target.value,});
                                            }} placeholder='댓글을 입력해주세요'/>
                                        <FontAwesomeIcon type="button" icon={faFloppyDisk} size='lg' style={{ float: 'right', margin: '0 10px 0 0' }} onClick={()=>{
                                            if (editReply.reply !== '') {
                                                editJsonReply2(val.id, {...editReply, edit: false})   
                                            } else {
                                                alert('1글자 이상 입력해주세요~')
                                            }
                                        }}/>
                                    </div>
                                );
                            }
                        })
                    }

                </div>
                <div className="replyFlex2">
                     
                     <form onSubmit={(e)=>{ e.preventDefault(); saveJsonReply(jsonReply); }}>
                        <input value={reply} placeholder='댓글을 입력해주세요'
                            onChange={(e)=>{ setJsonReply({...jsonReply, reply: e.target.value,}); setReply(e.target.value) }}/>
                        <button>Send</button>        {/* 댓글 저장*/}
                     </form>

                </div>
                
            </div>
            

        </div>
    );
}

export default Prac;
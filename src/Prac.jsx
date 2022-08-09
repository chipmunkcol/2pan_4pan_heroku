import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
// fa-floppy-disk-pen


function Prac() {

    let [reply, setReply] = useState('')
    let [editReply, setEditReply] = useState({reply: "", edit: false})
    let [editId, setEditId] = useState(null)

    let [booleam, setBooleam] = useState(false)

    let [jsonReplys, setJsonReplys] = useState(null)

    const [jsonReply, setJsonReply] = useState({reply: "", edit: false})

    // const json = async () => {
    //     const { data } = await axios.get('http://localhost:3001/todos');
    //     setJsonReplys(data);
    // } 

    const json = () => axios.get('http://localhost:3001/todos')
    .then(function (response){
        setJsonReplys(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })

    const saveJsonReply = (jsonReply) => {
        axios.post('http://localhost:3001/todos', jsonReply);
    };

    const deleteJsonReply = (replyId) => {
        axios.delete(`http://localhost:3001/todos/${replyId}`);
    };

    const editJsonReply = (editId, editReply) => {
        axios.patch(`http://localhost:3001/todos/${editId}`, editReply)
    }

    useEffect(()=>{
        json()
        console.log(jsonReplys)
        // console.log(jsonReply)
        
    },[booleam])
    


    return(
        <div>
            미들웨어에 휘둘리지말고 내껄하자!
            

            <div className="containerReply">
                <div style={{backgroundColor:'#D7D7D7'}}>comment</div>
                <div className="replyFlex1">

                    {
                        jsonReplys?.map((val, i) => {
                            if (val.edit === false) {
                                return(
                                    <div className="replyText" key={val.id}>
                                        {val.reply}
                                        <FontAwesomeIcon type="button" icon={faTrashCan} size='lg' style={{ float: 'right' }} onClick={(e)=>{e.preventDefault();
                                            deleteJsonReply(val.id);
                                            setBooleam(!booleam)
                                        }}/>
                                        <span className="fa-solid fa-floppy-disk-pen">
                                        <FontAwesomeIcon type="button" icon={faFloppyDisk} size='lg' style={{ float: 'right', margin: '0 10px 0 0' }} onClick={(e)=>{e.preventDefault();
                                            setEditId(val.id)
                                            setEditReply({...editReply, edit: true})
                                            editJsonReply(editId, editReply)
                                            setBooleam(!booleam)
                                        }}/>
                                        </span>
                                    </div>
                                );
                            } else {
                                return(
                                    <div className="replyText" key={val.id}>
                                        <input onChange={(e)=>{e.preventDefault()
                                            
                                            setEditReply({...editReply, reply: e.target.value,});
                                            // setEditReply({...editReply, });
                                            }} placeholder='댓글을 입력해주세요'/>
                                        <FontAwesomeIcon type="button" icon={faFloppyDisk} size='lg' style={{ float: 'right', margin: '0 10px 0 0' }} onClick={(e)=>{e.preventDefault();
                                            setEditId(val.id)
                                            setEditReply({...editReply, edit: false})
                                            editJsonReply(editId, editReply)
                                            setBooleam(!booleam)

                                        }}/>
                                    </div>
                                );
                            }
                        })
                    }

                </div>
                <div className="replyFlex2">
                     
                     <form onSubmit={(e)=>{e.preventDefault(); saveJsonReply(jsonReply); setReply(''); setBooleam(!booleam)}}>
                        <input value={reply} placeholder='댓글을 입력해주세요'
                            onChange={(e)=>{ setJsonReply({...jsonReply, reply: e.target.value,}); setReply(e.target.value) }}/>
                        <button>Send</button>
                     </form>

                </div>
                
            </div>
            

        </div>
    );
}

export default Prac;
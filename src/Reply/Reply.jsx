import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReply, deleteReply, reviseReply, minusNumber, __addNumber } from "../store";
import { axios } from 'axios';


function Reply(){

    const state = useSelector((state) => state.reply)
    
    
    // const fetchTodos = async () => {
    //     const { data } = await axios.get("http://localhost:3001/todos");
    //     setTodos(data);
    // };

    const axios = require('axios');

    const json = ()=> axios.get('http://localhost:3001/todos')
    .then(function (response){
        setTodos(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })


    const [todos, setTodos] = useState(null)

    const [todo, setTodo] = useState({
        title: "",
    })

    const [targetId, setTargetId] = useState(null);
    const [editTodo, setEditTodo] = useState({title:'',})

    const onsubmitHandler = (todo) => {
        axios.post('http://localhost:3001/todos', todo);
    };

    const onclickDeleteButtonHandler = (todoId) => {
        axios.delete(`http://localhost:3001/todos/${todoId}`)
    }

    const onclickEditButtonHandler = (todoId, edit) => {
        axios.patch(`http://localhost:3001/todos/${todoId}`, edit)
    }

    const [title, setTitle] = useState('')
    const [save, setSave] = useState([])
    const [id, setId] = useState(1)
    const [revise, setRevise] = useState('')


    useEffect(()=>{
        // console.log(save)
        // fetchTodos();
        json()
        
    },[todos])

    // console.log(todos)

    

    return (
        <div>
        


            <form onSubmit={(e)=>{
                e.preventDefault();
                onsubmitHandler(todo);   
                
            }}> 

            <div>
                <input placeholder="수정하고 싶은 Todo ID" onChange={(e)=>{setTargetId(e.target.value)}}/>
                <input placeholder="수정값 입력" onChange={(e)=>{setEditTodo({...editTodo, title: e.target.value})}}/>
                <button type="button" onClick={()=>{onclickEditButtonHandler(targetId, editTodo)}}>수정하기</button>

            </div>
                <input type='text' onChange={(e)=>{

                    setTodo({...todo, title: e.target.value})
                }}/>
                <button>추가하기</button>
            </form>
            
            <div>
                {
                    todos?.map((val)=> (
                        <div key={val.id}>
                            {val.id} :{val.title}
                            <button onClick={()=>{ onclickDeleteButtonHandler(val.id) }}>삭제하기</button>
                        </div>
                    ))
                }
            </div>

            

            <div>
                {/* <input onChange={(e)=>{ setTitle(e.target.value)} }></input> */}
                {/* <button onClick={()=>{ 
                    let copy = [...save]
                    copy.push({
                        id: id,
                        title: title,
                        revise: false
                    })
                    setSave(copy)
                    setId(id + 1)}}>저장</button> */}
            </div>

            {
                save.map((val, i)=>{
                    if(val.revise === false) {
                        return(

                            <div key={val.id}>
                                <h1>제목- {val.title} <button onClick={()=>{
                                    //수정하기 버튼을 클릭하면 해당 자리에 input 박스 생성
                                    let copy = [...save]
                                    copy[i].revise = true
                                    setSave(copy)
    
                                }}>수정하기</button></h1>
                                <hr/>
                            </div>
                        );
                    }
                    else {
                        return(
                            <div key={val.id}>
                                <h1>
                                    <input value={ revise } onChange={(e)=>{setRevise(e.target.value)}}/> 
                                    <button onClick={()=>{ 
                                        let copy = [...save]
                                        copy[i].title = revise
                                        copy[i].revise = false
                                        setSave(copy)
                                        setRevise('')
                                     }}>완료!</button>
                                </h1>


                            </div>
                        );
                    }
                })
            }

        </div>
    );
}

export default Reply;
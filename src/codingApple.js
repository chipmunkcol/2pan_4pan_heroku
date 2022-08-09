import { useEffect, useState } from "react"

function prac(){
    let [count, setCount] = useState(0);
    let [age, setAge] = useState(10);
    

    function countAge(){
        if(count < 3 && count != 0){
            setAge(age + 1)
        }
    }

    useEffect(()=>{
        countAge();

    },[count])

    return (
        <div>
            <div>안녕 난 {age} 살 이얌</div>
            <button onClick={()=>{
                setCount(count + 1)
            }}>빨리 어른이 되는 버튼!</button>
        </div>
    );
}


export default prac;
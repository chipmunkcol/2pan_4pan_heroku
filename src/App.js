import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Reply from './Reply/Reply.jsx'
import Thunk from './Reply/Thunk';
import Prac from './Prac';


function App() {

const state = useSelector((state)=>state)

const dispatch = useDispatch()



  return (
    <div className="App">
      <h1>Hello, react!</h1>
      {/* <button onClick={ confirm }>Redux 확인 버튼</button> */}

      {/* <Reply/>

      <hr/>

      <Thunk/> */}

      <Prac/>

    </div>
  );
}

export default App;

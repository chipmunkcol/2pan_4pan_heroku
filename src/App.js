import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Reply from './Reply/Reply';


function App() {


  return (
    <div className="App">
      <h1>Hello, react!</h1>

      <Reply/>

    </div>
  );
}

export default App;

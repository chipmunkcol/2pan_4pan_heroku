import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { hello } from './store';
import { useEffect } from 'react';

// Router
import Router from "./shared/Router"


function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

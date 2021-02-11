import React,{useState} from 'react';
import Hello from './Components/Hello'
import LinkButton from './Components/LinkButton'
import Mouse from './Components/Mouse'
import useMousePosition from './hooks/useMounsePosition'
import logo from './logo.svg';
import './App.css';

function App() {
  const [show,setShow] = useState(false)
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>setShow(!show)}>
         Toggle MouseTracker
        </button>
        <div>位于X:{position.x},y:{position.y}</div>
        {/* {show && <Mouse/>} */}
        {<LinkButton />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

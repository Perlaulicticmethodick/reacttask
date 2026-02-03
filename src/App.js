import { useState, useRef } from 'react'; // Eliminado 'use' y 'useEffect' que no se usaban
import './App.css';

let App =()=>{
  let[points,setpoints]=useState(0)
  
  let[questions,setquest]=useState([
    {
      text:"¿cual es la cap de españa?",
      options:["Madrid","Ponfe","Barcelona"],
      correct:1
    },
    {
      text:"¿cual es la cap de catalunya?",
      options:["Madrid","Ponfe","Barcelona"],
      correct:2
    },
  ])
  return (
    <div className='App'>
      <h1>Trivial</h1>
    </div>
  );
}

export default App;
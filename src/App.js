import { useState, useRef } from 'react'; // Eliminado 'use' y 'useEffect' que no se usaban
import './App.css';
import Questions from './Components/questions';
import Player from './Components/player';
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
    {
      text:"¿1+1?",
      options:["1","3","2"],
      correct:2
    },
  ])
  return (
    <div className='App'>
      <Player points={points}/>
      <Questions question={questions} setpoints={setpoints} points={points}/>
    </div>
  );
}

export default App;
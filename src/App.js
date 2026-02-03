import { useState,useRef,useEffect } from 'react';
import './App.css';

function App() {
  let[task,setTask]=useState([
  {
    name:"Tarea1",
    place:"School",
    prioridad:0,

  },
  {
    name:"Tarea2",
    place:"School",
    prioridad:0,
  },
])
  return (
    <div>
      {task.map(t=>
         <li>
          <b>{t.name}</b>
          <div>prioridad:{t.prioridad}</div>
          <div>Lugar:{t.place}</div>
         </li>)}
    </div>
  );
}

export default App;
//codigo jsx entre java y html
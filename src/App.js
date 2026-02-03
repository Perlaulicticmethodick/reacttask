import { useState,useRef,useEffect, use } from 'react';
import './App.css';

function App() {
  let[name,setName]=useState(" ")
  let[place,setPlace]=useState(" ")
  let[prioridad,setPrio]=useState(" ")
  let[task,setTask]=useState([
  {
    name:"Tarea1",
    place:"School",
    priority:0,

  },
  {
    name:"Tarea2",
    place:"School",
    priority:0,
  },
])

  let change=(e)=>{
    setName(e.currentTarget.value)
  }
  let changeplace=(e)=>{
    setPlace(e.currentTarget.value)
  }
  let changeprio=(e)=>{
    setPrio(parseInt(e.currentTarget.value))
  }
  let addtask=()=>{
    let newtask={
      name:name,
      place:place,
      priority:prioridad,
    }
    setTask([...task,newtask])
  }
  return (
    <div>
      <h2>ADD TASKS</h2>
      <input type="text" placeholder='name' onChange={change}></input>
      <input type="text" placeholder='place' onChange={changeplace}></input>
      <input type="number" placeholder='prioridad' onChange={changeprio}></input>
      <button onClick={addtask}>ADD TASK</button>
      
      {task.map(t=>
         <li>
          <b>{t.name}</b>
          <div>prioridad:{t.priority}</div>
          <div>Lugar:{t.place}</div>
         </li>)}
    </div>
  );
}

export default App;
//codigo jsx entre java y html
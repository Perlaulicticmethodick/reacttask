import { useState,useRef,useEffect, use } from 'react';
import './App.css';

function App() {
  let[name,setName]=useState(" ")
  let[place,setPlace]=useState(" ")
  let[prioridad,setPrio]=useState(" ")

  let nameref=useRef("");
  let placeref=useRef("");
  let prioref=useRef(0);
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

  let addtaskref=()=>{
    let newtask={
      name:nameref.current.value,
      place:placeref.current.value,
      priority:prioref.current.value,
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


      <h2>ADD TASKS</h2>
      <input ref={nameref} type="text" placeholder='name' ></input>
      <input ref={placeref}type="text" placeholder='place' ></input>
      <input ref={prioref}type="number" placeholder='prioridad' ></input>
      <button onClick={addtaskref}>ADD TASK</button>
      
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
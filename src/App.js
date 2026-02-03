import { useState, useRef } from 'react'; // Eliminado 'use' y 'useEffect' que no se usaban
import './App.css';

function App() {
  // 1. Aquí estaba el ERROR PRINCIPAL: Faltaba definir el ref del formulario
  let formref = useRef(null);

  let [task, setTask] = useState([
    { name: "Tarea1", place: "School", priority: 0 },
    { name: "Tarea2", place: "School", priority: 0 },
  ]);

  // Función para añadir usando FormData (La que estás usando en el botón)
  let addtaskformref = (e) => {
    // 2. Importante: Prevenir que la página se recargue al enviar el form
    e.preventDefault(); 

    // Verificamos que el ref exista
    if (formref.current) {
      let formdata = new FormData(formref.current);
      
      let newtask = {
        name: formdata.get("name"),
        place: formdata.get("place"),
        // Convertimos a número porque el input devuelve string
        priority: parseInt(formdata.get("prio")) || 0, 
      };

      setTask([...task, newtask]);

      // 3. Opcional: Limpiar el formulario después de añadir
      formref.current.reset();
    }
  }

  return (
    <div>
      <h2>ADD TASKS</h2>
      
      {/* Vinculamos el ref definido arriba */}
      <form ref={formref}>
        <input name="name" type="text" placeholder='name' />
        <input name="place" type="text" placeholder='place' />
        <input name="prio" type="number" placeholder='prioridad' />
        {/* Movi el botón dentro del form para que sea más semántico, 
            pero cambié onClick para prevenir el submit por defecto */}
        <button onClick={addtaskformref}>ADD TASK</button>
      </form>

      {/* 4. Usar <ul> para listas y añadir la "key" */}
      <ul>
        {task.map((t, index) => (
          // React necesita una "key" única para cada elemento de una lista
          <li key={index}>
            <b>{t.name}</b>
            <div>prioridad: {t.priority}</div>
            <div>Lugar: {t.place}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
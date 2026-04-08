import { useState } from "react"

export default function TaskItem({ task, onToggle, onUpdate, onDelete, disabled}){

    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title)
    return(
        <li
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            gap:10,
            justifyContent:"space-between",
            padding:10,
            border:"1px solid #ddd",
            borderRadius:8,
            marginBottom:8,
          }}
          >
             <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
             <label style={{
                display: "flex",
                gap:10,
                alignItems:"center"
             }}>
               <input
               type="checkbox"
               checked={task.done}
               onChange={() => onToggle(task)}
               disabled={disabled}
               />
               <span style={{
                  textDecoration: task.done ? "line-through" : "none"
               }}>
                 {task.title}
               </span>
            </label>
            <div style={{ display:"flex", gap:8}}>
            <button onClick={() => setEditing(!editing)} disabled={disabled}>
            Editar
            </button>
            <button onclick={() => onDelete(task._id)} disabled={disabled}>
            Eliminar
            </button>
          </div> 
          </div>
          {editing && (
            <div style={{ display:"flex", gap:8}}>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                disabled={disabled}
              />
              <button
                onClick={()=> {
                  onUpdate(task._id, newTitle)
                  setEditing(false)
                }}
                disabled={disabled}
              >
                  Actualizar
              </button>
            </div>
          )}
        </li>
    )
}
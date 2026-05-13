import TaskItem from "./TaskItem"

export default function TaskList({ task = [], onToggle, onUpdate, onDelete, disabled}){
    if(task?.length === 0) return <p> No hay tareas</p>

    return(
        <ul style={{
            marginTop:18, padding:0, listStyle: "none"
        }}>
          {task.map((t) => (
            <TaskItem
              key={t._id}
              task={t}
              onToggle={onToggle}
              onUpdate={onUpdate}
              onDelete={onDelete}
              disabled={disabled}
              />
          ))}
        </ul>
    )
}
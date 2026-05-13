import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks, createTasks, updateTasks, deleteTasks} from "../api/task.api"

export default function TasksPage(){
    const [task, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [busy, setBusy ] = useState(false)
    const [error, setError] = useState ("")

    async function load() {
        try{
            setError("")
            setLoading(true)
            const data = await getTasks()
            setTasks(data)
        }catch (e){
            setError(e?.message || "Error cargando tareas")
        }finally{
            setLoading(false)
        }

        }
    useEffect(() => {
        load()
    }, [])

    async function handletCreate(title) {
        try{
            setError("")
            setLoading(true)
            await createTasks(title)
            await load()
        }catch (e){
            setError(e?.response?. data?.message || e.message || "Error cargando tareas")
        }finally{
            setBusy(false)
        }

    }

    async function handleUpdate(id, title) {
        try{
            setBusy(true)
            await updateTasks(id, {title})
            await load()
        }catch{
            setError("Error actualizando tarea")
        }finally{
            setBusy(false)
        }
    }

    async function handleToggle(task) {
        try{
            setBusy(true)
            await updateTasks(task._id, {done : !task.done})
            await load()
        }catch (e){
            setError(e?.message || "Error actualizando tarea")
        }finally{
            setBusy(false)
        }
    }

    async function handletDelete(id) {
        try{
        setError("")
        setBusy(true)
        await deleteTasks(id)
        await load()
        }catch (e){
            setError(e?.message || "Error eliminando tarea")
        }finally{
            setBusy(false)
        }
        
    }

    return(
        <div style={{
            maxWidth: 520, margin:"40px auto", frontFamily:"system-ui"}}>
                <h1>Mine mern - Tareas</h1>
                <TaskForm onCreate={handletCreate} disabled={busy}/>
                {error ?(
                    <p style={{ marginTop:12, color:"crimson"}}>{error}</p>
                ): null}
                {loading ? (
                    <p>Cargando ...</p>
                ):(
                    <TaskList task={task} 
                    onToggle={handleToggle} 
                    onUpdate={handleUpdate}
                    onDelete={handletDelete} 
                    disabled={busy}/>
                )}
            </div>
    )
}
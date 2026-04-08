import { useState } from "react";

export default function TaskForm({onCreate, disabled}){
    const [ title, setTitle] = useState("")

    async function handletSubmit(e) {
        e.preventDefault()
        const value = title.trim()
        if(!value) return

        await onCreate(value)
        setTitle("")
    }

    return(
        <form onSubmit={handletSubmit} style={{ display:"flex", gap:8}}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nueva tarea ..."
                style={{flex:1, padding: 10}}
                disabled={disabled}
            />
            <button type="submit" style={{ padding:"10px 14px"}} disabled={disabled}>
            Agregar
            </button>
        </form>
    )
}
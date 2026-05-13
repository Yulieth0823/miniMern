import api from "./axios";

export async function getTasks() {
    const { data } =await api.get("/task")
    return data
}

export async function createTasks(title) {
    const { data } =await api.post("/task", { title })
    return data
}

export async function updateTasks(id, payload) {
    const { data } =await api.put(`/task/${id}`, payload)
    return data
}

export async function deleteTasks(id) {
    const { data } =await api.delete(`/task/${id}`)
    return data
}
import express from "express"
import cors from "cors"

import taskRoutes from "./routes/task.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/health", (req, res) => {
    res.json({ ok: true, message: "API corriendo"})
})
app.use("/api/task", taskRoutes)

export default app;
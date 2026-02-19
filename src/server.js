import "dotenv/config"
import app from "./app.js"
import { connectDB } from "./config/db.js"

const PORT = process.env.PORT || 4000

async function main() {
    await connectDB(process.env.MONGO_URI)

    app.listen(PORT, () =>{
        console.log(`Backend corriendo en http://localhost:${PORT}`)
    })
}

main()
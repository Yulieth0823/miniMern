import mongoose from "mongoose";

const taskShema = new mongoose.Schema(
    {
        title: { type: String, required:true, trim: true},
        done:{ type: Boolean, default: false}
    },
    {timestamps:true}
)

export default mongoose.model("Task", taskShema)
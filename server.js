import express from "express";
import dotenv from "dotenv";
import connectDB from "../backend/db/db.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
const app = express();
app.use(express.json());
connectDB();

app.use("/api/auth",authRoutes);


app.listen(process.env.PORT || 5173,()=>{
    console.log(`Server is running on port ${process.env.PORT || 5173 }`)
});
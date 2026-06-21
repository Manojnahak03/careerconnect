import express from "express";
import dotenv from "dotenv";
import connectDB from "../backend/db/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/job",jobRoutes);


app.listen(process.env.PORT || 5173,()=>{
    console.log(`Server is running on port ${process.env.PORT || 5173 }`)
});
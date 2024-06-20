import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


const app = express()
app.use(express.json());
app.use(cors());

async function connectMongoDB() {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if (conn) {
        console.log("Connected to MongoDB📦");
    }
}
connectMongoDB();

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "All Good🏆",
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`The server is Running on Port ${PORT} 🚀`);
});
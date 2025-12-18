import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { Inngest, functions, inngest } from "./inngest/index.js";

const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.get("/", (req, res) => res.send("Server is running"));
app.get("/api/inngest", server({ client: inngest, functions }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

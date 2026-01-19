import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import classRoutes from "./routes/class.routes.js";
import sessionRoutes from "./routes/session.routes.js";
import attendanceRoutes from "./routes/attendance.routes.js";


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/attendance", attendanceRoutes);


app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
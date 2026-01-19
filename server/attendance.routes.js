import express from "express";
import { auth } from "../middleware/auth.js";
import { markAttendance, myAttendance } from "../controllers/attendance.controller.js";
const router = express.Router();
router.post("/mark", auth, markAttendance);
router.get("/my", auth, myAttendance);
export default router;
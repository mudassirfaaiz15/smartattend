import express from "express";
import { auth } from "../middleware/auth.js";
import { createSession } from "../controllers/session.controller.js";
const router = express.Router();
router.post("/create", auth, createSession);
export default router;
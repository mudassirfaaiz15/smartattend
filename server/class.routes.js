import express from "express";
import { auth } from "../middleware/auth.js";
import { createClass, getClasses } from "../controllers/class.controller.js";
const router = express.Router();
router.post("/", auth, createClass);
router.get("/", auth, getClasses);
export default router;
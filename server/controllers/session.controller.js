import { pool } from "../db.js";
import QRCode from "qrcode";
import { v4 as uuid } from "uuid";


export async function createSession(req, res) {
const { classId } = req.body;
const token = uuid();
const expires = new Date(Date.now() + 5 * 60000);


await pool.query(
"INSERT INTO sessions(class_id, token, expires_at) VALUES($1,$2,$3)",
[classId, token, expires]
);


const qr = await QRCode.toDataURL(token);
res.json({ qr });
}
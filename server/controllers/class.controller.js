import { pool } from "../db.js";


export async function createClass(req, res) {
const { name } = req.body;
await pool.query("INSERT INTO classes(name, faculty_id) VALUES($1,$2)", [name, req.user.id]);
res.json({ msg: "Class created" });
}


export async function getClasses(req, res) {
const result = await pool.query("SELECT * FROM classes WHERE faculty_id=$1", [req.user.id]);
res.json(result.rows);
}
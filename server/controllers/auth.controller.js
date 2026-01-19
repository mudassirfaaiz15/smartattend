import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function register(req, res) {
const { name, email, password, role } = req.body;
const hash = await bcrypt.hash(password, 10);
await pool.query(
"INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,$4)",
[name, email, hash, role]
);
res.json({ msg: "Registered" });
}


export async function login(req, res) {
const { email, password } = req.body;
const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
const user = result.rows[0];


if (!user || !(await bcrypt.compare(password, user.password)))
return res.status(401).json({ msg: "Invalid" });


const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
res.json({ token, role: user.role });
}
import { pool } from "../db.js";


export async function markAttendance(req, res) {
const { token } = req.body;
const session = await pool.query(
"SELECT * FROM sessions WHERE token=$1 AND expires_at > NOW()",
[token]
);


if (!session.rows.length) return res.status(400).json({ msg: "QR expired" });


await pool.query(
"INSERT INTO attendance(student_id, session_id) VALUES($1,$2)",
[req.user.id, session.rows[0].id]
);


res.json({ msg: "Marked" });
}


export async function myAttendance(req, res) {
const result = await pool.query(
"SELECT marked_at FROM attendance WHERE student_id=$1 ORDER BY marked_at DESC",
[req.user.id]
);
res.json(result.rows);
}
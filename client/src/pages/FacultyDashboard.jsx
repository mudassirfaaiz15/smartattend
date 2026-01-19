import { useState } from "react";
import api from "../api";


export default function FacultyDashboard() {
const [qr, setQr] = useState(null);


const generate = async () => {
const res = await api.post("/sessions/create", { classId: 1 });
setQr(res.data.qr);
};


return (
<div className="p-6">
<h2 className="text-xl font-bold">Faculty Dashboard</h2>
<button onClick={generate} className="bg-green-600 text-white px-4 py-2 mt-4 rounded">Generate QR</button>
{qr && <img src={qr} className="mt-4 w-60" />}
</div>
);
}
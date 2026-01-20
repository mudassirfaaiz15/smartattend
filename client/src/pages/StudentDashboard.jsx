import React from "react";
import QRScanner from "../components/QRScanner";
import api from "../api";


export default function StudentDashboard() {
const handleScan = async (token) => {
await api.post("/attendance/mark", { token });
alert("Attendance marked!");
};


return (
<div className="p-6">
<h2 className="text-xl font-bold">Scan QR</h2>
<QRScanner onScan={handleScan} />
</div>
);
}
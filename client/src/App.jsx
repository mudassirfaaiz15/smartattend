import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import FacultyDashboard from "./pages/FacultyDashboard";
import StudentDashboard from "./pages/StudentDashboard";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>SmartAttend</h2>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Bio from "../portfolio-content/Bio";
import Projects from "../portfolio-content/Projects";
import Contact from "../portfolio-content/Contact";
import Login from "../portfolio-content/Login";
import Resume from "../portfolio-content/Resume";
import Error from "../portfolio-content/Error";

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Paper>
  );
}

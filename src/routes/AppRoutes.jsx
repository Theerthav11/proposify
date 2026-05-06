import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NewProject from "../pages/NewProject";
import Preview from "../pages/Preview";
import ProposalBuilder from "../pages/ProposalBuilder";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* App Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/proposal-builder" element={<ProposalBuilder />} />
      <Route path="/preview" element={<Preview />} />
    </Routes>
  );
}
import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, name: "Smart Building Management System", status: "Active", updated: "3 hours ago", type: "RFP" },
    { id: 2, name: "AI Analytics Platform", status: "Active", updated: "1 day ago", type: "RFP" },
    { id: 3, name: "Cloud Infrastructure Solution", status: "Draft", updated: "2 days ago", type: "RFI" },
    { id: 4, name: "Cybersecurity Suite", status: "Active", updated: "3 days ago", type: "RFP" },
    { id: 5, name: "IoT Device Monitoring System", status: "Draft", updated: "5 days ago", type: "RFP" },
    { id: 6, name: "Data Analytics Dashboard", status: "Completed", updated: "1 week ago", type: "RFP" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.status.toLowerCase() === filter);

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Projects</h1>
            <p className="text-gray-600">Manage all your project proposals</p>
          </div>
          <button
            onClick={() => navigate("/new-project")}
            className="btn flex items-center gap-2"
          >
            <span className="text-xl">+</span>
            New Project
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          {["all", "active", "draft", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === f
                  ? "bg-primary-navy text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate("/proposal-builder")}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : project.status === "Draft"
                      ? "bg-gray-200 text-gray-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-4">Updated {project.updated}</p>
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-primary-navy text-white text-xs rounded">
                  {project.type}
                </span>
                <button className="text-primary-navy text-sm font-medium hover:underline">
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

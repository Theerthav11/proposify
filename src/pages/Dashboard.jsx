import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Projects", value: "24", change: "+12% from last month", color: "bg-purple-100" },
    { label: "Active Proposals", value: "18", change: "+8% from last month", color: "bg-green-100" },
    { label: "Requests", value: "42", change: "+18% from last month", color: "bg-yellow-100" },
    { label: "Completed", value: "32", change: "+10% from last month", color: "bg-blue-100" },
  ];

  const recentProjects = [
    { name: "Smart Building Management System", status: "Active", updated: "3 hours ago" },
    { name: "AI Analytics Platform", status: "Active", updated: "1 day ago" },
    { name: "Cloud Infrastructure Solution", status: "Draft", updated: "2 days ago" },
    { name: "Cybersecurity Suite", status: "Active", updated: "3 days ago" },
    { name: "IoT Device Monitoring System", status: "Draft", updated: "5 days ago" },
  ];

  const recentRequests = [
    { title: "RFP: Smart Building Management System", from: "john.smith@abc.com", date: "2h ago", type: "Email" },
    { title: "RFP: Integration Requirements", from: "team@xyz.com", date: "5h ago", type: "Email" },
    { title: "Request for Pricing Details", from: "manager@pqr.com", date: "1d ago", type: "Email" },
  ];

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Admin! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your proposals today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-2xl">
                  {index === 0 ? "📁" : index === 1 ? "📄" : index === 2 ? "📧" : "✅"}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Projects */}
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Recent Projects</h2>
              <button
                onClick={() => navigate("/projects")}
                className="text-primary-navy text-sm font-medium hover:underline"
              >
                View all
              </button>
            </div>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                  onClick={() => navigate("/proposal-builder")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-teal rounded-lg flex items-center justify-center">
                      <span className="text-xl">📄</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{project.name}</p>
                      <p className="text-sm text-gray-500">Updated {project.updated}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/new-project")}
              className="w-full mt-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-navy hover:text-primary-navy transition font-medium"
            >
              + Create New Project
            </button>
          </div>

          {/* Recent Requests */}
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Recent Requests</h2>
              <button
                onClick={() => navigate("/requests")}
                className="text-primary-navy text-sm font-medium hover:underline"
              >
                View all
              </button>
            </div>
            <div className="space-y-4">
              {recentRequests.map((request, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                  onClick={() => navigate("/proposal-builder")}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-coral rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 mb-1">{request.title}</p>
                      <p className="text-sm text-gray-600 mb-2">From: {request.from}</p>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-primary-navy text-white text-xs rounded">
                          {request.type}
                        </span>
                        <span className="text-xs text-gray-500">{request.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
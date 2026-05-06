import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

export default function Proposals() {
  const navigate = useNavigate();

  const proposals = [
    {
      id: 1,
      name: "RFP - Smart Building Management System",
      project: "Smart Building Management System",
      status: "In Progress",
      lastUpdated: "May 20, 2024",
    },
    {
      id: 2,
      name: "RFP - AI Analytics Platform",
      project: "AI Analytics Platform",
      status: "Draft",
      lastUpdated: "May 18, 2024",
    },
    {
      id: 3,
      name: "RFI - Integration Requirements",
      project: "Cloud Infrastructure Solution",
      status: "In Review",
      lastUpdated: "May 16, 2024",
    },
    {
      id: 4,
      name: "RFP - Cybersecurity Suite",
      project: "Cybersecurity Suite",
      status: "Completed",
      lastUpdated: "May 17, 2024",
    },
    {
      id: 5,
      name: "RFP - IoT Monitoring System",
      project: "IoT Device Monitoring System",
      status: "Draft",
      lastUpdated: "May 16, 2024",
    },
  ];

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Proposals</h1>
          <p className="text-gray-600">View and manage all your proposals</p>
        </div>

        {/* Proposals Table */}
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Proposal Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Project
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Last Updated
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {proposals.map((proposal) => (
                <tr
                  key={proposal.id}
                  className="hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => navigate("/proposal-builder")}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-teal rounded-lg flex items-center justify-center">
                        <span className="text-lg">📄</span>
                      </div>
                      <span className="font-medium text-gray-800">{proposal.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{proposal.project}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        proposal.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : proposal.status === "Draft"
                          ? "bg-gray-200 text-gray-700"
                          : proposal.status === "In Review"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {proposal.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{proposal.lastUpdated}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/proposal-builder");
                        }}
                        className="p-2 hover:bg-gray-200 rounded-lg transition"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/preview");
                        }}
                        className="p-2 hover:bg-gray-200 rounded-lg transition"
                        title="Preview"
                      >
                        👁️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}

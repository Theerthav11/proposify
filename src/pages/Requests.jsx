import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Requests() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("emails");

  const requests = [
    {
      id: 1,
      title: "RFP: Smart Building Management System",
      from: "John Smith",
      email: "john.smith@abc.com",
      subject: "RFP: Smart Building Management System",
      date: "May 20, 2024",
      preview: "Hi Team, Please provide your proposal for our...",
      type: "Email",
    },
    {
      id: 2,
      title: "Clarification on Requirements",
      from: "John Smith",
      email: "john.smith@abc.com",
      subject: "Could you please clarify the integration...",
      date: "May 18, 2024",
      preview: "Could you please clarify the integration...",
      type: "Email",
    },
    {
      id: 3,
      title: "Request for Pricing Details",
      from: "John Smith",
      email: "manager@pqr.com",
      subject: "Please share the pricing details for the...",
      date: "May 15, 2024",
      preview: "Please share the pricing details for the...",
      type: "Email",
    },
  ];

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Requests</h1>
          <p className="text-gray-600">Manage incoming RFI and RFP requests</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setSelectedTab("emails")}
            className={`px-4 py-3 font-medium transition ${
              selectedTab === "emails"
                ? "text-primary-navy border-b-2 border-primary-navy"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            📧 Emails ({requests.length})
          </button>
          <button
            onClick={() => setSelectedTab("channels")}
            className={`px-4 py-3 font-medium transition ${
              selectedTab === "channels"
                ? "text-primary-navy border-b-2 border-primary-navy"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            💬 Channels (0)
          </button>
          <button
            onClick={() => setSelectedTab("uploads")}
            className={`px-4 py-3 font-medium transition ${
              selectedTab === "uploads"
                ? "text-primary-navy border-b-2 border-primary-navy"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            📤 Uploads (0)
          </button>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="card hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate("/proposal-builder")}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{request.title}</h3>
                      <p className="text-sm text-gray-600">
                        From: {request.from} &lt;{request.email}&gt;
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">{request.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-medium">Subject:</span> {request.subject}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">{request.preview}</p>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary-navy text-white text-xs rounded">
                      {request.type}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/proposal-builder");
                      }}
                      className="text-primary-navy text-sm font-medium hover:underline"
                    >
                      Create Proposal →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

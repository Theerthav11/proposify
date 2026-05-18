import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

import {
  FileSearch,
  Pencil,
  Eye,
} from "lucide-react";

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
      <div className="min-h-screen bg-gradient-to-br from-[#E6E6E6] via-[#FDFCFD] to-[#D8D8D8] bg-fixed p-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#242525] mb-2">
            Proposals
          </h1>

          <p className="text-[#797979]">
            View and manage all your proposals
          </p>
        </div>

        {/* Table Container */}
        <div
          className="
            bg-[#FDFCFD]
            border
            border-[#C6C6C6]
            rounded-3xl
            overflow-hidden
            shadow-sm
          "
        >
          
          <table className="w-full">
            
            {/* Table Head */}
            <thead
              className="
                bg-[#EFEFEF]
                border-b
                border-[#C6C6C6]
              "
            >
              <tr>
                
                <th
                  className="
                    px-6
                    py-4
                    text-left
                    text-sm
                    font-semibold
                    text-[#242525]
                  "
                >
                  Proposal Name
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-left
                    text-sm
                    font-semibold
                    text-[#242525]
                  "
                >
                  Project
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-left
                    text-sm
                    font-semibold
                    text-[#242525]
                  "
                >
                  Status
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-left
                    text-sm
                    font-semibold
                    text-[#242525]
                  "
                >
                  Last Updated
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-left
                    text-sm
                    font-semibold
                    text-[#242525]
                  "
                >
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#C6C6C6]">
              
              {proposals.map((proposal) => (
                <tr
                  key={proposal.id}
                  onClick={() => navigate("/proposal-builder")}
                  className="
                    hover:bg-[#F5F5F5]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  
                  {/* Proposal Name */}
                  <td className="px-6 py-5">
                    
                    <div className="flex items-center gap-4">
                      
                      <div
                        className="
                          w-11
                          h-11
                          rounded-2xl
                          bg-[#242525]
                          flex
                          items-center
                          justify-center
                          shadow-sm
                        "
                      >
                        <FileSearch
                          size={18}
                          className="text-white"
                        />
                      </div>

                      <span className="font-medium text-[#242525]">
                        {proposal.name}
                      </span>
                    </div>
                  </td>

                  {/* Project */}
                  <td className="px-6 py-5 text-[#797979]">
                    {proposal.project}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    
                    <span
                      className={`
                        px-4
                        py-1.5
                        rounded-full
                        text-xs
                        font-medium
                        ${
                          proposal.status === "In Progress"
                            ? "bg-[#242525] text-white"

                            : proposal.status === "Draft"
                            ? "bg-[#D9D9D9] text-[#242525]"

                            : proposal.status === "In Review"
                            ? "bg-[#EFEFEF] text-[#242525] border border-[#C6C6C6]"

                            : "bg-[#242525] text-white"
                        }
                      `}
                    >
                      {proposal.status}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-5 text-[#797979]">
                    {proposal.lastUpdated}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    
                    <div className="flex items-center gap-3">
                      
                      {/* Edit */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/proposal-builder");
                        }}
                        className="
                          p-2.5
                          rounded-xl
                          border
                          border-[#C6C6C6]
                          bg-[#FDFCFD]
                          hover:bg-[#EDEDED]
                          transition-all
                          duration-300
                        "
                        title="Edit"
                      >
                        <Pencil
                          size={16}
                          className="text-[#242525]"
                        />
                      </button>

                      {/* Preview */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/preview");
                        }}
                        className="
                          p-2.5
                          rounded-xl
                          border
                          border-[#C6C6C6]
                          bg-[#FDFCFD]
                          hover:bg-[#EDEDED]
                          transition-all
                          duration-300
                        "
                        title="Preview"
                      >
                        <Eye
                          size={16}
                          className="text-[#242525]"
                        />
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
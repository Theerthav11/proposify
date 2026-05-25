import MainLayout from "../components/layout/MainLayout.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, MessageCircleMore, Upload } from "lucide-react";

type TabType =
  | "emails"
  | "channels"
  | "uploads";

interface RequestItem {
  id: number;
  title: string;
  from: string;
  email: string;
  subject: string;
  date: string;
  preview: string;
  type: string;
}

export default function Requests() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<TabType>("emails");
  
  const requests: RequestItem[] = [
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
      <div className="min-h-screen  bg-gradient-to-br from-[#E6E6E6]
          via-[#FDFCFD]
          to-[#D8D8D8]
          bg-fixed
          p-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#242525] mb-2">
            Requests
          </h1>

          <p className="text-[#797979]">
            Manage incoming RFI and RFP requests
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-[#C6C6C6] pb-2">
          
          <button
            onClick={() => setSelectedTab("emails")}
            className={`
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              font-medium
              transition-all
              duration-300
              ${
                selectedTab === "emails"
                  ? "bg-[#242525] text-white shadow-md"
                  : "text-[#797979] hover:bg-[#D9D9D9]"
              }
            `}
          >
            <Mail size={18} />
            Emails ({requests.length})
          </button>

          <button
            onClick={() => navigate("/channels")}
            className={`
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              font-medium
              transition-all
              duration-300
              ${
                selectedTab === "channels"
                  ? "bg-[#242525] text-white shadow-md"
                  : "text-[#797979] hover:bg-[#D9D9D9]"
              }
            `}
          >
            <MessageCircleMore size={18} />
             Channels (0)
          </button>

          <button
            onClick={() => navigate("/uploads")}
            className={`
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              font-medium
              transition-all
              duration-300
              ${
                selectedTab === "uploads"
                  ? "bg-[#242525] text-white shadow-md"
                  : "text-[#797979] hover:bg-[#D9D9D9]"
              }
            `}
          >
            <Upload size={18} />
             Uploads (0)
          </button>
        </div>

        {/* Requests List */}
        <div className="space-y-5">
          {requests.map((request) => (
            <div
              key={request.id}
              onClick={() => navigate("/proposal-builder")}
              className="
                bg-[#FDFCFD]
                border
                border-[#C6C6C6]
                rounded-3xl
                p-6
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-pointer
              "
            >
              
              <div className="flex items-start gap-5">
                
                {/* ICON */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#242525]
                      to-[#4D4D4D]
                      flex
                      items-center
                      justify-center
                      text-white
                      shadow-md
                      flex-shrink-0
                    "
                  >
                    <Mail
                      size={18} 
                    />
                  </div>

                {/* Content */}
                <div className="flex-1">
                  
                  {/* Top */}
                  <div className="flex items-start justify-between mb-3">
                    
                    <div>
                      <h3 className="font-bold text-lg text-[#242525] mb-1">
                        {request.title}
                      </h3>

                      <p className="text-sm text-[#797979]">
                        From: {request.from} &lt;{request.email}&gt;
                      </p>
                    </div>

                    <span className="text-sm text-[#797979]">
                      {request.date}
                    </span>
                  </div>

                  {/* Subject */}
                  <p className="text-sm text-[#242525] mb-3">
                    <span className="font-semibold">
                      Subject:
                    </span>{" "}
                    {request.subject}
                  </p>

                  {/* Preview */}
                  <p className="text-sm text-[#797979] mb-5 leading-6">
                    {request.preview}
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    
                    <span
                      className="
                        px-4
                        py-1.5
                        bg-[#242525]
                        text-white
                        text-xs
                        rounded-full
                        font-medium
                      "
                    >
                      {request.type}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/proposal-builder");
                      }}
                      className="
                        text-[#242525]
                        text-sm
                        font-semibold
                        hover:translate-x-1
                        transition-transform
                      "
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
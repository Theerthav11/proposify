import MainLayout from "../components/layout/MainLayout.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, Search, ArrowRight, } from "lucide-react";
import { Button } from "@/components/ui/button.js";

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

  const [searchTerm, setSearchTerm] =
    useState<string>("");

  const requests: RequestItem[] = [
    {
      id: 1,
      title: "RFP: Smart Building Management System",
      from: "John Smith",
      email: "john.smith@abc.com",
      subject: "RFP: Smart Building Management System",
      date: "May 20, 2024",
      preview:
        "Hi Team, Please provide your proposal for our Smart Building Management System.",
      type: "Email",
    },
    {
      id: 2,
      title: "Clarification on Requirements",
      from: "John Smith",
      email: "john.smith@abc.com",
      subject:
        "Could you please clarify the integration requirements?",
      date: "May 18, 2024",
      preview:
        "Could you please clarify the integration requirements and expected timeline?",
      type: "Email",
    },
    {
      id: 3,
      title: "Request for Pricing Details",
      from: "John Smith",
      email: "manager@pqr.com",
      subject:
        "Please share the pricing details for the solution",
      date: "May 15, 2024",
      preview:
        "Please share the pricing details for the solution including support costs.",
      type: "Email",
    },
  ];

  const filteredRequests = requests.filter(
    (request) =>
      request.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      request.from
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      request.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      request.subject
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div
        className="
          min-h-screen
          bg-gradient-to-br
          from-[#E6E6E6]
          via-[#FDFCFD]
          to-[#D8D8D8]
          bg-fixed
          p-8
        "
      >
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            
            {/* Left Side */}
            <div>
              <h1 className="text-3xl font-bold text-[#242525] mb-2">
                Emails
              </h1>

              <p className="text-[#797979]">
                Manage incoming RFI and RFP requests
              </p>
            </div>

            {/* Right Side Search */}
            <div
              className="
                flex
                items-center
                gap-3
                bg-white
                px-4
                py-3
                rounded-2xl
                border
                border-[#C6C6C6]
                shadow-sm
                w-[350px]
              "
            >
              <Search
                size={18}
                className="text-[#797979]"
              />

              <input
                type="text"
                placeholder="Search emails..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-sm
                  text-[#242525]
                "
              />
            </div>

          </div>
        </div>

        {/* Email List */}
        <div className="space-y-5">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <div
                key={request.id}
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
                "
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
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
                    <Mail size={18} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Top */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3
                          className="
                            font-bold
                            text-lg
                            text-[#242525]
                            mb-1
                          "
                        >
                          {request.title}
                        </h3>

                        <p
                          className="
                            text-sm
                            text-[#797979]
                          "
                        >
                          From: {request.from} &lt;
                          {request.email}
                          &gt;
                        </p>
                      </div>

                      <span
                        className="
                          text-sm
                          text-[#797979]
                        "
                      >
                        {request.date}
                      </span>
                    </div>

                    {/* Subject */}
                    <p
                      className="
                        text-sm
                        text-[#242525]
                        mb-3
                      "
                    >
                      <span className="font-semibold">
                        Subject:
                      </span>{" "}
                      {request.subject}
                    </p>

                    {/* Preview */}
                    <p
                      className="
                        text-sm
                        text-[#797979]
                        mb-5
                        leading-6
                      "
                    >
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

                      <Button
                        onClick={() =>
                          navigate(
                            "/proposal-builder"
                          )
                        }
                      >
                        Create Proposal
                        <ArrowRight size={16} /> 
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className="
                bg-white
                border
                border-[#C6C6C6]
                rounded-3xl
                py-20
                text-center
                shadow-sm
              "
            >
              <Mail
                size={40}
                className="
                  mx-auto
                  text-[#797979]
                  mb-4
                "
              />

              <h3
                className="
                  text-xl
                  font-semibold
                  text-[#242525]
                "
              >
                No Emails Found
              </h3>

              <p className="text-[#797979] mt-2">
                Try a different search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
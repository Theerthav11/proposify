import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";

import {
  MessageCircleMore,
  Search,
  ArrowRight,
} from "lucide-react";

export default function Channels() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] =
    useState("");

  const channelRequests = [
    {
      id: 1,
      title: "Enterprise Cloud Migration",
      type: "Slack",
      company: "TechNova Solutions",
      date: "2 hours ago",
    },

    {
      id: 2,
      title: "CRM Integration Proposal",
      type: "Teams",
      company: "BluePeak Systems",
      date: "Yesterday",
    },

    {
      id: 3,
      title: "Security Audit Request",
      type: "Discord",
      company: "SecureNet Corp",
      date: "3 days ago",
    },

    {
      id: 4,
      title: "Mobile App Development",
      type: "Slack",
      company: "NextGen Labs",
      date: "1 week ago",
    },
  ];

  const filteredRequests =
    channelRequests.filter((request) =>
      request.title
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
          p-6
          lg:p-8
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            xl:flex-row
            xl:items-center
            xl:justify-between
            gap-6
            mb-10
          "
        >
          <div>
            <h1 className="text-4xl font-bold text-[#242525]">
              Channels
            </h1>

            <p className="text-[#797979] mt-2">
              Manage requests from connected
              communication channels
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full xl:w-[350px]">
            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[#797979]
              "
            />

            <input
              type="text"
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
                w-full
                h-12
                pl-12
                pr-4
                rounded-2xl
                border
                border-[#C6C6C6]
                bg-[#FDFCFD]
                outline-none
                focus:border-[#242525]
                text-[#242525]
              "
            />
          </div>
        </div>

        {/* REQUEST LIST */}
        <div className="space-y-5">
          {filteredRequests.map((request) => (
            <motion.div
              key={request.id}
              whileHover={{ y: -4 }}
              onClick={() =>
                navigate("/proposal-builder")
              }
              className="
                bg-white/80
                backdrop-blur-xl
                border
                border-[#D8D8D8]
                rounded-3xl
                p-6
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <div
                className="
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-5
                "
              >
                {/* LEFT */}
                <div className="flex items-start gap-4">
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
                    <MessageCircleMore
                      size={26}
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-[#EDEDED]
                          text-[#4D4D4D]
                          text-xs
                          font-medium
                        "
                      >
                        {request.type}
                      </span>

                      <span className="text-sm text-[#797979]">
                        {request.date}
                      </span>
                    </div>

                    <h2
                      className="
                        text-xl
                        font-bold
                        text-[#242525]
                        mt-3
                      "
                    >
                      {request.title}
                    </h2>

                    <p className="text-[#797979] mt-2 text-sm">
                      {request.company}
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(
                      "/proposal-builder"
                    );
                  }}
                  className="
                    h-11
                    px-5
                    rounded-2xl
                    bg-[#242525]
                    hover:bg-[#3A3A3A]
                    text-white
                    font-medium
                    transition-all
                    duration-300
                    flex
                    items-center
                    gap-2
                    w-fit
                  "
                >
                  Create Proposal

                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredRequests.length ===
          0 && (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              mt-20
            "
          >
            <div
              className="
                w-24
                h-24
                rounded-3xl
                bg-[#EDEDED]
                flex
                items-center
                justify-center
              "
            >
              <MessageCircleMore
                size={42}
                className="text-[#797979]"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#242525] mt-6">
              No Requests Found
            </h2>

            <p className="text-[#797979] mt-2">
              Try another search keyword
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
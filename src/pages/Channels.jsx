import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  MessageCircleMore,
  Search,
  Plus,
  MessageSquare,
  Heart,
  Paperclip,
  ArrowRight,
} from "lucide-react";

export default function Channels() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = ["All", "Slack", "Teams", "Discord", "Other"];

  const channelRequests = [
    {
      id: 1,
      title: "RFP: Enterprise Cloud Migration",
      channel: "#rfp-requests",
      channelType: "Slack",
      user: "Sarah Johnson",
      userAvatar: "SJ",
      date: "May 20, 2024",
      time: "2:30 PM",
      preview:
        "Hi team, we need a proposal for migrating our infrastructure to cloud. Timeline is 6 months, budget around $500K. Need detailed security compliance documentation...",
      replies: 5,
      reactions: 3,
      attachments: 2,
    },
    {
      id: 2,
      title: "Integration Requirements Discussion",
      channel: "#general",
      channelType: "Teams",
      user: "Mike Chen",
      userAvatar: "MC",
      date: "May 19, 2024",
      time: "11:15 AM",
      preview:
        "Looking for integration capabilities with our existing CRM system. Need detailed technical specs and API documentation for the integration...",
      replies: 8,
      reactions: 5,
      attachments: 1,
    },
    {
      id: 3,
      title: "Security Audit Proposal Needed",
      channel: "#security",
      channelType: "Discord",
      user: "Alex Rivera",
      userAvatar: "AR",
      date: "May 18, 2024",
      time: "4:45 PM",
      preview:
        "We need a comprehensive security audit proposal. Must include penetration testing and compliance review for our financial systems...",
      replies: 3,
      reactions: 7,
      attachments: 0,
    },
    {
      id: 4,
      title: "Mobile App Development RFP",
      channel: "#projects",
      channelType: "Slack",
      user: "Jennifer Lee",
      userAvatar: "JL",
      date: "May 17, 2024",
      time: "9:20 AM",
      preview:
        "Looking for proposals on developing a cross-platform mobile application with real-time sync capabilities and offline mode...",
      replies: 12,
      reactions: 9,
      attachments: 3,
    },
  ];

  const filteredRequests = channelRequests.filter(
    (request) =>
      (activeTab === "All" || request.channelType === activeTab) &&
      (request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.preview.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getChannelStyle = (type) => {
    switch (type) {
      case "Slack":
        return {
          gradient: "from-[#4A154B] to-[#611f69]",
          badge: "bg-purple-100 text-purple-700",
          emoji: "💬",
        };
      case "Teams":
        return {
          gradient: "from-[#464EB8] to-[#5B5FC7]",
          badge: "bg-blue-100 text-blue-700",
          emoji: "👥",
        };
      case "Discord":
        return {
          gradient: "from-[#5865F2] to-[#7289DA]",
          badge: "bg-indigo-100 text-indigo-700",
          emoji: "🎮",
        };
      default:
        return {
          gradient: "from-[#B1B2B2] to-[#797979]",
          badge: "bg-gray-100 text-gray-700",
          emoji: "💭",
        };
    }
  };

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
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-[#242525] mb-2">
                Channels
              </h1>
              <p className="text-[#797979]">
                Manage requests from connected communication channels
              </p>
            </div>

            <div className="flex items-center gap-4">
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
                  placeholder="Search channel requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                    shadow-sm
                  "
                />
              </div>

              {/* CONNECT CHANNEL BUTTON */}
              <button
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#242525]
                  to-[#4D4D4D]
                  text-white
                  font-medium
                  shadow-lg
                  hover:scale-105
                  transition
                  whitespace-nowrap
                "
              >
                <Plus size={18} />
                Connect Channel
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-8 border-b border-[#C6C6C6] pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
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
                  activeTab === tab
                    ? "bg-[#242525] text-white shadow-md"
                    : "text-[#797979] hover:bg-[#D9D9D9]"
                }
              `}
            >
              {tab} (
              {tab === "All"
                ? channelRequests.length
                : channelRequests.filter((r) => r.channelType === tab).length}
              )
            </button>
          ))}
        </div>

        {/* CHANNEL REQUESTS LIST */}
        <div className="space-y-5">
          {filteredRequests.map((request) => {
            const style = getChannelStyle(request.channelType);

            return (
              <motion.div
                key={request.id}
                whileHover={{ y: -4 }}
                className="
                  bg-[#FDFCFD]
                  border
                  border-[#C6C6C6]
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  cursor-pointer
                "
                onClick={() => navigate("/proposal-builder")}
              >
                <div className="flex items-start gap-5">
                  {/* CHANNEL ICON */}
                  <div
                    className={`
                      w-14
                      h-14
                      bg-gradient-to-br
                      ${style.gradient}
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      shadow-md
                    `}
                  >
                    <span className="text-2xl">{style.emoji}</span>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    {/* TOP ROW */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-[#242525] mb-1">
                          {request.title}
                        </h3>
                        <p className="text-sm text-[#797979]">
                          From: @{request.user} in{" "}
                          <span className="font-medium">{request.channel}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-[#797979]">
                          {request.date}
                        </span>
                        <p className="text-xs text-[#797979] mt-1">
                          {request.time}
                        </p>
                      </div>
                    </div>

                    {/* PREVIEW */}
                    <p className="text-sm text-[#797979] mb-5 leading-6">
                      {request.preview}
                    </p>

                    {/* METADATA ROW */}
                    <div className="flex flex-wrap items-center gap-4 mb-5">
                      <span
                        className={`
                          px-4
                          py-1.5
                          rounded-full
                          text-xs
                          font-semibold
                          ${style.badge}
                        `}
                      >
                        {request.channelType}
                      </span>

                      <div className="flex items-center gap-2 text-sm text-[#797979]">
                        <MessageSquare size={16} />
                        <span>{request.replies} replies</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-[#797979]">
                        <Heart size={16} />
                        <span>{request.reactions} reactions</span>
                      </div>

                      {request.attachments > 0 && (
                        <div className="flex items-center gap-2 text-sm text-[#797979]">
                          <Paperclip size={16} />
                          <span>{request.attachments} attachments</span>
                        </div>
                      )}
                    </div>

                    {/* BOTTOM ACTION */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            w-8
                            h-8
                            rounded-full
                            bg-gradient-to-br
                            from-[#242525]
                            to-[#4D4D4D]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-xs
                            font-bold
                          "
                        >
                          {request.userAvatar}
                        </div>
                        <span className="text-sm text-[#797979]">
                          {request.user}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/proposal-builder");
                        }}
                        className="
                          flex
                          items-center
                          gap-2
                          text-[#242525]
                          text-sm
                          font-semibold
                          hover:translate-x-1
                          transition-transform
                        "
                      >
                        Create Proposal
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredRequests.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <div
              className="
                w-24
                h-24
                rounded-3xl
                bg-[#EDEDED]
                flex
                items-center
                justify-center
                mb-6
              "
            >
              <MessageCircleMore size={42} className="text-[#797979]" />
            </div>
            <h2 className="text-2xl font-bold text-[#242525] mb-2">
              No Channel Requests Found
            </h2>
            <p className="text-[#797979] mb-6 max-w-md">
              {searchTerm
                ? "Try adjusting your search or filter"
                : "Connect your communication channels to start receiving requests"}
            </p>
            <button
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-2xl
                bg-[#242525]
                text-white
                font-medium
                shadow-lg
                hover:scale-105
                transition
              "
            >
              <Plus size={18} />
              Connect Channel
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

// Dashboard.jsx

import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FolderKanban,
  FileText,
  Mail,
  CheckCircle2,
  Plus,
  Search,
  Eye,
  MoreVertical,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Projects",
      value: "24",
      change: "+12%",
      icon: FolderKanban,
      bg: "from-[#B1B2B2] to-[#797979]",
    },

    {
      title: "Active Proposals",
      value: "18",
      change: "+8%",
      icon: FileText,
      bg: "from-[#B1B2B2] to-[#797979]",
    },

    {
      title: "Requests",
      value: "42",
      change: "+15%",
      icon: Mail,
      bg: "from-[#B1B2B2] to-[#797979]",
    },

    {
      title: "Completed",
      value: "32",
      change: "+10%",
      icon: CheckCircle2,
      bg: "from-[#B1B2B2] to-[#797979]",
    },
  ];

  const proposals = [
    {
      name: "RFP - Smart Building Management",
      project: "Smart Building",
      status: "In Progress",
      date: "May 20, 2024",
    },

    {
      name: "RFP - AI Analytics Platform",
      project: "AI Analytics",
      status: "Draft",
      date: "May 19, 2024",
    },

    {
      name: "RFI - Integration Requirements",
      project: "Cloud Infrastructure",
      status: "Review",
      date: "May 18, 2024",
    },

    {
      name: "RFP - Cybersecurity Suite",
      project: "Cybersecurity",
      status: "Completed",
      date: "May 17, 2024",
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#E6E6E6] via-[#FDFCFD] to-[#D8D8D8] p-8">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl font-bold text-[#242525] mb-1">
              Welcome back, Admin
            </h1>

            <p className="text-[#797979]">
              Here's what's happening with your proposals today.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div
              className="
                flex
                items-center
                gap-3
                bg-[#FFFFFF]
                backdrop-blur-xl
                px-5
                py-3
                rounded-2xl
                border
                border-[#C6C6C6]
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                w-[350px]
              "
            >
              <Search size={18} className="text-[#797979]" />

              <input
                type="text"
                placeholder="Search projects, proposals..."
                className="
                  bg-transparent
                  outline-none
                  text-sm
                  w-full
                "
              />
            </div>

            {/* New Project */}
            <button
              onClick={() => navigate("/new-project")}
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
              "
            >
              <Plus size={18} />
              New Project
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                className="
                  bg-[#FFFFFF]
                  backdrop-blur-xl
                  rounded-3xl
                  border
                  border-[#C6C6C6]
                  px-5
                  py-4
                  shadow-[0_4px_20px_rgba(0,0,0,0.06)] 
                "
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div
                      className={`
                        w-11
                        h-11
                        rounded-xl
                        bg-gradient-to-br
                        ${item.bg}
                        flex
                        items-center
                        justify-center
                      `}
                    >
                      <Icon size={20} className="text-white" />
                    </div>

                    <div>
                      <h3 className="text-xs text-[#797979] font-medium mb-1">
                        {item.title}
                      </h3>

                      <h2 className="text-3xl font-bold text-[#242525]  leading-none">
                        {item.value}
                      </h2>
                    </div>
                  </div>

                  <span className="text-[#797979] text-xs font-semibold">
                    {item.change}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-3 gap-8">

          <div className="col-span-3 space-y-8">

            {/* TOP TWO CARDS */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

              {/* Recent Projects */}
              <div
                className="
                  bg-[#FFFFFF]
                  rounded-3xl
                  border
                  border-[#C6C6C6]
                  p-6
                "
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#242525]">
                    Recent Projects
                  </h2>

                  <button className="text-[#242525]
                    font-medium
                    px-4
                    py-2
                    rounded-xl
                    hover:bg-[#EDEDED]
                    transition-all
                    duration-300">
                    View all
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    "Smart Building Management System",
                    "AI Analytics Platform",
                    "Cloud Infrastructure Solution",
                    "Cybersecurity Suite",
                  ].map((item, index) => (
                    <motion.div
                      whileHover={{ x: 5 }}
                      key={index}
                      className="
                        flex
                        items-center
                        justify-between
                        p-5
                        rounded-3xl
                        bg-[#EDEDED]
                        hover:shadow-md
                        transition
                        cursor-pointer
                      "
                    >
                      <div className="flex items-center gap-4">

                        <div
                          className="
                            w-12
                            h-12
                            rounded-3xl
                            bg-gradient-to-br
                            from-[#242525] 
                            to-[#4D4D4D]
                            text-white
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <FileText size={20} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#242525]">
                            {item}
                          </h3>

                          <p className="text-sm text-[#797979]">
                            Updated 2 hours ago
                          </p>
                        </div>
                      </div>

                      <span
                        className="
                          px-4
                          py-1.5
                          rounded-full
                          bg-[#B1B2B2]
                          text-[#242525]
                          text-xs
                          font-semibold
                        "
                      >
                        Active
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RECENT REQUESTS */}
              <div
                className="
                  bg-[#FFFFFF]
                  rounded-3xl
                  border
                  border-[#C6C6C6]
                  p-6
                "
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#242525]">
                    Recent Requests
                  </h2>

                  <button className="text-[#242525]
                    font-medium
                    px-4
                    py-2
                    rounded-xl
                    hover:bg-[#EDEDED]
                    transition-all
                    duration-300
                  ">
                    View all
                  </button>
                </div>

                <div className="space-y-4">

                  {[
                    {
                      title: "RFP: Smart Building Management",
                      email: "john.smith@abc.com",
                      time: "2h ago",
                    },

                    {
                      title: "Integration Requirements",
                      email: "team@xyz.com",
                      time: "5h ago",
                    },

                    {
                      title: "Pricing Details Request",
                      email: "manager@pqr.com",
                      time: "1 day ago",
                    },

                  ].map((item, index) => (
                    <motion.div
                      whileHover={{ x: 5 }}
                      key={index}
                      className="
                        flex
                        items-center
                        justify-between
                        p-5
                        rounded-3xl
                        bg-[#EDEDED]
                        hover:shadow-md
                        transition
                        cursor-pointer
                      "
                    >
                      <div className="flex items-center gap-4">

                        <div
                          className="
                            w-12
                            h-12
                            rounded-3xl
                            bg-gradient-to-br
                            from-[#242525] 
                            to-[#4D4D4D]
                            text-white
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Mail size={20} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#242525]">
                            {item.title}
                          </h3>

                          <p className="text-sm text-[#797979]">
                            {item.email}
                          </p>
                        </div>
                      </div>

                      <span className="text-sm text-[#797979]">
                        {item.time}
                      </span>
                    </motion.div>
                  ))}

                </div>
              </div>
            </div>

            {/* RECENT PROPOSALS */}
            <div
              className="
                bg-[#FDFCFD]
                rounded-[28px]
                border
                border-[#D8D8D8]
                p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.01)]
                backdrop-blur-xl
              "
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#242525]">
                  Recent Proposals
                </h2>

                <button className="
                  text-[#242525]
                  font-medium
                  px-4
                  py-2
                  rounded-xl
                  hover:bg-[#EDEDED]
                  transition-all
                  duration-300
                ">
                  View all
                </button>
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#C6C6C6]">

                <table className="w-full">
                  <thead className="bg-[#EDEDED]">
                    <tr>
                      <th className="text-left p-4 text-sm text-[#797979]">
                        Proposal Name
                      </th>

                      <th className="text-left p-4 text-sm text-[#797979]">
                        Project
                      </th>

                      <th className="text-left p-4 text-sm text-[#797979]">
                        Status
                      </th>

                      <th className="text-left p-4 text-sm text-[#797979]">
                        Last Updated
                      </th>

                      <th className="text-left p-4 text-sm text-[#797979]">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {proposals.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t
                          border-[#E2E2E2]
                          hover:bg-[#EDEDED]
                          hover:scale-[1.002]
                          transition-all
                          duration-300"
                      >
                        <td className="p-4 font-medium text-[#242525]">
                          {item.name}
                        </td>

                        <td className="p-4 text-[#797979]">
                          {item.project}
                        </td>

                        <td className="p-4">
                          <span
                            className={`
                              px-3.5
                              py-1.5
                              rounded-full
                              text-[11px]
                              font-semibold
                              tracking-wide
                              shadow-sm
                              transition-all
                              duration-300
                              ${
                                item.status === "Completed"
                                  ? "bg-[#E6E6E6] text-[#242525] border border-[#C6C6C6]"
                                  : item.status === "Draft"
                                  ? "bg-[#F2F2F2] text-[#242525] border border-[#D8D8D8]"
                                  : item.status === "Review"
                                  ? "bg-[#D8D8D8] text-[#242525] border border-[#B1B2B2]"
                                  : "bg-[#DCDCDC] text-[#242525] border border-[#BDBDBD]"
                              }
                            `}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td className="p-4 text-[#797979]">
                          {item.date}
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Eye
                              size={18}
                              className="
                              cursor-pointer
                              text-[#5F5F5F]
                              hover:text-[#242525]
                              hover:scale-110
                              transition-all
                              duration-300
                            "
                            />

                            <MoreVertical
                              size={18}
                              className="cursor-pointer text-[#242525]"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
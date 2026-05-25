import MainLayout from "../components/layout/MainLayout.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

import {
  Users,
  Share2,
  //Eye,
  Pencil,
  Search,
  Filter,
  CalendarDays,
  FolderOpen,
  Trash2,
} from "lucide-react";

interface SharedItem {
  id: number;
  name: string;
  owner: string;
  email: string;
  sharedDate: string;
  activity: string;
  type: "Proposal" | "Project";
}


export default function SharedWithMe() {
  const navigate = useNavigate();
  const sharedItems: SharedItem[] = [
    {
      id: 1,
      name: "Smart Building Proposal",
      owner: "John Smith",
      email: "john@company.com",
      sharedDate: "May 20, 2024",
      //access: "Edit",
      activity: "2 hours ago",
      type: "Proposal",
    },
    {
      id: 2,
      name: "AI Analytics RFP",
      owner: "Sarah Johnson",
      email: "sarah@enterprise.com",
      sharedDate: "May 18, 2024",
      //access: "View",
      activity: "1 day ago",
      type: "Project",
    },
    {
      id: 3,
      name: "Cloud Infrastructure Docs",
      owner: "Michael Brown",
      email: "michael@cloudtech.com",
      sharedDate: "May 15, 2024",
      //access: "Admin",
      activity: "3 hours ago",
      type: "Proposal",
    },
  ];

  return (
    <MainLayout>
      <div
        className="
          min-h-screen
          p-8
          bg-gradient-to-br
          from-[#E6E6E6]
          via-[#FDFCFD]
          to-[#D8D8D8]
        "
      >
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            
            <div>
              <h1 className="text-4xl font-bold text-[#242525]">
                Shared with Me
              </h1>

              <p className="text-[#797979] mt-2">
                Access projects and proposals shared by your team
              </p>
            </div>

            {/* Search + Filter */}
            <div className="flex items-center gap-3">
              
              <div
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-[#C6C6C6]
                  bg-white
                  shadow-sm
                "
              >
                <Search size={18} className="text-[#797979]" />

                <input
                  type="text"
                  placeholder="Search shared items..."
                  className="
                    bg-transparent
                    outline-none
                    text-sm
                    text-[#242525]
                    placeholder:text-[#797979]
                  "
                />
              </div>

              {/* <button
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-2xl
                  bg-[#242525]
                  text-white
                  shadow-md
                  hover:opacity-90
                  transition
                "
              >
                <Filter size={17} />
                Filters
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          
          {/* Card 1 */}
          <motion.div
            whileHover={{
                y: -3,
                scale: 1.01,
            }}
            className="bg-[#FFFFFF]
            border
            border-[#C6C6C6]
            rounded-3xl
            p-6
            shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            >
            <div className="flex items-center justify-between mb-2">
              
              <div>
                <p className="text-sm text-[#797979]">
                  Shared Projects
                </p>

                <h2 className="text-3xl font-bold text-[#242525] mt-1">
                  24
                </h2>
              </div>

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
                "
              >
                <Users size={24} />
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
           <motion.div
            whileHover={{
                y: -3,
                scale: 1.01,
            }}
            className="bg-[#FFFFFF]
            border
            border-[#C6C6C6]
            rounded-3xl
            p-6
            shadow-[0_4px_20px_rgba(0,0,0,0.1)] "
            >
            <div className="flex items-center justify-between mb-5">
              
              <div>
                <p className="text-sm text-[#797979]">
                  Recent Shares
                </p>

                <h2 className="text-3xl font-bold text-[#242525] mt-1">
                  8
                </h2>
              </div>

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
                "
              >
                <Share2 size={24} />
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{
                y: -3,
                scale: 1.01,
            }}
            className="bg-[#FFFFFF]
            border
            border-[#C6C6C6]
            rounded-3xl
            p-6
            shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            >
            <div className="flex items-center justify-between mb-5">
              
              <div>
                <p className="text-sm text-[#797979]">
                  Pending Invitations
                </p>

                <h2 className="text-3xl font-bold text-[#242525] mt-1">
                  3
                </h2>
              </div>

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
                "
              >
                <CalendarDays size={24} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Filters */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="
            flex
            flex-wrap
            items-center
            gap-3
            mb-6
          "
        >
          {[
            "All Owners",
            "Last 30 Days",
            "Access Level",
            "Projects",
            "Proposals",
          ].map((filter) => (
            <button
              key={filter}
              className="
                px-4
                py-2
                rounded-xl
                border
                border-[#C6C6C6]
                bg-white
                text-sm
                text-[#242525]
                hover:bg-[#EFEFEF]
                transition
              "
            >
              {filter}
            </button>
          ))}
        </motion.div> */}

        {/* Shared Items Table */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            bg-[#FFFFFF]
            border
            border-[#C6C6C6]
            rounded-3xl
            overflow-hidden
            shadow-sm
          "
        >
          
          {/* Table Header */}
          <div
            className="
              grid
              grid-cols-[2.2fr_1.5fr_1fr_1fr_1.1fr]
              gap-6
              px-6
              py-4
              bg-[#F5F5F5]
              border-b
              border-[#C6C6C6]
              text-sm
              font-semibold
              text-[#242525]
            "
          >
            <p>Project </p>
            <p>Shared By</p>
            <p>Shared Date</p>
            {/* <p>Access</p> */}
            <p>Last Activity</p>
            <p>Actions</p>
          </div>

          {/* Rows */}
          {sharedItems.length > 0 ? (
            sharedItems.map((item) => (
              <div
                key={item.id}
                className="
                  grid
                  grid-cols-[2.2fr_1.5fr_1fr_1fr_1.1fr]
                  gap-6
                  items-center
                  px-6
                  py-5
                  border-b
                  border-[#E6E6E6]
                  hover:bg-[#EDEDED]
                  transition
                "
              >
                
                {/* Project */}
                <div className="flex items-center gap-3">
                  
                  <div
                    className="
                      w-11
                      h-11
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#242525]
                      to-[#4D4D4D]
                      flex
                      items-center
                      justify-center
                      text-white
                    "
                  >
                    <FolderOpen size={18} />
                  </div>

                  <div>
                    <h3 className="font-medium text-[#242525]">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#797979] mt-1">
                      {item.type}
                    </p>
                  </div>
                </div>

                {/* Owner */}
                <div>
                  <p className="text-sm font-medium text-[#242525]">
                    {item.owner}
                  </p>

                  <p className="text-xs text-[#797979] mt-1">
                    {item.email}
                  </p>
                </div>

                {/* Date */}
                <p className="text-sm text-[#797979]">
                  {item.sharedDate}
                </p>

                {/* Access
                <div>
                  <span
                    className={`
                      px-4
                      py-1.5
                      rounded-full
                      text-xs
                      font-medium
                      ${
                        item.access === "Admin"
                          ? "bg-[#242525] text-white"

                          : item.access === "Edit"
                          ? "bg-[#D9D9D9] text-[#242525]"

                          : "bg-[#EFEFEF] text-[#242525]"
                      }
                    `}
                  >
                    {item.access}
                  </span>
                </div> */}

                {/* Activity */}
                <p className="text-sm text-[#797979]">
                  {item.activity}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  
                  {/* <button
                    className="
                      p-2.5
                      rounded-xl
                      border
                      border-[#C6C6C6]
                      bg-white
                      hover:bg-[#EFEFEF]
                      transition
                    "
                  >
                    <Eye size={16} className="text-[#242525]" />
                  </button> */}

                  <button
                    onClick={() => navigate("/proposal-builder")}
                    className="
                      p-2.5
                      rounded-xl
                      border
                      border-[#C6C6C6]
                      bg-white
                      hover:bg-[#EFEFEF]
                      transition
                    "
                  >
                    <Pencil size={16} className="text-[#242525]" />
                  </button>

                  <button
                    className="
                      p-2.5
                      rounded-xl
                      border
                      border-[#C6C6C6]
                      bg-white
                      hover:bg-red-50
                      transition
                    "
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>

              </div>
            ))
          ) : (
            /* Empty State */
            <div className="py-24 flex flex-col items-center justify-center">
              
              <div
                className="
                  w-20
                  h-20
                  rounded-3xl
                  bg-[#EFEFEF]
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                <Share2 size={34} className="text-[#797979]" />
              </div>

              <h2 className="text-xl font-semibold text-[#242525]">
                No Shared Items
              </h2>

              <p className="text-[#797979] mt-2">
                No projects or proposals have been shared with you yet.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </MainLayout>
  );
}
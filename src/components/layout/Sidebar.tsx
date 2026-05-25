// Sidebar.jsx

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  LayoutDashboard,
  Mail,
  FileText,
  Settings,
  Users,
  FolderOpen,
  ClipboardList,
  Package,
  Database,
  MessageCircleMore,
  Upload,
  FileSearch,
  FilePenLine,
  FileCheck2,
} from "lucide-react";

interface MenuItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export default function Sidebar() {
  const location = useLocation();

  const menuItems: MenuSection[] = [
    {
      title: "MAIN",
      items: [
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: LayoutDashboard,
        },
      ],
    },

    {
      title: "PROJECTS",
      items: [
        {
          name: "All Projects",
          path: "/projects",
          icon: FolderOpen,
        },
        {
          name: "Shared with me",
          path: "/shared-with-me",
          icon: Users,
        },
        {
          name: "Templates",
          path: "/templates",
          icon:  ClipboardList,
        },
      ],
    },
    {
      title: "PROPOSALS",
      items: [
        {
          name: "RFPs / RFIs",
          path: "/proposals",
          icon:  FileSearch,
        },
        {
          name: "Drafts",
          path: "/drafts",
          icon: FilePenLine,
        },
        {
          name: "Sent Proposals",
          path: "/sent-proposals",
          icon:  FileCheck2,
        },
      ],
    },

    {
      title: "REQUESTS",
      items: [
        {
          name: "Emails",
          path: "/requests",
          icon: Mail,
        },
        {
          name: "Channels",
          path: "/channels",
          icon: MessageCircleMore,
        },
        {
          name: "Uploads",
          path: "/uploads",
          icon:  Upload,
        },
      ],
    },
    {
      title: "DATA & CONTENT",
      items: [
        {
          name: "Product Library ",
          path: "/product-library",
          icon:  Package,
        },
        // {
        //   name: "Document Library",
        //   path: "",
        //   icon: FileText,
        // },
        // {
        //   name: "Knowledge Base",
        //   path: "",
        //   icon:  Database,
        // },
      ],
    },

    {
      title: "ADMIN",
      items: [
        {
          name: "Settings",
          path: "/settings",
          icon: Settings,
        },
      ],
    },
  ];

  return (
    <div
      className="
        w-[270px]
        h-screen
        sticky
        top-0
        overflow-y-auto
        bg-[#FDFCFD]
        backdrop-blur-2xl
        border-r
        border-[#C6C6C6]
        shadow-[0_8px_24px_rgba(0,0,0,0.1)]
        flex
        flex-col
        justify-between
      "
    >
      {/* TOP */}
      <div>
        {/* Logo */}
        <div className="px-7 py-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div
              className="
                w-10
                h-10
                rounded-2xl
                bg-gradient-to-br
                from-[#242525]
                to-[#4D4D4D]
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-sm
                shadow-lg
              "
            >
              P
            </div>

            <div>
              <h1 className="text-xl font-bold text-[#242525]">
                Proposify
              </h1>

              <p className="text-xs text-[#797979]">
                Proposal Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-3 py-4 space-y-7">
          {menuItems.map((section, index) => (
            <div key={section.title}>
              <p
                className="
                  text-[9px]
                  font-bold
                  tracking-[1.5px]
                  text-[#797979]
                  px-1
                  mb-2
                "
              >
                {section.title}
              </p>

              <div className="space-y-2">
                {section.items.map((item) => {
                  const active = location.pathname === item.path;
                  const Icon = item.icon;

                  return (
                    <motion.div
                      whileHover={{ x: 4 }}
                      key={item.path}
                    >
                      <Link
                        to={item.path}
                        className={`
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          rounded-2xl
                          transition-all
                          duration-300
                          text-[13px] font-medium
                          ${
                            active
                              ? `
                                bg-[#242525]
                                text-[#FDFCFD]
                                shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                              `
                              : `
                                text-[#242525]
                                hover:bg-[#EDEDED]
                                hover:shadow-md
                              `
                          }
                        `}
                      >
                        <Icon size={15} />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USER */}
      <div className="p-5">
        <div
          className="
            p-4
            rounded-3xl
            bg-[#EDEDED]
            border
            border-[#C6C6C6]
            shadow-[0_4px_16px_rgba(0,0,0,0.1)]
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-[#242525]
                to-[#4D4D4D]
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-lg
              "
            >
              A
            </div>

            <div>
              <h3 className="font-semibold text-[#242525]">
                Admin User
              </h3>

              <p className="text-sm text-[#797979]">
                admin@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import MainLayout from "../components/layout/MainLayout.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";

import {
  FilePenLine,
  Search,
  Pencil,
  Eye,
  Plus,
} from "lucide-react";

interface Draft {
  id: number;
  title: string;
  project: string;
  updated: string;
}

export default function DraftProposals() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] =
    useState<string>("");

  const drafts: Draft[] = [
    {
      id: 1,
      title:
        "Smart Building Management Proposal",
      project:
        "Smart Building Management System",
      updated: "2 hours ago",
    },

    {
      id: 2,
      title:
        "AI Analytics Platform Proposal",
      project: "AI Analytics Platform",
      updated: "Yesterday",
    },

    {
      id: 3,
      title:
        "Cybersecurity Suite Proposal",
      project: "Cybersecurity Suite",
      updated: "3 days ago",
    },

    {
      id: 4,
      title:
        "IoT Monitoring System Proposal",
      project:
        "IoT Device Monitoring System",
      updated: "1 week ago",
    },
  ];

  const filteredDrafts = drafts.filter(
    (draft) =>
      draft.title
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
              Draft Proposals
            </h1>

            <p className="text-[#797979] mt-2">
              Continue editing your saved draft
              proposals
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full xl:w-[360px]">
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
              placeholder="Search drafts..."
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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7">
          {filteredDrafts.map((draft) => (
            <motion.div
              key={draft.id}
              whileHover={{ y: -5 }}
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
              {/* TOP */}
              <div className="flex items-start justify-between">
                
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
                  "
                >
                  <FilePenLine size={24} />
                </div>

                {/* BADGE */}
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
                  Draft
                </span>
              </div>

              {/* CONTENT */}
              <div className="mt-6">
                <h2
                  className="
                    text-xl
                    font-bold
                    text-[#242525]
                    leading-8
                  "
                >
                  {draft.title}
                </h2>

                <p className="text-[#797979] mt-3">
                  {draft.project}
                </p>

                <p className="text-sm text-[#797979] mt-4">
                  Last updated: {draft.updated}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-4 mt-7">
                
                {/* EDIT */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();

                    navigate(
                      "/proposal-builder"
                    );
                  }}
                  className="
                    flex-1
                    h-11
                    rounded-2xl
                    bg-[#242525]
                    hover:bg-[#3A3A3A]
                    text-white
                    font-medium
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <Pencil size={16} />
                  Edit
                </motion.button>

                {/* PREVIEW */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();

                    navigate("/preview");
                  }}
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    border
                    border-[#D8D8D8]
                    bg-[#FDFCFD]
                    hover:bg-[#EDEDED]
                    text-[#242525]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                  "
                >
                  <Eye size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredDrafts.length === 0 && (
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
              <FilePenLine
                size={42}
                className="text-[#797979]"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#242525] mt-6">
              No Drafts Found
            </h2>

            <p className="text-[#797979] mt-2">
              Start creating proposal drafts
            </p>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                navigate("/proposal-builder")
              }
              className="
                mt-6
                h-12
                px-6
                rounded-2xl
                bg-[#242525]
                hover:bg-[#3A3A3A]
                text-white
                font-medium
                shadow-lg
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
            >
              <Plus size={18} />
              Create Proposal
            </motion.button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
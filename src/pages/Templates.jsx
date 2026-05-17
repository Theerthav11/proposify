import MainLayout from "../components/layout/MainLayout";
import { useState } from "react";

import {
  Search,
  LayoutTemplate,
  Eye,
  Copy,
  Trash2,
  Download,
} from "lucide-react";

import { motion } from "framer-motion";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const categories = [
    "All",
    "Business",
    "Sales",
    "Marketing",
    "Freelance",
    "Startup",
  ];

  const templates = [
    {
      id: 1,
      title: "Business Proposal",
      category: "Business",
    },
    {
      id: 2,
      title: "Sales Pitch Deck",
      category: "Sales",
    },
    {
      id: 3,
      title: "Marketing Strategy",
      category: "Marketing",
    },
    {
      id: 4,
      title: "Freelancer Proposal",
      category: "Freelance",
    },
    {
      id: 5,
      title: "Startup Investment",
      category: "Startup",
    },
    {
      id: 6,
      title: "Client Proposal",
      category: "Business",
    },
  ];

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter(
          (t) => t.category === activeCategory
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
            mb-8
          "
        >
          <div>
            <h1 className="text-4xl font-bold text-[#242525]">
              Proposal Templates
            </h1>

            <p className="text-[#797979] mt-2">
              Browse and use reusable templates for
              faster proposal generation.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full xl:w-[420px]">
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
              placeholder="Search templates..."
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
        </div>

        {/* CATEGORY FILTERS */}
        <div
          className="
            bg-white/70
            backdrop-blur-xl
            border
            border-[#D8D8D8]
            rounded-3xl
            p-5
            shadow-md
            mb-8
          "
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  px-5
                  h-11
                  rounded-2xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activeCategory === category
                      ? `
                        bg-[#242525]
                        text-white
                        shadow-md
                      `
                      : `
                        bg-[#EDEDED]
                        text-[#4D4D4D]
                        hover:bg-[#242525]
                        hover:text-white
                      `
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* TEMPLATE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7">
          {filteredTemplates.map((template) => (
            <motion.div
              key={template.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
                group
                bg-white/75
                backdrop-blur-xl
                border
                border-[#D8D8D8]
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              {/* TEMPLATE PREVIEW */}
              <div
                className="
                  relative
                  h-56
                  bg-gradient-to-br
                  from-[#E6E6E6]
                  to-[#D8D8D8]
                  flex
                  items-center
                  justify-center
                "
              >
                {/* IMAGE SPACE */}
                {/* Replace this section with actual image later */}

                <div className="flex flex-col items-center text-[#797979]">
                  <LayoutTemplate size={44} />

                  <p className="mt-3 text-sm">
                    Template Preview
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div>
                  <h2 className="text-xl font-bold text-[#242525]">
                    {template.title}
                  </h2>

                  <div className="mt-3">
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
                      {template.category}
                    </span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-4 gap-3 mt-6">
                  {[
                    {
                      icon: Eye,
                      label: "Preview",
                    },
                    {
                      icon: Copy,
                      label: "Duplicate",
                    },
                    {
                      icon: Download,
                      label: "Download",
                    },
                    {
                      icon: Trash2,
                      label: "Delete",
                    },
                  ].map((action, index) => {
                    const Icon = action.icon;

                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="
                          h-12
                          rounded-2xl
                          border
                          border-[#D8D8D8]
                          hover:bg-[#242525]
                          hover:text-white
                          text-[#4D4D4D]
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-300
                          group/action
                        "
                      >
                        <Icon
                          size={18}
                          className="
                            group-hover/action:scale-110
                            transition-all
                          "
                        />
                      </motion.button>
                    );
                  })}
                </div>

                {/* USE TEMPLATE BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    w-full
                    h-12
                    mt-6
                    rounded-2xl
                    bg-[#242525]
                    hover:bg-[#3A3A3A]
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Use Template
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
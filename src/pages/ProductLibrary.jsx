import MainLayout from "../components/layout/MainLayout";
import { useState } from "react";

import {
  Search,
  Plus,
  FolderKanban,
  FileText,
  Image,
  Video,
  Link2,
  Upload,
  Eye,
  Copy,
  Trash2,
  Download,
  ChevronDown,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ProductLibrary() {
  const [activeTab, setActiveTab] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState("Smart Building System");

  const [searchTerm, setSearchTerm] =
    useState("");

  const tabs = [
    {
      name: "All",
      icon: FolderKanban,
    },
    {
      name: "Documents",
      icon: FileText,
    },
    {
      name: "Images",
      icon: Image,
    },
    {
      name: "Videos",
      icon: Video,
    },
    {
      name: "URLs",
      icon: Link2,
    },
  ];

  const assets = [
    {
      id: 1,
      type: "Documents",
      title: "Company Profile.pdf",
      size: "2.4 MB",
    },
    {
      id: 2,
      type: "Documents",
      title: "Technical Specification.docx",
      size: "1.2 MB",
    },
    {
      id: 3,
      type: "Images",
      title: "dashboard-preview.png",
      size: "4.1 MB",
    },
    {
      id: 4,
      type: "Videos",
      title: "product-demo.mp4",
      size: "18 MB",
    },
    {
      id: 5,
      type: "URLs",
      title: "https://companysite.com",
      size: "Website URL",
    },
  ];

  const filteredAssets = assets.filter(
    (asset) =>
      (activeTab === "All" ||
        asset.type === activeTab) &&
      asset.title
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
            mb-8
          "
        >
          <div>
            <h1 className="text-4xl font-bold text-[#242525]">
              Product Library
            </h1>

            <p className="text-[#797979] mt-2">
              Manage reusable proposal assets,
              documents, images, videos and URLs
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full xl:w-[380px]">
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
              placeholder={
                activeTab === "All"
                  ? "Search assets..."
                  : `Search ${activeTab.toLowerCase()}...`
              }
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
                shadow-sm
              "
            />
          </div>
        </div>

        {/* PROJECT + ACTIONS */}
        <div
          className="
            flex
            flex-col
            xl:flex-row
            xl:items-center
            xl:justify-between
            gap-5
            mb-8
          "
        >
          {/* PROJECT SELECT */}
          <div className="relative w-full lg:w-[320px]">
            <select
              value={selectedProject}
              onChange={(e) =>
                setSelectedProject(
                  e.target.value
                )
              }
              className="
                appearance-none
                w-full
                h-12
                px-4
                rounded-2xl
                border
                border-[#C6C6C6]
                bg-[#FDFCFD]
                text-[#242525]
                outline-none
                focus:border-[#242525]
              "
            >
              <option>
                Smart Building System
              </option>

              <option>
                AI Analytics Suite
              </option>

              <option>
                Cloud ERP Platform
              </option>
            </select>

            <ChevronDown
              size={18}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-[#797979]
                pointer-events-none
              "
            />
          </div>

          {/* ADD BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="
              h-12
              px-6
              rounded-2xl
              bg-[#242525]
              hover:bg-[#3A3A3A]
              text-white
              font-semibold
              shadow-lg
              transition-all
              duration-300
              flex
              items-center
              gap-2
              w-fit
            "
          >
            <Plus size={18} />
            Add Asset
          </motion.button>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.name}
                onClick={() =>
                  setActiveTab(tab.name)
                }
                className={`
                  h-12
                  px-5
                  rounded-2xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  ${
                    activeTab === tab.name
                      ? `
                        bg-[#242525]
                        text-white
                        shadow-lg
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
                <Icon size={17} />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* CONTENT HEADER */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
            mb-6
          "
        >
          <div>
            <h2 className="text-2xl font-bold text-[#242525]">
              {activeTab}
            </h2>

            <p className="text-[#797979] mt-1">
              Manage all assets for{" "}
              {selectedProject}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="
              h-12
              px-5
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
              w-fit
            "
          >
            <Upload size={17} />

            {activeTab === "All"
              ? "Upload Asset"
              : `Upload ${activeTab}`}
          </motion.button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7">
          {filteredAssets.map((asset) => (
            <motion.div
              key={asset.id}
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
              {/* PREVIEW */}
              <div
                className="
                  h-52
                  bg-gradient-to-br
                  from-[#E6E6E6]
                  to-[#D8D8D8]
                  flex
                  items-center
                  justify-center
                "
              >
                {asset.type === "Documents" && (
                  <FileText
                    size={55}
                    className="text-[#797979]"
                  />
                )}

                {asset.type === "Images" && (
                  <Image
                    size={55}
                    className="text-[#797979]"
                  />
                )}

                {asset.type === "Videos" && (
                  <Video
                    size={55}
                    className="text-[#797979]"
                  />
                )}

                {asset.type === "URLs" && (
                  <Link2
                    size={55}
                    className="text-[#797979]"
                  />
                )}

                {asset.type === "All" && (
                  <FolderKanban
                    size={55}
                    className="text-[#797979]"
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-[#EDEDED]
                      flex
                      items-center
                      justify-center
                      text-[#242525]
                    "
                  >
                    {asset.type === "Documents" && (
                      <FileText size={20} />
                    )}

                    {asset.type === "Images" && (
                      <Image size={20} />
                    )}

                    {asset.type === "Videos" && (
                      <Video size={20} />
                    )}

                    {asset.type === "URLs" && (
                      <Link2 size={20} />
                    )}
                  </div>

                  <div className="flex-1">
                    <h2
                      className="
                        text-lg
                        font-bold
                        text-[#242525]
                        break-words
                      "
                    >
                      {asset.title}
                    </h2>

                    <p className="text-sm text-[#797979] mt-2">
                      {asset.size}
                    </p>

                    <div className="mt-4">
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
                        {asset.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="grid grid-cols-4 gap-3 mt-6">
                  {[
                    Eye,
                    Copy,
                    Download,
                    Trash2,
                  ].map((Icon, index) => (
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
                      "
                    >
                      <Icon size={18} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredAssets.length === 0 && (
          <div
            className="
              mt-16
              flex
              flex-col
              items-center
              justify-center
              text-center
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
              <FolderKanban
                size={42}
                className="text-[#797979]"
              />
            </div>

            <h3 className="text-2xl font-bold text-[#242525] mt-6">
              No Assets Found
            </h3>

            <p className="text-[#797979] mt-2 max-w-md">
              Start uploading reusable proposal
              assets for your selected project.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="
                mt-6
                h-12
                px-6
                rounded-2xl
                bg-[#242525]
                hover:bg-[#3A3A3A]
                text-white
                font-semibold
                shadow-lg
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
            >
              <Plus size={18} />

              {activeTab === "All"
                ? "Add Asset"
                : `Add ${activeTab.slice(0, -1)}`}
            </motion.button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
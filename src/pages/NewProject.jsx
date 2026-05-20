import MainLayout from "../components/layout/MainLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FileText,
  Mail,
  MessageCircleMore,
  Image,
  Video,
  Link2,
  Upload,
  Pencil,
  Trash2,
  Plus,
  Save,
  ArrowRight,
} from "lucide-react";

export default function NewProject() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] =
    useState("email");

  const [selectedMail, setSelectedMail] =
    useState(0);

  const mails = [
    {
      title:
        "Smart Building Management RFI",
      sender: "john.smith@abc.com",
      date: "2h ago",
      preview:
        "Need proposal for smart building system with IoT integration and analytics dashboard.",
    },

    {
      title:
        "Cloud Migration Proposal Request",
      sender: "sarah@cloudtech.com",
      date: "1d ago",
      preview:
        "Looking for enterprise cloud migration proposal with security compliance.",
    },
  ];

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
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#242525]">
            Create New Project
          </h1>

          <p className="text-[#797979] mt-2">
            Create proposal projects using
            RFIs, product information and
            references
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
          
          {/* SECTION 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-[#D8D8D8]
              rounded-3xl
              p-7
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-7">
              
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
                <FileText size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#242525]">
                  Project Details
                </h2>

                <p className="text-[#797979] mt-1">
                  Basic project information
                </p>
              </div>
            </div>

            {/* INPUTS */}
            <div className="space-y-5">
              
              <div>
                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-[#242525]
                    mb-2
                  "
                >
                  Project Name
                </label>

                <input
                  type="text"
                  placeholder="Enter project name"
                  className="
                    w-full
                    h-12
                    px-4
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

              <div>
                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-[#242525]
                    mb-2
                  "
                >
                  Description
                </label>

                <textarea
                  rows={8}
                  placeholder="Describe the proposal project..."
                  className="
                    w-full
                    rounded-3xl
                    border
                    border-[#C6C6C6]
                    bg-[#FDFCFD]
                    p-5
                    outline-none
                    resize-none
                    focus:border-[#242525]
                    text-[#242525]
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-[#D8D8D8]
              rounded-3xl
              p-7
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-7">
              
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
                {selectedTab === "email" && (
                  <Mail size={24} />
                )}

                {selectedTab === "channel" && (
                  <MessageCircleMore size={24} />
                )}

                {selectedTab === "upload" && (
                  <Upload size={24} />
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#242525]">
                  RFI sources
                </h2>

                <p className="text-[#797979] mt-1">
                  Select RFI source
                </p>
              </div>
            </div>

            {/* SELECTOR */}
            <div className="flex gap-3 mb-6">
              
              {/* EMAIL */}
              <button
                onClick={() =>
                  setSelectedTab("email")
                }
                className={`
                  flex-1
                  py-3
                  rounded-2xl
                  border
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  ${
                    selectedTab === "email"
                      ? `
                        bg-[#242525]
                        text-white
                        border-[#242525]
                        shadow-md
                      `
                      : `
                        bg-[#FDFCFD]
                        text-[#4D4D4D]
                        border-[#D8D8D8]
                        hover:bg-[#242525]
                        hover:text-white
                      `
                  }
                `}
              >
                <Mail size={16} />
                Email
              </button>

              {/* CHANNEL */}
              <button
                onClick={() =>
                  setSelectedTab("channel")
                }
                className={`
                  flex-1
                  py-3
                  rounded-2xl
                  border
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  ${
                    selectedTab === "channel"
                      ? `
                        bg-[#242525]
                        text-white
                        border-[#242525]
                        shadow-md
                      `
                      : `
                        bg-[#FDFCFD]
                        text-[#4D4D4D]
                        border-[#D8D8D8]
                        hover:bg-[#242525]
                        hover:text-white
                      `
                  }
                `}
              >
                <MessageCircleMore
                  size={16}
                />
                Channel
              </button>

              {/* UPLOAD */}
              <button
                onClick={() =>
                  setSelectedTab("upload")
                }
                className={`
                  flex-1
                  py-3
                  rounded-2xl
                  border
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  ${
                    selectedTab === "upload"
                      ? `
                        bg-[#242525]
                        text-white
                        border-[#242525]
                        shadow-md
                      `
                      : `
                        bg-[#FDFCFD]
                        text-[#4D4D4D]
                        border-[#D8D8D8]
                        hover:bg-[#242525]
                        hover:text-white
                      `
                  }
                `}
              >
                <Upload size={16} />
                Upload
              </button>
            </div>

            {/* EMAIL + CHANNEL */}
            {(selectedTab === "email" ||
              selectedTab === "channel") && (
              <>
                {/* SELECT */}
                <div className="mb-5">
                  
                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      mb-2
                      text-[#242525]
                    "
                  >
                    Select Source
                  </label>

                  <select
                    className="
                      w-full
                      border
                      border-[#D8D8D8]
                      rounded-2xl
                      px-4
                      py-3
                      outline-none
                      focus:border-[#242525]
                      bg-[#FDFCFD]
                    "
                  >
                    {selectedTab === "email" ? (
                      <>
                        <option>
                          john.smith@abc.com
                        </option>

                        <option>
                          sarah@cloudtech.com
                        </option>
                      </>
                    ) : (
                      <>
                        <option>
                          #rfp-requests
                        </option>

                        <option>
                          #client-discussions
                        </option>
                      </>
                    )}
                  </select>
                </div>

                {/* MAIL LIST */}
                <div className="space-y-3 mb-6">
                  {mails.map((mail, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        setSelectedMail(index)
                      }
                      className={`
                        border
                        rounded-3xl
                        p-5
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:shadow-lg
                        hover:-translate-y-1
                        ${
                          selectedMail === index
                            ? `
                              border-[#242525]
                              bg-[#F3F3F3]
                            `
                            : `
                              border-[#D8D8D8]
                              bg-white/80
                            `
                        }
                      `}
                    >
                      <div className="flex justify-between mb-2">
                        
                        <h3
                          className="
                            font-semibold
                            text-sm
                            text-[#242525]
                          "
                        >
                          {mail.title}
                        </h3>

                        <span
                          className="
                            text-xs
                            text-[#797979]
                          "
                        >
                          {mail.date}
                        </span>
                      </div>

                      <p
                        className="
                          text-sm
                          font-medium
                          text-[#797979]
                          mb-2
                        "
                      >
                        {mail.sender}
                      </p>

                      <p
                        className="
                          text-sm
                          text-[#797979]
                          line-clamp-2
                        "
                      >
                        {mail.preview}
                      </p>
                    </div>
                  ))}
                </div>

                {/* PROMPT BOX */}
                <div>
                  
                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      mb-2
                      text-[#242525]
                    "
                  >
                    Selected RFI Content
                  </label>

                  <textarea
                    rows={6}
                    value={
                      mails[selectedMail]
                        ?.preview || ""
                    }
                    readOnly
                    className="
                      w-full
                      rounded-3xl
                      border
                      border-[#C6C6C6]
                      bg-[#FDFCFD]
                      p-5
                      outline-none
                      resize-none
                      focus:border-[#242525]
                      text-[#242525]
                    "
                  />
                </div>
              </>
            )}

            {/* UPLOAD SECTION */}
            {selectedTab === "upload" && (
              <>
                {/* TEXT INPUT */}
                <div className="mb-6">
                  
                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      mb-2
                      text-[#242525]
                    "
                  >
                    Enter Request
                  </label>

                  <textarea
                    rows={6}
                    placeholder="
          Type the proposal request manually...

          Example:
          Need proposal for Smart Building Management System with IoT integration and analytics dashboard.
                    "
                    className="
                      w-full
                      rounded-3xl
                      border
                      border-[#C6C6C6]
                      bg-[#FDFCFD]
                      p-5
                      outline-none
                      resize-none
                      focus:border-[#242525]
                      text-[#242525]
                    "
                  />
                </div>

                {/* DOC UPLOAD */}
                <div
                  className="
                    border-2
                    border-dashed
                    border-[#C6C6C6]
                    rounded-3xl
                    p-6
                    bg-[#FDFCFD]
                    transition-all
                    duration-300
                    hover:border-[#242525]
                  "
                >
                  <div className="flex items-center justify-between mb-5">
                    
                    <div className="flex items-center gap-3">
                      <FileText size={18} />

                      <h3 className="font-semibold text-[#242525]">
                        Upload Documents
                      </h3>
                    </div>

                    <button
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-[#242525]
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      p-4
                      rounded-2xl
                      bg-[#EDEDED]
                      hover:bg-[#D8D8D8]
                      transition-all
                      duration-300
                    "
                  >
                    <span className="text-sm">
                      Smart_Building_RFI.pdf
                    </span>

                    <button
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-white
                        hover:bg-[#242525]
                        hover:text-white
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                      "
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* SECTION 3 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-[#D8D8D8]
              rounded-3xl
              p-7
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-7">
              
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
                <Image size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#242525]">
                  Product Information
                </h2>

                <p className="text-[#797979] mt-1">
                  Product details and media
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <textarea
              rows={5}
              placeholder="Enter product description..."
              className="
                w-full
                rounded-3xl
                border
                border-[#C6C6C6]
                bg-[#FDFCFD]
                p-5
                outline-none
                resize-none
                focus:border-[#242525]
                text-[#242525]
              "
            />

            {/* MEDIA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              
              {/* IMAGES */}
              <div
                className="
                  border-2
                  border-dashed
                  border-[#C6C6C6]
                  rounded-3xl
                  p-6
                  bg-[#FDFCFD]
                  transition-all
                  duration-300
                  hover:border-[#242525]
                "
              >
                <div className="flex items-center justify-between mb-5">
                  
                  <div className="flex items-center gap-2">
                    <Image size={18} />

                    <h3 className="font-semibold">
                      Images
                    </h3>
                  </div>

                  <button
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[#242525]
                      text-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    p-4
                    rounded-2xl
                    bg-[#EDEDED]
                    hover:bg-[#D8D8D8]
                    transition-all
                    duration-300
                  "
                >
                  <span className="text-sm">
                    dashboard-preview.png
                  </span>

                  <div className="flex gap-2">
                    
                    {/* <button
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-white
                        hover:bg-[#242525]
                        hover:text-white
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                      "
                    >
                      <Pencil size={16} />
                    </button> */}

                    <button
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-white
                        hover:bg-[#242525]
                        hover:text-white
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                      "
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* VIDEOS */}
              <div
                className="
                  border-2
                  border-dashed
                  border-[#C6C6C6]
                  rounded-3xl
                  p-6
                  bg-[#FDFCFD]
                  transition-all
                  duration-300
                  hover:border-[#242525]
                "
              >
                <div className="flex items-center justify-between mb-5">
                  
                  <div className="flex items-center gap-2">
                    <Video size={18} />

                    <h3 className="font-semibold">
                      Videos
                    </h3>
                  </div>

                  <button
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[#242525]
                      text-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    p-4
                    rounded-2xl
                    bg-[#EDEDED]
                    hover:bg-[#D8D8D8]
                    transition-all
                    duration-300
                  "
                >
                  <span className="text-sm">
                    product-demo.mp4
                  </span>

                  <div className="flex gap-2">
                    
                    {/* <button
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-white
                        hover:bg-[#242525]
                        hover:text-white
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                      "
                    >
                      <Pencil size={16} />
                    </button> */}

                    <button
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-white
                        hover:bg-[#242525]
                        hover:text-white
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                      "
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTION 4 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-[#D8D8D8]
              rounded-3xl
              p-7
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-7">
              
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
                <Link2 size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#242525]">
                  References & Assets
                </h2>

                <p className="text-[#797979] mt-1">
                  URLs and documents
                </p>
              </div>
            </div>

            {/* URL */}
            <div className="mb-6">
              
              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-[#242525]
                  mb-2
                "
              >
                Add URL
              </label>

              <div className="flex gap-3">
                
                <input
                  type="text"
                  placeholder="https://example.com"
                  className="
                    flex-1
                    h-12
                    px-4
                    rounded-2xl
                    border
                    border-[#C6C6C6]
                    bg-[#FDFCFD]
                    outline-none
                    focus:border-[#242525]
                  "
                />

                <button
                  className="
                    h-12
                    px-5
                    rounded-2xl
                    bg-[#242525]
                    text-white
                    hover:bg-[#3A3A3A]
                    transition-all
                  "
                >
                  Add
                </button>
              </div>
            </div>

            {/* URL CARD */}
            <div
              className="
                flex
                items-center
                justify-between
                p-4
                rounded-2xl
                bg-[#EDEDED]
                hover:bg-[#D8D8D8]
                transition-all
                duration-300
                mb-6
              "
            >
              <span className="text-sm">
                https://companysite.com
              </span>

              <button
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-white
                  hover:bg-[#242525]
                  hover:text-white
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                "
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* DOCUMENTS */}
            <div
              className="
                border-2
                border-dashed
                border-[#C6C6C6]
                rounded-3xl
                p-6
                bg-[#FDFCFD]
                transition-all
                duration-300
                hover:border-[#242525]
              "
            >
              <div className="flex items-center justify-between mb-5">
                
                <div className="flex items-center gap-2">
                  <FileText size={18} />

                  <h3 className="font-semibold">
                    Documents
                  </h3>
                </div>

                <button
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-[#242525]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Plus size={18} />
                </button>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  p-4
                  rounded-2xl
                  bg-[#EDEDED]
                  hover:bg-[#D8D8D8]
                  transition-all
                  duration-300
                "
              >
                <span className="text-sm">
                  Company_Profile.pdf
                </span>

                <button
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-white
                    hover:bg-[#242525]
                    hover:text-white
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                  "
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-between mt-10">
          
          <motion.button
            onClick={() => navigate("/dashboard ")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              h-12
              px-6
              rounded-2xl
              border
              border-[#D8D8D8]
              bg-[#FDFCFD]
              hover:bg-[#EDEDED]
              text-[#242525]
              font-medium
              transition-all
              duration-300
            "
          >
            Cancel
          </motion.button>

          <div className="flex gap-4">
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                h-12
                px-6
                rounded-2xl
                border
                border-[#D8D8D8]
                bg-[#FDFCFD]
                hover:bg-[#EDEDED]
                text-[#242525]
                font-medium
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
            >
              <Save size={18} />
              Save Draft
            </motion.button>

            <motion.button
              onClick={() => navigate("/proposal-builder")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                h-12
                px-7
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
              Create Project

              {/* <ArrowRight size={18} /> */}
            </motion.button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
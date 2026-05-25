import MainLayout from "../components/layout/MainLayout.js";
import { useState } from "react";

import { motion } from "framer-motion";

import {
  Upload,
  FileText,
  X,
  Plus,
} from "lucide-react";

interface UploadedFile {
  id: number;
  name: string;
  size: string;
}

export default function UploadsPage() {
  const [manualRequest, setManualRequest] =
    useState<string>("");

  const [uploadedFiles, setUploadedFiles] =
    useState<UploadedFile[]>([
      {
        id: 1,
        name: "Smart_Building_RFP.pdf",
        size: "2.4 MB",
      },

      {
        id: 2,
        name: "Pricing_Request.docx",
        size: "1.1 MB",
      },
    ]);

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
            Upload Requests
          </h1>

          <p className="text-[#797979] mt-2">
            Upload request files or manually
            type proposal requirements
          </p>
        </div>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
          
          {/* MANUAL REQUEST */}
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
            <div className="flex items-center gap-4 mb-6">
              
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
                  Manual Request
                </h2>

                <p className="text-[#797979] mt-1">
                  Type proposal request manually
                </p>
              </div>
            </div>

            {/* TEXTAREA */}
            <textarea
              value={manualRequest}
              onChange={(e) =>
                setManualRequest(e.target.value)
              }
              placeholder="
Type your proposal request here...

Example:
We need a proposal for Smart Building Management System including IoT integration, analytics dashboard, maintenance support and deployment timeline.
              "
              className="
                w-full
                h-[280px]
                rounded-3xl
                border
                border-[#C6C6C6]
                bg-[#FDFCFD]
                p-5
                outline-none
                resize-none
                focus:border-[#242525]
                text-[#242525]
                leading-7
              "
            />

            {/* BUTTON */}
            <div className="flex justify-end mt-5">
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
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
                "
              >
                Generate Proposal
              </motion.button>
            </div>
          </motion.div>

          {/* FILE UPLOAD */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              bg-white/80
              backdrop-blur-xl
              border-2
              border-dashed
              border-[#C6C6C6]
              rounded-3xl
              p-8
              text-center
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              flex
              flex-col
              items-center
              justify-center
            "
          >
            {/* ICON */}
            <div
              className="
                w-20
                h-20
                rounded-3xl
                bg-[#EDEDED]
                flex
                items-center
                justify-center
              "
            >
              <Upload
                size={38}
                className="text-[#242525]"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-[#242525] mt-6">
              Upload Request Files
            </h2>

            <p className="text-[#797979] mt-3 max-w-md leading-7">
              Upload RFPs, requirement documents,
              PDFs, Word files or proposal
              requests.
            </p>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                mt-8
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
                inline-flex
                items-center
                gap-2
              "
            >
              <Plus size={18} />
              Choose Files
            </motion.button>
          </motion.div>
        </div>

        {/* UPLOADED FILES */}
        <div className="mt-10">
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#242525]">
              Uploaded Files
            </h2>

            <p className="text-[#797979] mt-1">
              Recently uploaded request
              documents
            </p>
          </div>

          {/* FILE LIST */}
          <div className="space-y-5">
            {uploadedFiles.map((file) => (
              <motion.div
                key={file.id}
                whileHover={{ y: -3 }}
                className="
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-[#D8D8D8]
                  rounded-3xl
                  p-5
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center justify-between gap-4">
                  
                  {/* LEFT */}
                  <div className="flex items-center gap-4">
                    
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
                      <h3
                        className="
                          text-lg
                          font-bold
                          text-[#242525]
                        "
                      >
                        {file.name}
                      </h3>

                      <p className="text-sm text-[#797979] mt-1">
                        {file.size}
                      </p>
                    </div>
                  </div>

                  {/* REMOVE BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      w-11
                      h-11
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
                    <X size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EMPTY STATE */}
        {uploadedFiles.length === 0 && (
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
              <Upload
                size={42}
                className="text-[#797979]"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#242525] mt-6">
              No Uploads Yet
            </h2>

            <p className="text-[#797979] mt-2">
              Uploaded request documents will
              appear here
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
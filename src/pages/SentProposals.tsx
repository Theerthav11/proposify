import MainLayout from "../components/layout/MainLayout.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.js";
import { motion } from "framer-motion";

import {
  Send,
  Mail,
  MessageCircleMore,
  Search,
  Eye,
  ArrowRight,
  Clock3,
  CheckCircle2,
  FileText,
} from "lucide-react";

type ActiveTab = "Email" | "Channels";

type ProposalStatus = "Viewed" | "Delivered";

interface SentProposal {
  id: number;
  title: string;
  company: string;
  method: ActiveTab;
  sentTo: string;
  date: string;
  status: ProposalStatus;
}

export default function SentProposals() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState<ActiveTab>("Email");

  const [searchTerm, setSearchTerm] =
    useState<string>("");

  const tabs: ActiveTab[] = [
    "Email",
    "Channels",
  ];

  const sentProposals: SentProposal[] = [
    {
      id: 1,
      title:
        "Smart Building Management Proposal",
      company: "TechNova Solutions",
      method: "Email",
      sentTo: "sarah@technova.com",
      date: "2 hours ago",
      status: "Viewed",
    },

    {
      id: 2,
      title:
        "Cloud Migration Service Proposal",
      company: "BluePeak Systems",
      method: "Channels",
      sentTo: "#rfp-requests",
      date: "Yesterday",
      status: "Delivered",
    },

    {
      id: 3,
      title:
        "Cybersecurity Audit Proposal",
      company: "SecureNet Corp",
      method: "Email",
      sentTo: "admin@securenet.com",
      date: "3 days ago",
      status: "Viewed",
    },
  ];

  const filteredProposals =
    sentProposals.filter(
      (proposal) =>
        proposal.method === activeTab &&
        proposal.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
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
              Send Proposals
            </h1>

            <p className="text-[#797979] mt-2">
              Send proposals through email or
              channels and track sent proposals
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
              placeholder="Search proposals..."
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

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 mb-10">
          
          {/* SEND VIA EMAIL */}
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
                <Mail size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#242525]">
                  Send via Email
                </h2>

                <p className="text-[#797979] mt-1">
                  Share proposal through email
                </p>
              </div>
            </div>

            <input
              type="email"
              placeholder="Enter recipient email"
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

            <div className="mt-5">
              <select
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
              >
                <option>
                  Select Proposal
                </option>

                <option>
                  Smart Building Proposal
                </option>

                <option>
                  AI Analytics Proposal
                </option>

                <option>
                  Cybersecurity Proposal
                </option>
              </select>
            </div>

            <Button variant = "action"
              // whileHover={{ scale: 1.03 }}
              // whileTap={{ scale: 0.97 }}
              // className="
              //   mt-6
              //   w-full
              //   h-12
              //   rounded-2xl
              //   bg-[#242525]
              //   hover:bg-[#3A3A3A]
              //   text-white
              //   font-medium
              //   shadow-lg
              //   //transition-all
              //   duration-300
              //   flex
              //   items-center
              //   justify-center
              //   gap-2
              // "
            >
              <Send size={18} />
              Send Proposal
            </Button>
          </motion.div>

          {/* SEND VIA CHANNELS */}
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
                <MessageCircleMore
                  size={24}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#242525]">
                  Send via Channels
                </h2>

                <p className="text-[#797979] mt-1">
                  Share proposal in connected
                  channels
                </p>
              </div>
            </div>

            <select
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
            >
              <option>
                Select Channel
              </option>

              <option>
                #rfp-requests
              </option>

              <option>
                #sales-team
              </option>

              <option>
                #client-discussions
              </option>
            </select>

            <div className="mt-5">
              <select
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
              >
                <option>
                  Select Proposal
                </option>

                <option>
                  Smart Building Proposal
                </option>

                <option>
                  AI Analytics Proposal
                </option>

                <option>
                  Cybersecurity Proposal
                </option>
              </select>
            </div>

            <Button variant = "action"
            //   whileHover={{ scale: 1.03 }}
            //   whileTap={{ scale: 0.97 }}
            //   className="
            //     mt-6
            //     w-full
            //     h-12
            //     rounded-2xl
            //     bg-[#242525]
            //     hover:bg-[#3A3A3A]
            //     text-white
            //     font-medium
            //     shadow-lg
            //     transition-all
            //     duration-300
            //     flex
            //     items-center
            //     justify-center
            //     gap-2
            //   "
            >
              <Send size={18} />
              Share Proposal
            </Button>
          </motion.div>
        </div>

        {/* FILTERS */}
        <div className="flex gap-4 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={
                activeTab === tab
                  ? "default"
                  : "outline"
              }
              onClick={() =>
                setActiveTab(tab)
              }
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* SENT PROPOSALS */}
        <div className="space-y-5">
          {filteredProposals.map(
            (proposal) => (
              <motion.div
                key={proposal.id}
                whileHover={{ y: -4 }}
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
                  <div className="flex gap-5">
                    
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
                      <FileText size={24} />
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
                          {proposal.method}
                        </span>

                        <span
                          className="
                            px-3
                            py-1
                            rounded-full
                            bg-[#EDEDED]
                            text-[#4D4D4D]
                            text-xs
                            font-medium
                            flex
                            items-center
                            gap-2
                          "
                        >
                          {proposal.status ===
                          "Viewed" ? (
                            <Eye size={13} />
                          ) : (
                            <CheckCircle2
                              size={13}
                            />
                          )}

                          {proposal.status}
                        </span>
                      </div>

                      <h2
                        className="
                          text-xl
                          font-bold
                          text-[#242525]
                          mt-4
                        "
                      >
                        {proposal.title}
                      </h2>

                      <p className="text-[#797979] mt-2">
                        {proposal.company}
                      </p>

                      <p className="text-sm text-[#797979] mt-2">
                        Sent to:{" "}
                        {proposal.sentTo}
                      </p>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          text-[#797979]
                          mt-3
                        "
                      >
                        <Clock3 size={15} />
                        {proposal.date}
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <Button
                    onClick={() =>
                      navigate("/preview")
                    }
                  >
                    <Eye size={17} />
                    View Proposal

                    <ArrowRight
                      size={16}
                    />
                  </Button>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* EMPTY STATE */}
        {filteredProposals.length ===
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
              <Send
                size={42}
                className="text-[#797979]"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#242525] mt-6">
              No Sent Proposals
            </h2>

            <p className="text-[#797979] mt-2">
              Sent proposals will appear here
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
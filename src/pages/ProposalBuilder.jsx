import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProposalBuilder() {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("builder");

  const [sections, setSections] = useState([
    {
      id: 1,
      name: "Executive Summary",
      checked: true,
      subsections: [
        {
          id: 11,
          name: "Subsection",
          version: "v2",
          checked: true,
        },
      ],
    },
    {
      id: 2,
      name: "Technical Overview",
      checked: true,
      subsections: [],
    },
    {
      id: 3,
      name: "Features & Benefits",
      checked: false,
      subsections: [],
    },
    {
      id: 4,
      name: "Compliance Information",
      checked: false,
      subsections: [],
    },
    {
      id: 5,
      name: "Pricing & Terms",
      checked: false,
      subsections: [],
    },
  ]);

  const [selectedMail, setSelectedMail] = useState(0);

  const mails = [
    {
      title: "RFP: Smart Building Management System",
      sender: "John Smith",
      preview:
        "Hi Team, Please provide your proposal for our Smart Building Management System...",
      date: "May 20",
    },
    {
      title: "Clarification on Requirements",
      sender: "John Smith",
      preview:
        "Could you please clarify the integration requirements...",
      date: "May 18",
    },
    {
      title: "Request for Pricing Details",
      sender: "John Smith",
      preview:
        "Please share the pricing details for the project...",
      date: "May 15",
    },
  ];

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      name: `Section ${sections.length + 1}`,
      checked: true,
      subsections: [],
    };

    setSections([...sections, newSection]);
  };

  const addSubsection = (sectionId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            subsections: [
              ...section.subsections,
              {
                id: Date.now(),
                name: "Subsection",
                version: "v1",
                checked: true,
              },
            ],
          };
        }

        return section;
      })
    );
  };

  const toggleSection = (sectionId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, checked: !section.checked }
          : section
      )
    );
  };

  const toggleSubsection = (sectionId, subsectionId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            subsections: section.subsections.map((sub) =>
              sub.id === subsectionId
                ? { ...sub, checked: !sub.checked }
                : sub
            ),
          };
        }

        return section;
      })
    );
  };

  return (
    <div className="h-screen bg-[#F5F3FF] p-3 overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="h-full bg-white rounded-3xl border border-[#E9D5FF] overflow-hidden flex shadow-xl">

        {/* LEFT PANEL */}
        <div className="w-[18%] border-r border-[#E9D5FF] flex flex-col bg-white">

          {/* HEADER */}
          <div className="p-4 flex items-center justify-between border-b border-[#E9D5FF]">
            <h2 className="text-xl font-bold text-[#4C1D95]">
              Sections
            </h2>

            <button
              onClick={addSection}
              className="bg-[#7C3AED] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#4C1D95] transition"
            >
              + Add
            </button>
          </div>

          {/* SECTION LIST */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {sections.map((section) => (
              <div
                key={section.id}
                className="border border-[#E9D5FF] rounded-2xl p-3 bg-[#FFFFFF] hover:bg-[#F5F3FF] transition"
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={section.checked}
                      onChange={() => toggleSection(section.id)}
                      className="w-5 h-5 accent-[#7C3AED]"
                    />

                    <span className="font-medium text-[#4C1D95] text-sm">
                      {section.name}
                    </span>
                  </div>

                  {section.checked && (
                    <div className="w-6 h-6 bg-[#7C3AED] rounded-md flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* ADD SECTION */}
            <button
              onClick={addSection}
              className="w-full bg-[#7C3AED] text-white py-3 rounded-2xl font-medium hover:bg-[#4C1D95] transition"
            >
              + Add Section
            </button>
          </div>
        </div>

        {/* EMAIL PANEL */}
        <div className="w-[26%] border-r border-[#E9D5FF] flex flex-col bg-white">

          {/* HEADER */}
          <div className="p-5 border-b border-[#E9D5FF]">
            <h1 className="text-2xl font-bold text-[#4C1D95]">
              RFP: Project Name
            </h1>
          </div>

          {/* CONTENT */}
          <div className="p-5 overflow-y-auto">

            {/* SOURCE SELECTOR */}
            <div className="flex gap-3 mb-6">

              <button
                onClick={() => setSelectedTab("email")}
                className={`flex-1 py-3 rounded-2xl border text-sm font-medium transition ${
                  selectedTab === "email"
                    ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                    : "bg-white text-[#6B7280] border-[#E9D5FF]"
                }`}
              >
                ✉️ Email
              </button>

              <button
                onClick={() => setSelectedTab("channel")}
                className={`flex-1 py-3 rounded-2xl border text-sm font-medium transition ${
                  selectedTab === "channel"
                    ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                    : "bg-white text-[#6B7280] border-[#E9D5FF]"
                }`}
              >
                💬 Channel
              </button>

              <button
                onClick={() => setSelectedTab("upload")}
                className={`flex-1 py-3 rounded-2xl border text-sm font-medium transition ${
                  selectedTab === "upload"
                    ? "bg-[#7C3AED] text-white border-[#7C3AED]"
                    : "bg-white text-[#6B7280] border-[#E9D5FF]"
                }`}
              >
                ⬆️ Upload
              </button>
            </div>

            {/* EMAIL SELECT */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-[#4C1D95]">
                Select Email ID
              </label>

              <select className="w-full border border-[#E9D5FF] rounded-xl px-4 py-3 outline-none focus:border-[#7C3AED]">
                <option>john.smith@abc.com</option>
              </select>
            </div>

            {/* SEARCH */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-[#4C1D95]">
                Mails (20)
              </label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A855F7]">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search mails..."
                  className="w-full border border-[#E9D5FF] rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#7C3AED]"
                />
              </div>
            </div>

            {/* MAIL LIST */}
            <div className="space-y-3">

              {mails.map((mail, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMail(index)}
                  className={`border rounded-2xl p-4 cursor-pointer transition ${
                    selectedMail === index
                      ? "border-[#7C3AED] bg-[#F5F3FF]"
                      : "border-[#E9D5FF] bg-white"
                  }`}
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-sm text-[#4C1D95]">
                      {mail.title}
                    </h3>

                    <span className="text-xs text-[#6B7280]">
                      {mail.date}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#6B7280] mb-2">
                    {mail.sender}
                  </p>

                  <p className="text-sm text-[#6B7280] line-clamp-2">
                    {mail.preview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUILDER PANEL */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white">

          {/* TOP */}
          <div className="p-5 border-b border-[#E9D5FF] overflow-y-auto">

            {/* SELECTED EMAIL */}
            <div className="border border-[#E9D5FF] rounded-2xl p-5 mb-5 bg-[#F5F3FF]">
              <div className="flex justify-between items-start mb-3">

                <div className="text-[#4C1D95]">
                  <p className="mb-1">
                    <span className="font-semibold">From:</span>{" "}
                    John Smith &lt;john.smith@abc.com&gt;
                  </p>

                  <p className="mb-1">
                    <span className="font-semibold">To:</span>{" "}
                    proposals@ourcompany.com
                  </p>

                  <p className="mb-1">
                    <span className="font-semibold">Subject:</span>{" "}
                    RFP: Smart Building Management System
                  </p>

                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    May 20, 2024
                  </p>
                </div>

                <button className="border border-[#A855F7] text-[#7C3AED] px-4 py-2 rounded-xl text-sm hover:bg-[#E9D5FF]">
                  ✏ Edit
                </button>
              </div>
            </div>

            {/* PROMPT */}
            <div className="border border-[#E9D5FF] rounded-2xl p-5 bg-white">
              <h3 className="font-semibold mb-3 text-[#4C1D95]">
                Prompt
              </h3>

              <p className="text-[#6B7280] leading-relaxed">
                Hi Team,
                <br /><br />
                Please provide your proposal for our Smart Building
                Management System.
                <br /><br />
                We are looking for details on architecture,
                features, timeline and cost.
                <br /><br />
                Thanks,
                <br />
                John Smith
              </p>
            </div>

            {/* TABS */}
            <div className="flex gap-8 mt-6 border-b border-[#E9D5FF]">
              {["builder", "attachments", "history"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`pb-3 font-medium capitalize ${
                    selectedTab === tab
                      ? "border-b-2 border-[#7C3AED] text-[#7C3AED]"
                      : "text-[#6B7280]"
                  }`}
                >
                  {tab === "history" ? "Version History" : tab}
                </button>
              ))}
            </div>

            {/* BUILDER */}
            {selectedTab === "builder" && (
              <div className="space-y-4 mt-5">

                {sections.map((section) => (
                  <div
                    key={section.id}
                    className="border border-[#E9D5FF] rounded-2xl overflow-hidden"
                  >
                    {/* HEADER */}
                    <div className="bg-[#F5F3FF] p-4 flex items-center justify-between">

                      <h3 className="font-semibold text-[#4C1D95]">
                        {section.name}
                      </h3>

                      <div className="flex items-center gap-3">

                        <button
                          onClick={() => {
                            const newName = prompt(
                              "Enter section name",
                              section.name
                            );

                            if (newName && newName.trim() !== "") {
                              setSections(
                                sections.map((s) =>
                                  s.id === section.id
                                    ? { ...s, name: newName }
                                    : s
                                )
                              );
                            }
                          }}
                          className="border border-[#A855F7] text-[#7C3AED] px-4 py-2 rounded-xl text-sm hover:bg-[#E9D5FF]"
                        >
                          ✏ Edit
                        </button>

                        <button
                          onClick={() => {
                            setSections(
                              sections.filter((s) => s.id !== section.id)
                            );
                          }}
                          className="border border-red-300 text-red-500 px-4 py-2 rounded-xl text-sm hover:bg-red-50"
                        >
                          🗑 Delete
                        </button>

                        <button
                          onClick={() => addSubsection(section.id)}
                          className="bg-[#7C3AED] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#4C1D95]"
                        >
                          + Add Subsection
                        </button>
                      </div>
                    </div>

                    {/* SUBSECTIONS */}
                    {section.subsections.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-5 border-t border-[#E9D5FF]"
                      >
                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              checked={sub.checked}
                              onChange={() =>
                                toggleSubsection(section.id, sub.id)
                              }
                              className="accent-[#7C3AED]"
                            />

                            <span className="font-medium text-[#4C1D95]">
                              {sub.name}
                            </span>

                            <select className="border border-[#E9D5FF] rounded-lg px-3 py-1 text-sm outline-none">
                              <option>{sub.version}</option>
                              <option>v1</option>
                              <option>v2</option>
                            </select>
                          </div>

                          <div className="flex gap-3">
                            <button className="border border-[#E9D5FF] px-4 py-2 rounded-xl text-sm text-[#4C1D95] hover:bg-[#F5F3FF]">
                              🔄 Regenerate
                            </button>

                            <button className="border border-[#E9D5FF] px-4 py-2 rounded-xl text-sm text-[#4C1D95] hover:bg-[#F5F3FF]">
                              Edit
                            </button>
                          </div>
                        </div>

                        {/* ATTACHMENT */}
                        <div className="mt-5">

                          <p className="text-sm font-medium mb-3 text-[#4C1D95]">
                            Attachment:
                          </p>

                          <div className="flex items-center gap-3 flex-wrap">

                            <button className="bg-[#7C3AED] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#4C1D95]">
                              📄 PDF
                            </button>

                            <button className="bg-[#A855F7] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#7C3AED]">
                              🔗 URL
                            </button>

                            <label className="bg-[#4C1D95] text-white px-4 py-2 rounded-xl text-sm cursor-pointer hover:opacity-90">
                              + Add
                              <input
                                type="file"
                                accept=".pdf"
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* ATTACHMENTS */}
            {selectedTab === "attachments" && (
              <div className="mt-5 border-2 border-dashed border-[#A855F7] rounded-2xl p-10 text-center bg-[#F5F3FF]">
                <p className="text-[#6B7280] mb-4">
                  Drag & drop files here
                </p>

                <button className="bg-[#7C3AED] text-white px-5 py-3 rounded-xl hover:bg-[#4C1D95]">
                  Upload Files
                </button>
              </div>
            )}

            {/* HISTORY */}
            {selectedTab === "history" && (
              <div className="space-y-4 mt-5">
                {[1, 2, 3].map((v) => (
                  <div
                    key={v}
                    className="border border-[#E9D5FF] rounded-2xl p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold text-[#4C1D95]">
                        Version {v}
                      </p>

                      <p className="text-sm text-[#6B7280]">
                        May {20 - v}, 2024
                      </p>
                    </div>

                    <button className="text-[#7C3AED] font-medium">
                      Restore
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div className="p-4 border-t border-[#E9D5FF] flex items-center justify-between bg-white">

            {/* FORMAT */}
            <div className="flex items-center gap-3">

              <select
                className="bg-[#7C3AED] text-white px-5 py-3 rounded-xl font-medium outline-none cursor-pointer hover:bg-[#4C1D95]"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Format
                </option>

                <option value="pdf">PDF</option>
                <option value="docx">Word (.docx)</option>
                <option value="ppt">PowerPoint</option>
                <option value="txt">Text File</option>
              </select>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">

              <button className="bg-[#A855F7] text-white px-5 py-3 rounded-xl font-medium hover:bg-[#7C3AED]">
                Save Draft
              </button>

              <button
                onClick={() => navigate("/preview")}
                className="bg-[#4C1D95] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#7C3AED]"
              >
                👁 Preview
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
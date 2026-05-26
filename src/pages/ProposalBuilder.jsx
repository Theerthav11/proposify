import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {DragDropContext,  Droppable,  Draggable} from "@hello-pangea/dnd";


export default function ProposalBuilder() {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("builder");
  const sectionRefs = useRef({});
  const [activeSectionId, setActiveSectionId] =useState(1);
  const [editingSubId, setEditingSubId] =useState(null);

  const [editingContent, setEditingContent] =
  useState("");
  const [isEditingPrompt, setIsEditingPrompt] =
    useState(false);

  const [promptText, setPromptText] =
    useState(`Hi Team,

    Please provide your proposal for our Smart Building
    Management System.

    We are looking for details on architecture,
    features, timeline and cost.

    Thanks,
    John Smith`); 
  const [sections, setSections] = useState(() => {

  const savedSections =
    localStorage.getItem("proposalSections");

  return savedSections
    ? JSON.parse(savedSections)
    : [
    {
      id: 1,
      name: "Executive Summary",
      checked: true,
      subsections: [
        {
          id: 11,

          name: "System Architecture",

          checked: true,

          currentVersion: "v1",

          versions: [
            {
              version: "v1",

              content: `
        The proposed platform uses scalable cloud-native architecture.

        Main Components:

        • React Frontend
        • Node.js Backend
        • PostgreSQL Database
        • AWS Deployment
              `,
            },

            {
              version: "v2",

              content: `
        Enhanced enterprise-ready architecture with scalable AI infrastructure.

        Included Technologies:

        • React + Tailwind Frontend
        • Express Backend
        • PostgreSQL + Redis
        • AWS Cloud Infrastructure
        • Docker Deployment
              `,
            },
          ],

          /* DEMO URL */

          url:
            "https://example.com/system-architecture-demo",

          /* USER UPLOADED FILE */

          document: null,

          /* AI GENERATED FILES */

          generatedFiles: [

            {
              type: "pdf",
              name: "summary.pdf",
            },

            {
              type: "doc",
              name: "architecture.docx",
            },

            {
              type: "pdf",
              name: "technical-overview.pdf",
            },

          ],
        }
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
  ];
});
  useEffect(() => {

    localStorage.setItem(
      "proposalSections",
      JSON.stringify(sections)
    );

  }, [sections]);


  // const mails = [
  //   {
  //     title: "RFP: Smart Building Management System",
  //     sender: "John Smith",
  //     preview:
  //       "Hi Team, Please provide your proposal for our Smart Building Management System...",
  //     date: "May 20",
  //   },
  //   {
  //     title: "Clarification on Requirements",
  //     sender: "John Smith",
  //     preview:
  //       "Could you please clarify the integration requirements...",
  //     date: "May 18",
  //   },
  //   {
  //     title: "Request for Pricing Details",
  //     sender: "John Smith",
  //     preview:
  //       "Please share the pricing details for the project...",
  //     date: "May 15",
  //   },
  // ];

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

              name: `System Design ${section.subsections.length + 1}`,

              checked: true,

              currentVersion: "v1",

              versions: [

                {

                  version: "v1",

                  content: `
This subsection was AI generated based on the proposal prompt.

Key Details:

• Business Requirements
• Technical Architecture
• System Features
• Deployment Strategy
• Estimated Timeline

This content can be edited, regenerated and version controlled.
                  `,

                },

              ],

              url: "",

              document: null,

              generatedFiles: [

                {
                  type: "pdf",
                  name: "generated-summary.pdf",
                },

                {
                  type: "doc",
                  name: "proposal-content.docx",
                },

              ],

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

        ? {
            ...section,
            checked: !section.checked,
          }

        : section

    )

  );

};

  const handleDragEnd = (result) => {

    if (!result.destination) return;

    const items = Array.from(sections);

    const [reorderedItem] = items.splice(
      result.source.index,
      1
    );

    items.splice(
      result.destination.index,
      0,
      reorderedItem
    );

    setSections(items);

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
      <div className="h-full w-full bg-white rounded-3xl border border-[#E9D5FF] flex shadow-xl overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-[18%] min-w-[280px] border-r border-[#E9D5FF] flex flex-col bg-white overflow-hidden">

          {/* HEADER */}
          <div className="p-4 flex items-center justify-center border-b border-[#E9D5FF]">
            <h2 className="text-xl font-bold text-[#4C1D95]">
              Sections
            </h2>

            {/* <button
              onClick={addSection}
              className="bg-[#7C3AED] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#4C1D95] transition"
            >
              + Add
            </button> */}
          </div>

          {/* SECTION LIST */}
          <DragDropContext onDragEnd={handleDragEnd}>

          <Droppable droppableId="sections">

            {(provided) => (

              <div
                className="flex-1 overflow-y-auto p-5 space-y-4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >

                {sections.map((section, index) => (

                  <Draggable
                    key={section.id.toString()}
                    draggableId={section.id.toString()}
                    index={index}
                  >

                    {(provided) => (

                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}

                        onClick={() => {

                          setActiveSectionId(section.id);

                          sectionRefs.current[
                            section.id
                          ]?.scrollIntoView({

                            behavior: "smooth",

                            block: "start",

                          });

                        }}

                        className={`
                          border
                          rounded-2xl
                          p-3
                          transition
                          cursor-pointer

                          ${
                            activeSectionId === section.id
                              ? "bg-[#EDE9FE] border-[#7C3AED]"
                              : "bg-white border-[#E9D5FF] hover:bg-[#F5F3FF]"
                          }
                        `}
                      >

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-3">

                            <input
                              type="checkbox"
                              checked={section.checked}
                              onChange={() =>
                                toggleSection(section.id)
                              }
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

                    )}

                  </Draggable>

                ))}

                {provided.placeholder}

                {/* ADD SECTION BUTTON */}

                <button
                  onClick={addSection}
                  className="
                    w-full
                    bg-[#7C3AED]
                    text-white
                    py-3
                    rounded-2xl
                    font-medium
                    hover:bg-[#4C1D95]
                    transition
                  "
                >
                  + Add Section
                </button>

              </div>

            )}

          </Droppable>

        </DragDropContext>
        </div>

        {/* EMAIL PANEL */}
       

        {/* BUILDER PANEL */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">

          {/* TOP */}
          <div className="flex-1 p-5 border-b border-[#E9D5FF] overflow-y-auto min-h-0">

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
              </div>
            </div>

            {/* PROMPT */}
            <div className="relative border border-[#E9D5FF] rounded-2xl p-5 bg-white">

              {/* EDIT BUTTON */}
              <div className="absolute top-3 right-3">
                <button
                  onClick={() =>
                    setIsEditingPrompt(
                      !isEditingPrompt
                    )
                  }
                  className="border border-[#A855F7] text-[#7C3AED] px-4 py-2 rounded-xl text-sm hover:bg-[#E9D5FF] bg-white"
                >
                  {isEditingPrompt
                    ? "💾 Save"
                    : "✏ Edit"}
                </button>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold mb-3 text-[#4C1D95]">
                Prompt
              </h3>

              {/* CONTENT */}
               {/* TEXTAREA */}
            {isEditingPrompt ? (

              <textarea
                value={promptText}
                onChange={(e) =>
                  setPromptText(
                    e.target.value
                  )
                }
                className="
                  w-full
                  min-h-[220px]
                  border
                  border-[#D8B4FE]
                  rounded-xl
                  p-4
                  outline-none
                  resize-none
                  text-[#6B7280]
                "
              />

            ) : (

              <p className="text-[#6B7280] leading-relaxed whitespace-pre-line">
                {promptText}
              </p>

            )}

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

                    ref={(el) =>
                      (sectionRefs.current[
                        section.id
                      ] = el)
                    }

                    className="
                      border
                      border-[#E9D5FF]
                      rounded-2xl
                      overflow-hidden
                    "
                  >
                    {/* HEADER */}
                    <div className="bg-[#F5F3FF] p-4 flex items-center justify-between">

                      <h3 className="font-semibold text-[#4C1D95] text-xl">
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
                      className="border-t border-[#E9D5FF]"
                    >

                      {/* HEADER */}
                      <div className="bg-[#F8F5FF] p-4 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                          <input
                            type="checkbox"
                            checked={sub.checked}
                            onChange={() =>
                              toggleSubsection(
                                section.id,
                                sub.id
                              )
                            }
                            className="accent-[#7C3AED]"
                          />

                          <h3 className="font-semibold text-[#4C1D95] text-lg">
                            {sub.name}
                          </h3>

                         <select
                            value={sub.currentVersion}
                            onChange={(e) => {

                              setSections(
                                sections.map((sec) => {

                                  if (sec.id === section.id) {

                                    return {
                                      ...sec,

                                      subsections:
                                        sec.subsections.map((s) =>
                                          s.id === sub.id
                                            ? {
                                                ...s,
                                                currentVersion:
                                                  e.target.value,
                                              }
                                            : s
                                        ),
                                    };
                                  }

                                  return sec;
                                })
                              );

                            }}
                            className="
                              border
                              border-[#D8B4FE]
                              rounded-lg
                              px-3
                              py-1
                              text-sm
                              outline-none
                            "
                          >

                            {sub.versions.map((v) => (
                              <option
                                key={v.version}
                                value={v.version}
                              >
                                {v.version}
                              </option>
                            ))}

                          </select>

                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex gap-3">

                          {/* REGENERATE */}
                          <button
                            onClick={() => {

                            setSections(
                              sections.map((sec) => {

                                if (sec.id === section.id) {

                                  return {

                                    ...sec,

                                    subsections:
                                      sec.subsections.map((s) => {

                                        if (s.id === sub.id) {

                                          const nextVersion =
                                            `v${
                                              s.versions.length + 1
                                            }`;

                                          return {

                                            ...s,

                                            currentVersion:
                                              nextVersion,

                                            versions: [

                                              ...s.versions,

                                              {
                                                version:
                                                  nextVersion,

                                                content:
                                                  `AI regenerated content for ${s.name} (${nextVersion})`,
                                              },
                                            ],
                                          };
                                        }

                                        return s;
                                      }),
                                  };
                                }

                                return sec;
                              })
                            );

                          }}
                            className="bg-[#7C3AED] text-white px-4 py-2 rounded-xl text-sm"
                          >
                            🔄 Regenerate
                          </button>

                          {/* EDIT */}
                          <button
                            onClick={() => {
                              setEditingSubId(sub.id);
                              setEditingContent(

                                sub.versions.find(
                                  (v) =>
                                    v.version ===
                                    sub.currentVersion
                                )?.content || ""

                              );
                            }}
                            className="border border-[#D8B4FE] px-4 py-2 rounded-xl text-sm"
                          >
                            ✏ Edit
                          </button>

                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-5">

                        {/* SUBSECTION NAME */}
                        {/* <h4 className="text-xl font-semibold text-[#4C1D95] mb-4">
                          {sub.name}
                        </h4> */}

                        {/* EDIT MODE */}
                        {editingSubId === sub.id ? (

                          <div className="space-y-4">

                            <textarea
                              value={editingContent}
                              onChange={(e) =>
                                setEditingContent(
                                  e.target.value
                                )
                              }
                              className="
                                w-full
                                min-h-[220px]
                                border
                                border-[#D8B4FE]
                                rounded-xl
                                p-4
                                outline-none
                              "
                            />

                            <button
                              onClick={() => {

                                setSections(
                                  sections.map((sec) => {
                                    if (sec.id === section.id) {

                                      return {
                                        ...sec,

                                        subsections:
                                          sec.subsections.map(
                                            (s) =>
                                              s.id === sub.id
                                                ? {
                                                    ...s,
                                                    versions: s.versions.map(
                                                    (v) =>
                                                      v.version ===
                                                      s.currentVersion
                                                        ? {
                                                            ...v,
                                                            content:
                                                              editingContent,
                                                          }
                                                        : v
                                                  ),
                                                  }
                                                : s
                                          ),
                                      };
                                    }

                                    return sec;
                                  })
                                );

                                setEditingSubId(null);

                              }}
                              className="
                                bg-[#7C3AED]
                                text-white
                                px-5
                                py-2
                                rounded-xl
                              "
                            >
                              Save Content
                            </button>

                          </div>

                        ) : (

                          /* NORMAL CONTENT */
                          <div
                            className="
                              text-[#374151]
                              leading-relaxed
                              whitespace-pre-line
                            "
                          >
                            {
                              sub.versions.find(
                                (v) =>
                                  v.version ===
                                  sub.currentVersion
                              )?.content
                            }
                          </div>

                        )}

                      </div>

                      {/* ATTACHMENTS */}

                      <div className="border-t border-[#E9D5FF] p-5 bg-[#FAFAFF]">

                        <h4 className="font-semibold text-[#4C1D95] mb-4">
                          Attachments
                        </h4>

                        {/* URL INPUT */}
                        {/* <div className="mb-4">

                          <input
                            type="text"
                            placeholder="Add URL..."
                            value={sub.url}
                            onChange={(e) => {

                              setSections(
                                sections.map((sec) => {

                                  if (sec.id === section.id) {

                                    return {
                                      ...sec,

                                      subsections:
                                        sec.subsections.map((s) =>
                                          s.id === sub.id
                                            ? {
                                                ...s,
                                                url: e.target.value,
                                              }
                                            : s
                                        ),
                                    };
                                  }

                                  return sec;
                                })
                              );

                            }}
                            className="
                              w-[260px]
                              border
                              border-[#D8B4FE]
                              rounded-lg
                              px-3
                              py-2
                              outline-none
                              text-sm
                            "
                          />

                        </div> */}


                        {/* ATTACHMENT LIST */}
                        <div className="mt-5 flex flex-wrap gap-3">

                          {/* SHOW URL */}
                          {sub.url && (

                            <div
                              className="
                                border
                                border-[#E9D5FF]
                                bg-[#F5F3FF]
                                rounded-xl
                                px-4
                                py-3
                              "
                            >
                              <a
                                href={sub.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-[#7C3AED] font-medium"
                              >
                                🔗 Demo URL
                              </a>
                            </div>

                          )}

                          {/* SHOW GENERATED FILES */}
                          {sub.generatedFiles?.map((file, index) => (

                            <div
                              key={index}
                              className="
                                border
                                border-[#E9D5FF]
                                bg-[#F5F3FF]
                                rounded-xl
                                px-4
                                py-3
                              "
                            >

                              <span className="text-sm text-[#4C1D95]">

                                {file.type === "pdf"
                                  ? "📄"
                                  : "📘"}

                                {" "}

                                {file.name}

                              </span>

                            </div>

                          ))}

                          
                        {/* UPLOAD BUTTON */}
                        <label
                          className="
                            bg-[#4C1D95]
                            text-white
                            px-4
                            py-2
                            rounded-xl
                            text-sm
                            cursor-pointer
                            inline-block
                          "
                        >

                          + Upload File

                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => {

                              const file = e.target.files[0];

                              setSections(
                                sections.map((sec) => {

                                  if (sec.id === section.id) {

                                    return {
                                      ...sec,

                                      subsections:
                                        sec.subsections.map((s) =>
                                          s.id === sub.id
                                            ? {
                                                ...s,
                                                document: {
                                                  name: file.name,
                                                  size: file.size,
                                                  type: file.type,
                                                },
                                              }
                                            : s
                                        ),
                                    };
                                  }

                                  return sec;
                                })
                              );

                            }}
                          />

                        </label>

                          {/* SHOW UPLOADED FILE */}
                          {sub.document && (

                            <div
                              className="
                                border
                                border-[#E9D5FF]
                                bg-[#F5F3FF]
                                rounded-xl
                                px-4
                                py-3
                              "
                            >

                              <span className="text-sm text-[#4C1D95]">
                                📎 {sub.document.name}
                              </span>

                            </div>

                          )}

                        </div>

                      </div>

                    </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

           {/* ATTACHMENT */}
           {selectedTab === "attachments" && (

              <div className="mt-5">

                <div className="flex flex-col gap-3">

                  {sections.flatMap((section) =>

                    section.subsections.flatMap((sub) => [

                      /* URL */

                      ...(sub.url
                        ? [
                            <a
                              key={`${sub.id}-url`}
                              href={sub.url}
                              target="_blank"
                              rel="noreferrer"
                              className="
                                border
                                border-[#D8B4FE]
                                bg-white
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                text-[#7C3AED]
                              "
                            >
                              🔗 Demo URL
                            </a>,
                          ]
                        : []),

                      /* GENERATED FILES */

                      ...(sub.generatedFiles || []).map(
                        (file, index) => (

                          <div
                            key={`${sub.id}-generated-${index}`}
                            className="
                              border
                              border-[#D8B4FE]
                              bg-white
                              rounded-xl
                              px-4
                              py-3
                            "
                          >

                            <span className="text-sm text-[#4C1D95]">

                              {file.type === "pdf"
                                ? "📄"
                                : "📘"}

                              {" "}

                              {file.name}

                            </span>

                          </div>

                        )
                      ),

                      /* UPLOADED FILE */

                      ...(sub.document
                        ? [
                            <div
                              key={`${sub.id}-upload`}
                              className="
                                border
                                border-[#D8B4FE]
                                bg-white
                                rounded-xl
                                px-4
                                py-3
                              "
                            >

                              <span className="text-sm text-[#4C1D95]">
                                📎 {sub.document.name}
                              </span>

                            </div>,
                          ]
                        : []),

                    ])

                  )}

                </div>

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
          <div className="p-4 border-t border-[#E9D5FF] flex justify-end bg-white">

            {/* FORMAT */}
            {/* <div className="flex items-center gap-3">

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
            </div> */}

            {/* BUTTONS */}
            <div className="flex items-center gap-3 justify-end">

              {/* <button className="bg-[#A855F7] text-white px-5 py-3 rounded-xl font-medium hover:bg-[#7C3AED]">
                Save Draft
              </button> */}

              <button
                onClick={() => navigate("/generate")}
                className="bg-[#4C1D95] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#7C3AED]"
              >
               Generate
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
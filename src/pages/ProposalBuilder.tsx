import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import type { DropResult } from "@hello-pangea/dnd";

/* =========================================================
   TYPES
========================================================= */

interface VersionType {
  version: string;
  content: string;
}

interface GeneratedFileType {
  type: string;
  name: string;
}

interface DocumentType {
  name: string;
  size: number;
  type: string;
}

interface SubsectionType {
  id: number;
  name: string;
  checked: boolean;
  currentVersion: string;
  versions: VersionType[];
  url: string;
  document: DocumentType | null;
  generatedFiles: GeneratedFileType[];
}

interface SectionType {
  id: number;
  name: string;
  checked: boolean;
  subsections: SubsectionType[];
}

export default function ProposalBuilder() {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] =
    useState<string>("builder");

  const sectionRefs =
    useRef<Record<number, HTMLDivElement | null>>({});

  const [activeSectionId, setActiveSectionId] =
    useState<number>(1);

  const [editingSubId, setEditingSubId] =
    useState<number | null>(null);

  const [editingContent, setEditingContent] =
    useState<string>("");

  const [isEditingPrompt, setIsEditingPrompt] =
    useState<boolean>(false);

  const [promptText, setPromptText] =
    useState<string>(`Hi Team,

Please provide your proposal for our Smart Building
Management System.

We are looking for details on architecture,
features, timeline and cost.

Thanks,
John Smith`);

  const [sections, setSections] =
    useState<SectionType[]>(() => {
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

                  url:
                    "https://example.com/system-architecture-demo",

                  document: null,

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
          ];
    });

  useEffect(() => {
    localStorage.setItem(
      "proposalSections",
      JSON.stringify(sections)
    );
  }, [sections]);

  /* =========================================================
     ADD SECTION
  ========================================================= */

  const addSection = () => {
    const newSection: SectionType = {
      id: Date.now(),
      name: `Section ${sections.length + 1}`,
      checked: true,
      subsections: [],
    };

    setSections([...sections, newSection]);
  };

  /* =========================================================
     ADD SUBSECTION
  ========================================================= */

  const addSubsection = (
    sectionId: number
  ) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,

            subsections: [
              ...section.subsections,

              {
                id: Date.now(),

                name: `System Design ${
                  section.subsections.length + 1
                }`,

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

  /* =========================================================
     TOGGLE SECTION
  ========================================================= */

  const toggleSection = (
    sectionId: number
  ) => {
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

  /* =========================================================
     TOGGLE SUBSECTION
  ========================================================= */

  const toggleSubsection = (
    sectionId: number,
    subsectionId: number
  ) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,

            subsections:
              section.subsections.map((sub) =>
                sub.id === subsectionId
                  ? {
                      ...sub,
                      checked: !sub.checked,
                    }
                  : sub
              ),
          };
        }

        return section;
      })
    );
  };

  /* =========================================================
     DRAG END
  ========================================================= */

  const handleDragEnd = (
    result: DropResult
  ) => {
    if (!result.destination) return;

    const items =
      Array.from(sections);

    const [reorderedItem] = items.splice(
      result.source.index,
      1
    );

    if (!reorderedItem) return;

    items.splice(
      result.destination.index,
      0,
      reorderedItem
    );

    setSections(items);
  };

  return (
    <div className="h-screen bg-[#E6E6E6] p-3 overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="h-full w-full bg-[#FDFCFD] rounded-3xl border border-[#C6C6C6] flex shadow-xl overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-[18%] min-w-[280px] border-r border-[#C6C6C6] flex flex-col bg-[#FDFCFD] overflow-hidden">

          {/* HEADER */}
          <div className="p-4 flex items-center justify-center border-b border-[#C6C6C6]">
            <h2 className="text-xl font-bold text-[#242525]">
              Sections
            </h2>
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
                              activeSectionId ===
                              section.id
                                ? "bg-[#E6E6E6] border-[#242525]"
                                : "bg-[#FDFCFD] border-[#C6C6C6] hover:bg-[#EFEFEF]"
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">

                              <input
                                type="checkbox"
                                checked={section.checked}
                                onChange={() =>
                                  toggleSection(
                                    section.id
                                  )
                                }
                                className="w-5 h-5 accent-[#242525]"
                              />

                              <span className="font-medium text-[#242525] text-sm">
                                {section.name}
                              </span>

                            </div>

                            {section.checked && (
                              <div className="w-6 h-6 bg-[#242525] rounded-md flex items-center justify-center text-white text-xs">
                                ✓
                              </div>
                            )}

                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}

                  {/* ADD SECTION */}
                  <button
                    onClick={addSection}
                    className="
                      w-full
                      bg-[#242525]
                      text-white
                      py-3
                      rounded-2xl
                      font-medium
                    "
                  >
                    + Add Section
                  </button>

                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        {/* BUILDER PANEL */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">

          {/* TOP */}
          <div className="flex-1 p-5 border-b border-[#C6C6C6] overflow-y-auto min-h-0">

            {/* PROMPT */}
            <div className="relative border border-[#C6C6C6] rounded-2xl p-5 bg-[#FDFCFD]">

              <div className="absolute top-3 right-3">
                <button
                  onClick={() =>
                    setIsEditingPrompt(
                      !isEditingPrompt
                    )
                  }
                  className="border border-[#C6C6C6] text-[#242525] px-4 py-2 rounded-xl text-sm"
                >
                  {isEditingPrompt
                    ? "💾 Save"
                    : "✏ Edit"}
                </button>
              </div>

              <h3 className="font-semibold mb-3 text-[#242525]">
                Prompt
              </h3>

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
                    border-[#C6C6C6]
                    rounded-xl
                    p-4
                    outline-none
                    resize-none
                  "
                />
              ) : (
                <p className="text-[#797979] whitespace-pre-line">
                  {promptText}
                </p>
              )}
            </div>

            {/* BUILDER */}
            <div className="space-y-4 mt-5">

              {sections.map((section) => (
                <div
                  key={section.id}
                  ref={(el) => {
                    sectionRefs.current[
                      section.id
                    ] = el;
                  }}
                  className="border border-[#C6C6C6] rounded-2xl overflow-hidden bg-[#FDFCFD]"
                >

                  {/* HEADER */}
                  <div className="bg-[#F3F3F3] p-4 flex items-center justify-between">

                    <h3 className="font-semibold text-[#242525] text-xl">
                      {section.name}
                    </h3>

                    <div className="flex items-center gap-3">

                      {/* EDIT */}
                      <button
                        onClick={() => {
                          const newName = prompt(
                            "Enter section name",
                            section.name
                          );

                          if (
                            newName &&
                            newName.trim() !== ""
                          ) {
                            setSections(
                              sections.map((s) =>
                                s.id === section.id
                                  ? {
                                      ...s,
                                      name: newName,
                                    }
                                  : s
                              )
                            );
                          }
                        }}
                        className="border border-[#C6C6C6] text-[#242525] px-4 py-2 rounded-xl text-sm"
                      >
                        ✏ Edit
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => {
                          setSections(
                            sections.filter(
                              (s) =>
                                s.id !== section.id
                            )
                          );
                        }}
                        className="border border-[#C6C6C6] text-red-500 px-4 py-2 rounded-xl text-sm"
                      >
                        🗑 Delete
                      </button>

                      {/* ADD SUBSECTION */}
                      <button
                        onClick={() =>
                          addSubsection(section.id)
                        }
                        className="bg-[#242525] text-white px-4 py-2 rounded-xl text-sm"
                      >
                        + Add Subsection
                      </button>

                    </div>
                  </div>

                  {/* SUBSECTIONS */}
                  {section.subsections.map(
                    (sub) => (
                      <div
                        key={sub.id}
                        className="border-t border-[#C6C6C6]"
                      >

                        {/* HEADER */}
                        <div className="bg-[#F8F8F8] p-4 flex items-center justify-between">

                          <div className="flex items-center gap-3">

                            <input
                              type="checkbox"
                              checked={
                                sub.checked
                              }
                              onChange={() =>
                                toggleSubsection(
                                  section.id,
                                  sub.id
                                )
                              }
                              className="accent-[#242525]"
                            />

                            <h3 className="font-semibold text-[#242525] text-lg">
                              {sub.name}
                            </h3>

                            {/* VERSION */}
                            <select
                              value={
                                sub.currentVersion
                              }
                              onChange={(e) => {
                                setSections(
                                  sections.map(
                                    (sec) => {
                                      if (
                                        sec.id ===
                                        section.id
                                      ) {
                                        return {
                                          ...sec,

                                          subsections:
                                            sec.subsections.map(
                                              (
                                                s
                                              ) =>
                                                s.id ===
                                                sub.id
                                                  ? {
                                                      ...s,
                                                      currentVersion:
                                                        e
                                                          .target
                                                          .value,
                                                    }
                                                  : s
                                            ),
                                        };
                                      }

                                      return sec;
                                    }
                                  )
                                );
                              }}
                              className="border border-[#C6C6C6] rounded-lg px-3 py-1 text-sm"
                            >
                              {sub.versions.map(
                                (v) => (
                                  <option
                                    key={
                                      v.version
                                    }
                                    value={
                                      v.version
                                    }
                                  >
                                    {
                                      v.version
                                    }
                                  </option>
                                )
                              )}
                            </select>

                          </div>

                          <div className="flex gap-3">

                            {/* REGENERATE */}
                            <button
                              onClick={() => {
                                setSections(
                                  sections.map(
                                    (sec) => {
                                      if (
                                        sec.id ===
                                        section.id
                                      ) {
                                        return {
                                          ...sec,

                                          subsections:
                                            sec.subsections.map(
                                              (
                                                s
                                              ) => {
                                                if (
                                                  s.id ===
                                                  sub.id
                                                ) {
                                                  const nextVersion =
                                                    `v${
                                                      s
                                                        .versions
                                                        .length +
                                                      1
                                                    }`;

                                                  return {
                                                    ...s,

                                                    currentVersion:
                                                      nextVersion,

                                                    versions:
                                                      [
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
                                              }
                                            ),
                                        };
                                      }

                                      return sec;
                                    }
                                  )
                                );
                              }}
                              className="bg-[#242525] text-white px-4 py-2 rounded-xl text-sm"
                            >
                              🔄 Regenerate
                            </button>

                            {/* EDIT */}
                            <button
                              onClick={() => {
                                setEditingSubId(
                                  sub.id
                                );

                                setEditingContent(
                                  sub.versions.find(
                                    (
                                      v
                                    ) =>
                                      v.version ===
                                      sub.currentVersion
                                  )?.content ||
                                    ""
                                );
                              }}
                              className="border border-[#C6C6C6] px-4 py-2 rounded-xl text-sm"
                            >
                              ✏ Edit
                            </button>

                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">

                          {editingSubId ===
                          sub.id ? (
                            <div className="space-y-4">

                              <textarea
                                value={
                                  editingContent
                                }
                                onChange={(
                                  e
                                ) =>
                                  setEditingContent(
                                    e.target.value
                                  )
                                }
                                className="
                                  w-full
                                  min-h-[220px]
                                  border
                                  border-[#C6C6C6]
                                  rounded-xl
                                  p-4
                                  outline-none
                                "
                              />

                              <button
                                onClick={() => {
                                  setSections(
                                    sections.map(
                                      (
                                        sec
                                      ) => {
                                        if (
                                          sec.id ===
                                          section.id
                                        ) {
                                          return {
                                            ...sec,

                                            subsections:
                                              sec.subsections.map(
                                                (
                                                  s
                                                ) =>
                                                  s.id ===
                                                  sub.id
                                                    ? {
                                                        ...s,

                                                        versions:
                                                          s.versions.map(
                                                            (
                                                              v
                                                            ) =>
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
                                      }
                                    )
                                  );

                                  setEditingSubId(
                                    null
                                  );
                                }}
                                className="bg-[#242525] text-white px-5 py-2 rounded-xl"
                              >
                                Save Content
                              </button>

                            </div>
                          ) : (
                            <div className="text-[#242525] whitespace-pre-line">
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
                        <div className="border-t border-[#C6C6C6] p-5 bg-[#F7F7F7]">

                          <h4 className="font-semibold text-[#242525] mb-4">
                            Attachments
                          </h4>

                          <div className="flex flex-wrap gap-3">

                            {sub.generatedFiles.map(
                              (
                                file,
                                index
                              ) => (
                                <div
                                  key={index}
                                  className="border border-[#C6C6C6] bg-[#FDFCFD] rounded-xl px-4 py-3"
                                >
                                  <span className="text-sm text-[#242525]">
                                    {file.type ===
                                    "pdf"
                                      ? "📄"
                                      : "📘"}{" "}
                                    {
                                      file.name
                                    }
                                  </span>
                                </div>
                              )
                            )}

                            {/* UPLOAD */}
                            <label className="bg-[#242525] text-white px-4 py-2 rounded-xl text-sm cursor-pointer">

                              + Upload File

                              <input
                                type="file"
                                className="hidden"
                                onChange={(
                                  e
                                ) => {
                                  const file =
                                    e.target
                                      .files?.[0];

                                  if (!file)
                                    return;

                                  setSections(
                                    sections.map(
                                      (
                                        sec
                                      ) => {
                                        if (
                                          sec.id ===
                                          section.id
                                        ) {
                                          return {
                                            ...sec,

                                            subsections:
                                              sec.subsections.map(
                                                (
                                                  s
                                                ) =>
                                                  s.id ===
                                                  sub.id
                                                    ? {
                                                        ...s,

                                                        document:
                                                          {
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
                                      }
                                    )
                                  );
                                }}
                              />
                            </label>

                            {/* DOCUMENT */}
                            {sub.document && (
                              <div className="border border-[#C6C6C6] bg-[#FDFCFD] rounded-xl px-4 py-3">
                                <span className="text-sm text-[#242525]">
                                  📎{" "}
                                  {
                                    sub.document
                                      .name
                                  }
                                </span>
                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="p-4 border-t border-[#C6C6C6] flex justify-end bg-[#FDFCFD]">

            <button
              onClick={() =>
                navigate("/generate")
              }
              className="bg-[#242525] text-white px-6 py-3 rounded-xl font-medium"
            >
              Generate
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
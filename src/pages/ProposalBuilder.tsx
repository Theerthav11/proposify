import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button.js";
import type { DropResult } from "@hello-pangea/dnd";
import { contentTemplates } from "@/data/contentTemplates.js";

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

/* =========================================================
   CONTENT GENERATION SYSTEM
========================================================= */


// Function to extract key terms from prompt
const extractKeyTerms = (prompt: string): string[] => {
  const commonTerms = [
    "smart building",
    "management system",
    "architecture",
    "features",
    "timeline",
    "cost",
    "budget",
    "integration",
    "security",
    "performance",
    "scalability",
    "user experience",
    "mobile",
    "cloud",
    "database",
    "api",
    "dashboard",
    "reporting",
    "analytics",
    "automation",
  ];

  const promptLower = prompt.toLowerCase();
  return commonTerms.filter((term) => promptLower.includes(term));
};

// Function to generate contextual content
const generateContent = (
  sectionName: string,
  subsectionName: string,
  prompt: string,
  versionIndex: number = 0,
): string => {
  console.log(
    `🤖 Generating content for: ${sectionName} -> ${subsectionName} (v${versionIndex + 1})`,
  );

  const keyTerms = extractKeyTerms(prompt);
  console.log(`📝 Extracted key terms:`, keyTerms);

  // Get base template
  const sectionTemplates = contentTemplates[sectionName];
  if (!sectionTemplates) {
    console.log(
      `⚠️ No template found for section: ${sectionName}, using fallback`,
    );
    return generateFallbackContent(sectionName, subsectionName, keyTerms);
  }

  const subsectionTemplates = sectionTemplates[subsectionName];
  if (!subsectionTemplates) {
    console.log(
      `⚠️ No template found for subsection: ${subsectionName}, using fallback`,
    );
    return generateFallbackContent(sectionName, subsectionName, keyTerms);
  }

  // Get template variation
  const templateIndex = versionIndex % subsectionTemplates.length;
  let content = subsectionTemplates[templateIndex];

  // Ensure content is not undefined
  if (!content) {
    console.log(`⚠️ Template content is undefined, using fallback`);
    return generateFallbackContent(sectionName, subsectionName, keyTerms);
  }

  console.log(
    `✅ Using template ${templateIndex + 1} of ${subsectionTemplates.length}`,
  );

  // Customize content based on key terms
  if (keyTerms.length > 0) {
    content = customizeContentWithTerms(content, keyTerms);
    console.log(`🎨 Content customized with terms: ${keyTerms.join(", ")}`);
  }

  return content;
};

// Fallback content generator
const generateFallbackContent = (
  sectionName: string,
  subsectionName: string,
  keyTerms: string[],
): string => {
  const termsList =
    keyTerms.length > 0
      ? keyTerms.slice(0, 3).join(", ")
      : "system requirements";

  return `This ${subsectionName.toLowerCase()} section addresses the key aspects of ${termsList} as outlined in your requirements.

Key Considerations:
• Comprehensive analysis of project requirements
• Industry best practices and standards compliance
• Scalable solution architecture and design
• Performance optimization and security measures
• User experience and interface design principles
• Integration capabilities with existing systems

Our approach ensures that all ${sectionName.toLowerCase()} requirements are met while providing a foundation for future growth and enhancement.

The proposed solution incorporates modern technologies and methodologies to deliver exceptional results that align with your business objectives and technical requirements.`;
};

// Function to customize content with extracted terms
const customizeContentWithTerms = (
  content: string,
  keyTerms: string[],
): string => {
  let customizedContent = content;

  // Add context-specific enhancements
  if (keyTerms.includes("smart building")) {
    customizedContent = customizedContent.replace(
      "system",
      "smart building management system",
    );
  }

  if (keyTerms.includes("mobile")) {
    customizedContent +=
      "\n\nMobile Optimization:\n• Native mobile app development\n• Responsive web design\n• Offline capability support";
  }

  if (keyTerms.includes("security")) {
    customizedContent +=
      "\n\nSecurity Features:\n• End-to-end encryption\n• Multi-factor authentication\n• Regular security audits and updates";
  }

  return customizedContent;
};

// Function to analyze prompt and suggest relevant sections
const analyzePromptAndGenerateSections = ( prompt: string,): SectionType[] => {
  console.log(`🔍 Analyzing prompt: "${prompt}"`);

  const promptLower = prompt.toLowerCase();
  const suggestedSections: SectionType[] = [];
  let sectionId = 1;

  // Always include Executive Summary
  suggestedSections.push({
    id: sectionId++,
    name: "Executive Summary",
    checked: true,
    subsections: [
      {
        id: 11,
        name: "Project Overview",
        checked: true,
        currentVersion: "v1",
        versions: [
          {
            version: "v1",
            content: generatePromptBasedContent(
              "Executive Summary",
              "Project Overview",
              prompt,
            ),
          },
        ],
        url: "",
        document: null,
        generatedFiles: [],
      },
    ],
  });

  // Analyze prompt for specific requirements
  if (
    promptLower.includes("architecture") ||
    promptLower.includes("system") ||
    promptLower.includes("technical")
  ) {
    suggestedSections.push({
      id: sectionId++,
      name: "Technical Architecture",
      checked: true,
      subsections: [
        {
          id: sectionId * 10 + 1,
          name: "System Design",
          checked: true,
          currentVersion: "v1",
          versions: [
            {
              version: "v1",
              content: generatePromptBasedContent(
                "Technical Architecture",
                "System Design",
                prompt,
              ),
            },
          ],
          url: "",
          document: null,
          generatedFiles: [],
        },
      ],
    });
  }

  if (
    promptLower.includes("features") ||
    promptLower.includes("functionality") ||
    promptLower.includes("capabilities")
  ) {
    suggestedSections.push({
      id: sectionId++,
      name: "Features & Functionality",
      checked: true,
      subsections: [
        {
          id: sectionId * 10 + 1,
          name: "Core Features",
          checked: true,
          currentVersion: "v1",
          versions: [
            {
              version: "v1",
              content: generatePromptBasedContent(
                "Features & Functionality",
                "Core Features",
                prompt,
              ),
            },
          ],
          url: "",
          document: null,
          generatedFiles: [],
        },
      ],
    });
  }

  if (
    promptLower.includes("timeline") ||
    promptLower.includes("schedule") ||
    promptLower.includes("delivery")
  ) {
    suggestedSections.push({
      id: sectionId++,
      name: "Project Timeline",
      checked: true,
      subsections: [
        {
          id: sectionId * 10 + 1,
          name: "Implementation Schedule",
          checked: true,
          currentVersion: "v1",
          versions: [
            {
              version: "v1",
              content: generatePromptBasedContent(
                "Project Timeline",
                "Implementation Schedule",
                prompt,
              ),
            },
          ],
          url: "",
          document: null,
          generatedFiles: [],
        },
      ],
    });
  }

  if (
    promptLower.includes("cost") ||
    promptLower.includes("budget") ||
    promptLower.includes("price") ||
    promptLower.includes("investment")
  ) {
    suggestedSections.push({
      id: sectionId++,
      name: "Cost & Investment",
      checked: true,
      subsections: [
        {
          id: sectionId * 10 + 1,
          name: "Budget Breakdown",
          checked: true,
          currentVersion: "v1",
          versions: [
            {
              version: "v1",
              content: generatePromptBasedContent(
                "Cost & Investment",
                "Budget Breakdown",
                prompt,
              ),
            },
          ],
          url: "",
          document: null,
          generatedFiles: [],
        },
      ],
    });
  }

  console.log(
    `✅ Generated ${suggestedSections.length} sections based on prompt analysis`,
  );
  return suggestedSections;
};

// Function to generate content specifically based on the user's prompt
const generatePromptBasedContent = (
  sectionName: string,
  subsectionName: string,
  prompt: string,
): string => {
  const promptLower = prompt.toLowerCase();

  // Extract the main subject/project from the prompt
  let projectType = "system";
  if (promptLower.includes("smart building"))
    projectType = "Smart Building Management System";
  else if (promptLower.includes("e-commerce"))
    projectType = "E-commerce Platform";
  else if (promptLower.includes("mobile app"))
    projectType = "Mobile Application";
  else if (promptLower.includes("website")) projectType = "Website";
  else if (promptLower.includes("dashboard")) projectType = "Dashboard System";
  else if (promptLower.includes("api")) projectType = "API Solution";

  // Generate content based on section type and extracted project info
  switch (sectionName) {
    case "Executive Summary":
      return `This proposal outlines our comprehensive approach to developing your ${projectType}.

Based on your requirements, we understand you need:
${extractRequirementsFromPrompt(prompt)}

Our solution will deliver:
• A robust and scalable ${projectType.toLowerCase()}
• Modern technology stack ensuring future-proof architecture
• User-centric design focused on excellent user experience
• Comprehensive testing and quality assurance
• Full documentation and training support

We are confident this solution will meet your objectives and provide significant value to your organization.`;

    case "Technical Architecture":
      return `The ${projectType} will be built using modern, industry-standard technologies and architectural patterns.

Proposed Architecture:
• Frontend: React-based responsive web application
• Backend: Node.js with Express framework
• Database: PostgreSQL with Redis caching layer
• Cloud Infrastructure: AWS with auto-scaling capabilities
• Security: JWT authentication with role-based access control
• Integration: RESTful APIs with comprehensive documentation

${promptLower.includes("mobile") ? "• Mobile: React Native for cross-platform mobile apps" : ""}
${promptLower.includes("real-time") ? "• Real-time: WebSocket integration for live updates" : ""}
${promptLower.includes("analytics") ? "• Analytics: Advanced reporting and dashboard capabilities" : ""}

This architecture ensures scalability, maintainability, and optimal performance.`;

    case "Features & Functionality":
      return `The ${projectType} will include comprehensive features designed to address your specific requirements.

Core Features:
${generateFeaturesFromPrompt(prompt)}

Additional Capabilities:
• Intuitive user interface with modern design
• Advanced search and filtering options
• Comprehensive reporting and analytics
• Role-based permissions and access control
• Data export and import functionality
• Mobile-responsive design for all devices

All features will be thoroughly tested and optimized for performance and usability.`;

    case "Project Timeline":
      return `We propose a structured timeline to deliver your ${projectType} efficiently and on schedule.

Proposed Timeline:
• Week 1-2: Requirements analysis and system design
• Week 3-6: Core development and feature implementation
• Week 7-8: Integration and testing phase
• Week 9-10: User acceptance testing and refinements
• Week 11-12: Deployment and go-live support

${
  promptLower.includes("urgent") || promptLower.includes("asap")
    ? "Given the urgency mentioned, we can accelerate the timeline with additional resources."
    : "This timeline allows for thorough development and testing to ensure quality delivery."
}

Milestones and deliverables will be clearly defined for each phase.`;

    case "Cost & Investment":
      return `Investment breakdown for your ${projectType} development project.

Development Costs:
• Planning & Design: $15,000 - $25,000
• Core Development: $45,000 - $75,000
• Testing & QA: $10,000 - $15,000
• Deployment & Training: $8,000 - $12,000

Total Investment: $78,000 - $127,000

${promptLower.includes("budget") ? "We understand budget considerations and can work within your specified range." : ""}
${promptLower.includes("phases") ? "Payment can be structured in phases aligned with project milestones." : ""}

This investment includes:
• Complete source code and documentation
• 6 months of warranty and bug fixes
• User training and support materials
• Deployment assistance and go-live support`;

    default:
      return generateFallbackContent(
        sectionName,
        subsectionName,
        extractKeyTerms(prompt),
      );
  }
};

// Helper function to extract requirements from prompt
const extractRequirementsFromPrompt = (prompt: string): string => {
  const requirements = [];
  const promptLower = prompt.toLowerCase();

  if (promptLower.includes("architecture"))
    requirements.push(
      "• Detailed system architecture and technical specifications",
    );
  if (promptLower.includes("features"))
    requirements.push("• Comprehensive feature set and functionality overview");
  if (promptLower.includes("timeline"))
    requirements.push("• Clear project timeline and delivery schedule");
  if (promptLower.includes("cost") || promptLower.includes("budget"))
    requirements.push("• Transparent cost breakdown and investment details");
  if (promptLower.includes("team"))
    requirements.push("• Information about project team and resources");
  if (promptLower.includes("security"))
    requirements.push("• Security measures and compliance considerations");

  return requirements.length > 0
    ? requirements.join("\n")
    : "• A comprehensive solution that meets your business objectives";
};

// Helper function to generate features from prompt
const generateFeaturesFromPrompt = (prompt: string): string => {
  const features = [];
  const promptLower = prompt.toLowerCase();

  if (promptLower.includes("dashboard"))
    features.push("• Interactive dashboard with real-time data visualization");
  if (promptLower.includes("user management"))
    features.push("• Comprehensive user management and role-based access");
  if (promptLower.includes("reporting"))
    features.push("• Advanced reporting and analytics capabilities");
  if (promptLower.includes("mobile"))
    features.push("• Mobile-responsive design and native app support");
  if (promptLower.includes("integration"))
    features.push("• Third-party system integration capabilities");
  if (promptLower.includes("notification"))
    features.push("• Real-time notifications and alert system");
  if (promptLower.includes("search"))
    features.push("• Advanced search and filtering functionality");

  return features.length > 0
    ? features.join("\n")
    : "• Core functionality tailored to your specific requirements\n• User-friendly interface with intuitive navigation\n• Scalable architecture supporting future growth";
};

// Default prompt text
const DEFAULT_PROMPT = `Hi Team,

Please provide your proposal for our Smart Building
Management System.

We are looking for details on architecture,
features, timeline and cost.

Thanks,
John Smith`;

export default function ProposalBuilder() {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<string>("builder");

  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const [activeSectionId, setActiveSectionId] = useState<number>(1);

  const [editingSubId, setEditingSubId] = useState<number | null>(null);

  const [editingContent, setEditingContent] = useState<string>("");

  const [isEditingPrompt, setIsEditingPrompt] = useState<boolean>(false);

  const [promptText, setPromptText] = useState<string>(DEFAULT_PROMPT);

  const [sections, setSections] = useState<SectionType[]>([]);
     
    useEffect(() => {

      const savedSections =
        localStorage.getItem("proposalSections");

      if (
        savedSections &&
        JSON.parse(savedSections).length > 0
      ) {

        setSections(JSON.parse(savedSections));

      } else {

        const generatedSections =
          analyzePromptAndGenerateSections(DEFAULT_PROMPT);

        setSections(generatedSections);

        localStorage.setItem(
          "proposalSections",
          JSON.stringify(generatedSections)
        );
      }

    }, []);


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

  const addSubsection = (sectionId: number) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          const subsectionCount = section.subsections.length + 1;
          const newSubsectionName = `Subsection ${subsectionCount}`;

          // Generate smart content based on section name and prompt
          const generatedContent = generateContent(
            section.name,
            newSubsectionName,
            promptText,
            0,
          );

          return {
            ...section,

            subsections: [
              ...section.subsections,

              {
                id: Date.now(),
                name: newSubsectionName,
                checked: true,
                currentVersion: "v1",

                versions: [
                  {
                    version: "v1",
                    content: generatedContent,
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
      }),
    );
  };

  /* =========================================================
     TOGGLE SECTION
  ========================================================= */

  const toggleSection = (sectionId: number) => {

    const updatedSections =
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              checked: !section.checked,
            }
          : section,
      );

    setSections(updatedSections);

    localStorage.setItem(
      "proposalSections",
      JSON.stringify(updatedSections)
    );
  };

  /* =========================================================
     TOGGLE SUBSECTION
  ========================================================= */

  const toggleSubsection = (
    sectionId: number,
    subsectionId: number,
  ) => {

    const updatedSections =
      sections.map((section) => {

        if (section.id === sectionId) {

          return {
            ...section,

            subsections: section.subsections.map((sub) =>
              sub.id === subsectionId
                ? {
                    ...sub,
                    checked: !sub.checked,
                  }
                : sub,
            ),
          };
        }

        return section;
      });

    setSections(updatedSections);

    localStorage.setItem(
      "proposalSections",
      JSON.stringify(updatedSections)
    );
  };
  /* =========================================================
     DRAG END
  ========================================================= */

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(sections);

    const [reorderedItem] = items.splice(result.source.index, 1);

    if (!reorderedItem) return;

    items.splice(result.destination.index, 0, reorderedItem);

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
            <h2 className="text-xl font-bold text-[#242525]">Sections</h2>
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

                            sectionRefs.current[section.id]?.scrollIntoView({
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
                                onChange={() => toggleSection(section.id)}
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
                      mb-3
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
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => setIsEditingPrompt(!isEditingPrompt)}
                  className="border border-[#C6C6C6] text-[#242525] px-4 py-2 rounded-xl text-sm"
                >
                  {isEditingPrompt ? "💾 Save" : "✏ Edit"}
                </button>
                {/* GENERATE FROM PROMPT */}
                  <Button
                    onClick={() => {
                      const generatedSections =
                        analyzePromptAndGenerateSections(promptText);
                      setSections(generatedSections);
                    }}
                    // className="
                    //   bg-[#242525]
                    //   text-white
                    //   px-4
                    //   py-2
                    //   rounded-xl
                    //   text-sm
                    //   "
                  >
                    Generate from Prompt
                  </Button>
              </div>

              <h3 className="font-semibold mb-3 text-[#242525]">Prompt</h3>

              {isEditingPrompt ? (
                <textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
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
                    sectionRefs.current[section.id] = el;
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
                            section.name,
                          );

                          if (newName && newName.trim() !== "") {
                            setSections(
                              sections.map((s) =>
                                s.id === section.id
                                  ? {
                                      ...s,
                                      name: newName,
                                    }
                                  : s,
                              ),
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
                            sections.filter((s) => s.id !== section.id),
                          );
                        }}
                        className="border border-[#C6C6C6] text-red-500 px-4 py-2 rounded-xl text-sm"
                      >
                        🗑 Delete
                      </button>

                      {/* ADD SUBSECTION */}
                      <button
                        onClick={() => addSubsection(section.id)}
                        className="bg-[#242525] text-white px-4 py-2 rounded-xl text-sm"
                      >
                        + Add Subsection
                      </button>
                    </div>
                  </div>

                  {/* SUBSECTIONS */}
                  {section.subsections.map((sub) => (
                    <div key={sub.id} className="border-t border-[#C6C6C6]">
                      {/* HEADER */}
                      <div className="bg-[#F8F8F8] p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={sub.checked}
                            onChange={() =>
                              toggleSubsection(section.id, sub.id)
                            }
                            className="accent-[#242525]"
                          />

                          <h3 className="font-semibold text-[#242525] text-lg">
                            {sub.name}
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              AI Generated
                            </span>
                          </h3>

                          {/* VERSION */}
                          <select
                            value={sub.currentVersion}
                            onChange={(e) => {
                              setSections(
                                sections.map((sec) => {
                                  if (sec.id === section.id) {
                                    return {
                                      ...sec,

                                      subsections: sec.subsections.map((s) =>
                                        s.id === sub.id
                                          ? {
                                              ...s,
                                              currentVersion: e.target.value,
                                            }
                                          : s,
                                      ),
                                    };
                                  }

                                  return sec;
                                }),
                              );
                            }}
                            className="border border-[#C6C6C6] rounded-lg px-3 py-1 text-sm"
                          >
                            {sub.versions.map((v) => (
                              <option key={v.version} value={v.version}>
                                {v.version}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex gap-3">
                          {/* REGENERATE */}
                          <button
                            onClick={() => {
                              setSections(
                                sections.map((sec) => {
                                  if (sec.id === section.id) {
                                    return {
                                      ...sec,

                                      subsections: sec.subsections.map((s) => {
                                        if (s.id === sub.id) {
                                          const nextVersion = `v${
                                            s.versions.length + 1
                                          }`;

                                          // Generate new content variation
                                          const regeneratedContent =
                                            generateContent(
                                              section.name,
                                              s.name,
                                              promptText,
                                              s.versions.length,
                                            );

                                          return {
                                            ...s,

                                            currentVersion: nextVersion,

                                            versions: [
                                              ...s.versions,

                                              {
                                                version: nextVersion,
                                                content: regeneratedContent,
                                              },
                                            ],
                                          };
                                        }

                                        return s;
                                      }),
                                    };
                                  }

                                  return sec;
                                }),
                              );
                            }}
                            className="bg-[#242525] text-white px-4 py-2 rounded-xl text-sm"
                          >
                            🔄 Regenerate
                          </button>

                          {/* EDIT */}
                          <button
                            onClick={() => {
                              setEditingSubId(sub.id);

                              setEditingContent(
                                sub.versions.find(
                                  (v) => v.version === sub.currentVersion,
                                )?.content || "",
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
                        {editingSubId === sub.id ? (
                          <div className="space-y-4">
                            <textarea
                              value={editingContent}
                              onChange={(e) =>
                                setEditingContent(e.target.value)
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
                                  sections.map((sec) => {
                                    if (sec.id === section.id) {
                                      return {
                                        ...sec,

                                        subsections: sec.subsections.map((s) =>
                                          s.id === sub.id
                                            ? {
                                                ...s,

                                                versions: s.versions.map((v) =>
                                                  v.version === s.currentVersion
                                                    ? {
                                                        ...v,
                                                        content: editingContent,
                                                      }
                                                    : v,
                                                ),
                                              }
                                            : s,
                                        ),
                                      };
                                    }

                                    return sec;
                                  }),
                                );

                                setEditingSubId(null);
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
                                (v) => v.version === sub.currentVersion,
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
                          {sub.generatedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="border border-[#C6C6C6] bg-[#FDFCFD] rounded-xl px-4 py-3"
                            >
                              <span className="text-sm text-[#242525]">
                                {file.type === "pdf" ? "📄" : "📘"} {file.name}
                              </span>
                            </div>
                          ))}

                          {/* UPLOAD */}
                          <label className="bg-[#242525] text-white px-4 py-2 rounded-xl text-sm cursor-pointer">
                            + Upload File
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];

                                if (!file) return;

                                setSections(
                                  sections.map((sec) => {
                                    if (sec.id === section.id) {
                                      return {
                                        ...sec,

                                        subsections: sec.subsections.map((s) =>
                                          s.id === sub.id
                                            ? {
                                                ...s,

                                                document: {
                                                  name: file.name,
                                                  size: file.size,
                                                  type: file.type,
                                                },
                                              }
                                            : s,
                                        ),
                                      };
                                    }

                                    return sec;
                                  }),
                                );
                              }}
                            />
                          </label>

                          {/* DOCUMENT */}
                          {sub.document && (
                            <div className="border border-[#C6C6C6] bg-[#FDFCFD] rounded-xl px-4 py-3">
                              <span className="text-sm text-[#242525]">
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
          </div>

            {/* FOOTER */}
              <div className="p-4 border-t border-[#C6C6C6] flex justify-end bg-[#FDFCFD]">
                <button
                  onClick={() => {
                    // FILTER ONLY CHECKED SECTIONS
                    const filteredSections = sections
                      .filter((section) => section.checked)

                      .map((section) => ({
                        ...section,

                        // FILTER ONLY CHECKED SUBSECTIONS
                        subsections: section.subsections.filter(
                          (sub) => sub.checked,
                        ),
                      }));

                    // SAVE FILTERED DATA
                    localStorage.setItem(
                      "generatedProposal",
                      JSON.stringify(filteredSections),
                    );

                    // NAVIGATE
                    navigate("/generate");
                  }}
                  className="
                    bg-[#242525]
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-medium
                    hover:bg-black
                    transition
                  "
                >
                  Generate
                </button>
              </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button.js";
import type { DropResult } from "@hello-pangea/dnd";
import { contentTemplates } from "@/data/contentTemplates.js";
import { contentGenerationConfig } from "@/data/contentGenerationConfig.js";

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
  const promptLower = prompt.toLowerCase();
  return contentGenerationConfig.commonTerms.filter((term) => 
    promptLower.includes(term)
  );
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

// Fallback content generator (now uses config)
const generateFallbackContent = (
  sectionName: string,
  subsectionName: string,
  keyTerms: string[],
): string => {
  const termsList = keyTerms.length > 0
    ? keyTerms.slice(0, 3).join(", ")
    : "system requirements";

  let content = contentGenerationConfig.fallbackContent.template;
  content = content.replace(/{subsectionName}/g, subsectionName.toLowerCase());
  content = content.replace(/{termsList}/g, termsList);
  content = content.replace(/{sectionNameLower}/g, sectionName.toLowerCase());
  
  const bulletPoints = contentGenerationConfig.fallbackContent.bulletPoints.join("\n");
  content = content.replace(/{bulletPoints}/g, bulletPoints);

  return content;
};

// Function to customize content with extracted terms (now uses config)
const customizeContentWithTerms = (
  content: string,
  keyTerms: string[],
): string => {
  let customizedContent = content;

  // Apply customizations from config
  contentGenerationConfig.contentCustomizations.forEach((customization) => {
    if (keyTerms.includes(customization.keyword)) {
      // Apply replacements
      if (customization.replacements) {
        customization.replacements.forEach((replacement) => {
          customizedContent = customizedContent.replace(
            replacement.find,
            replacement.replace
          );
        });
      }

      // Add additional content
      if (customization.additions) {
        customizedContent += customization.additions;
      }
    }
  });

  return customizedContent;
};

// Function to analyze prompt and suggest relevant sections (now uses config)
const analyzePromptAndGenerateSections = (prompt: string): SectionType[] => {
  console.log(`🔍 Analyzing prompt: "${prompt}"`);

  const promptLower = prompt.toLowerCase();
  const suggestedSections: SectionType[] = [];
  let sectionId = 1;

  contentGenerationConfig.sectionSuggestions.forEach((suggestion) => {
    // Check if section should be included
    const shouldInclude = 
      suggestion.keywords.length === 0 || // Always include (like Executive Summary)
      suggestion.keywords.some((keyword) => promptLower.includes(keyword));

    if (shouldInclude) {
      suggestedSections.push({
        id: sectionId,
        name: suggestion.sectionName,
        checked: true,
        subsections: [
          {
            id: sectionId * 10 + 1,
            name: suggestion.defaultSubsection.name,
            checked: true,
            currentVersion: "v1",
            versions: [
              {
                version: "v1",
                content: generatePromptBasedContent(
                  suggestion.sectionName,
                  suggestion.defaultSubsection.name,
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
      sectionId++;
    }
  });

  console.log(
    `✅ Generated ${suggestedSections.length} sections based on prompt analysis`,
  );
  
  return suggestedSections;
};


const generateFallbackFromConfig = (
  sectionName: string,
  subsectionName: string,
  keyTerms: string[],
): string => {
  const termsList = keyTerms.length > 0
    ? keyTerms.slice(0, 3).join(", ")
    : "system requirements";

  let content = contentGenerationConfig.fallbackContent.template;
  content = content.replace(/{subsectionName}/g, subsectionName.toLowerCase());
  content = content.replace(/{termsList}/g, termsList);
  content = content.replace(/{sectionNameLower}/g, sectionName.toLowerCase());
  
  const bulletPoints = contentGenerationConfig.fallbackContent.bulletPoints.join("\n");
  content = content.replace(/{bulletPoints}/g, bulletPoints);

  return content;
};

const extractRequirementsFromConfig = (
  prompt: string,
  mappings: { keyword: string; bullet: string }[]
): string => {
  const promptLower = prompt.toLowerCase();
  const requirements = mappings
    .filter((mapping) => promptLower.includes(mapping.keyword))
    .map((mapping) => mapping.bullet);

  return requirements.length > 0
    ? requirements.join("\n")
    : "• A comprehensive solution that meets your business objectives";
};

const extractFeaturesFromConfig = (
  prompt: string,
  mappings: { keyword: string; bullet: string }[]
): string => {
  const promptLower = prompt.toLowerCase();
  const features = mappings
    .filter((mapping) => promptLower.includes(mapping.keyword))
    .map((mapping) => mapping.bullet);

  return features.length > 0
    ? features.join("\n")
    : "• Core functionality tailored to your specific requirements\n• User-friendly interface with intuitive navigation\n• Scalable architecture supporting future growth";
};


// Function to generate content specifically based on the user's prompt
const generatePromptBasedContent = (
  sectionName: string,
  subsectionName: string,
  prompt: string,
): string => {
  const promptLower = prompt.toLowerCase();

  // Extract project type
  let projectType = "system";
  const matchedProject = contentGenerationConfig.projectTypes.find(
    (pt) => promptLower.includes(pt.keywords)
  );
  if (matchedProject) {
    projectType = matchedProject.label;
  }

  // Get section template
  const sectionConfig = contentGenerationConfig.sectionTemplates[sectionName];
  
  if (!sectionConfig) {
    return generateFallbackFromConfig(sectionName, subsectionName, extractKeyTerms(prompt));
  }

  let content = sectionConfig.template;
  
  // Replace placeholders
  content = content.replace(/{projectType}/g, projectType);
  content = content.replace(/{projectTypeLower}/g, projectType.toLowerCase());
  content = content.replace(/{sectionName}/g, sectionName);
  content = content.replace(/{subsectionName}/g, subsectionName);

  // Handle requirement mappings
  if (sectionConfig.requirementMappings) {
    const requirements = extractRequirementsFromConfig(prompt, sectionConfig.requirementMappings);
    content = content.replace(/{requirements}/g, requirements);
  }

  // Handle feature mappings
  if (sectionConfig.featureMappings) {
    const features = extractFeaturesFromConfig(prompt, sectionConfig.featureMappings);
    content = content.replace(/{features}/g, features);
  }

  // Handle conditional additions
  if (sectionConfig.conditionalAdditions) {
    let conditionalContent = "";
    sectionConfig.conditionalAdditions.forEach((condition) => {
      if (promptLower.includes(condition.keyword)) {
        conditionalContent += "\n" + condition.content;
      }
    });
    content = content.replace(/{conditionalContent}/g, conditionalContent);
    
    // Handle individual conditional placeholders
    sectionConfig.conditionalAdditions.forEach((condition) => {
      const placeholder = `{${condition.keyword.replace(/\s+/g, "")}Note}`;
      const value = promptLower.includes(condition.keyword) ? condition.content : "";
      content = content.replace(new RegExp(placeholder, "g"), value);
    });
  }

  return content;
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

  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const [activeSectionId, setActiveSectionId] = useState<number>(1);

  const [editingSubId, setEditingSubId] = useState<number | null>(null);

  const [editingContent, setEditingContent] = useState<string>("");

  const [isEditingPrompt, setIsEditingPrompt] = useState<boolean>(false);

  const [promptText, setPromptText] = useState<string>(DEFAULT_PROMPT);

  const [sections, setSections] = useState<SectionType[]>([]);   

    useEffect(() => {               // Automatically saves every change to sections in localStorage.
      if (sections.length === 0) return;         //  No need to manually call localStorage.setItem() in multiple functions.

      localStorage.setItem(
        "proposalSections",
        JSON.stringify(sections),
      );
    }, [sections]);

  
    const [editingSectionId, setEditingSectionId] =      // Section editing state
      useState<number | null>(null);

    const [editingSectionName, setEditingSectionName] =
      useState<string>("");
     
    useEffect(() => {                       // Removes unnecessary blank lines and nested formatting, making the loading logic easier to read.
      const savedSections =
        localStorage.getItem("proposalSections");

      if (savedSections) {
        const parsedSections =
          JSON.parse(savedSections);

        if (parsedSections.length > 0) {
          setSections(parsedSections);
          return;
        }
      }

      const generatedSections =
        analyzePromptAndGenerateSections(
          DEFAULT_PROMPT,
        );

      setSections(generatedSections);
    }, []);


  /* =========================================================
     ADD SECTION
  ========================================================= */

  const addSection = () => {             // Update addSection()
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
  };
  /* =========================================================
     DRAG END
  ========================================================= */

  const handleDragEnd = (result: DropResult) => {       //Update handleDragEnd()
    if (!result.destination) return;

    const items = Array.from(sections);

    const [reorderedItem] =
      items.splice(result.source.index, 1);

    if (!reorderedItem) return;

    items.splice(
      result.destination.index,
      0,
      reorderedItem,
    );

    setSections(items);
  };


    // Rename Section
 
  const handleRenameSection = (       // Start Editing
    sectionId: number,
  ) => {
    const section = sections.find(
      (s) => s.id === sectionId,
    );

    if (!section) return;

    setEditingSectionId(sectionId);
    setEditingSectionName(section.name);
  };

  // Save Section Name
  const handleSaveSectionName = (
    sectionId: number,
  ) => {
    if (!editingSectionName.trim())
      return;

    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              name: editingSectionName,
            }
          : s,
      ),
    );

    setEditingSectionId(null);
    setEditingSectionName("");
  };

  // Delete Section
  const handleDeleteSection = (
    sectionId: number,
  ) => {
    setSections((prev) =>
      prev.filter(
        (section) =>
          section.id !== sectionId,
      ),
    );
  };

   // Change Version
    const handleVersionChange = (
    sectionId: number,
    subsectionId: number,
    version: string,
  ) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              subsections:
                section.subsections.map((sub) =>
                  sub.id === subsectionId
                    ? {
                        ...sub,
                        currentVersion: version,
                      }
                    : sub,
                ),
            }
          : section,
      ),
    );
  };

    //Regenerate Subsection
    const handleRegenerateSubsection = (
    sectionId: number,
    subsectionId: number,
  ) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId)
          return section;

        return {
          ...section,
          subsections:
            section.subsections.map((sub) => {
              if (sub.id !== subsectionId)
                return sub;

              const nextVersion = `v${
                sub.versions.length + 1
              }`;

              const regeneratedContent =
                generateContent(
                  section.name,
                  sub.name,
                  promptText,
                  sub.versions.length,
                );

              return {
                ...sub,
                currentVersion: nextVersion,
                versions: [
                  ...sub.versions,
                  {
                    version: nextVersion,
                    content:
                      regeneratedContent,
                  },
                ],
              };
            }),
        };
      }),
    );
  };

  //Start Editing Content
  const handleEditSubsection = (
    sub: SubsectionType,
  ) => {
    setEditingSubId(sub.id);

    setEditingContent(
      sub.versions.find(
        (v) =>
          v.version === sub.currentVersion,
      )?.content || "",
    );
  };

  //Save Edited Content
  const handleSaveContent = (
    sectionId: number,
    subsectionId: number,
  ) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId)
          return section;

        return {
          ...section,
          subsections:
            section.subsections.map((sub) =>
              sub.id === subsectionId
                ? {
                    ...sub,
                    versions: sub.versions.map(
                      (version) =>
                        version.version ===
                        sub.currentVersion
                          ? {
                              ...version,
                              content:
                                editingContent,
                            }
                          : version,
                    ),
                  }
                : sub,
            ),
        };
      }),
    );

    setEditingSubId(null);
  };

  //Upload File
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionId: number,
    subsectionId: number,
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setSections((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId)
          return section;

        return {
          ...section,
          subsections:
            section.subsections.map((sub) =>
              sub.id === subsectionId
                ? {
                    ...sub,
                    document: {
                      name: file.name,
                      size: file.size,
                      type: file.type,
                    },
                  }
                : sub,
            ),
        };
      }),
    );
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
                    Regenerate from Prompt
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
                    {editingSectionId === section.id ? (             //Replace Section Header UI
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={editingSectionName}
                          onChange={(e) =>
                            setEditingSectionName(
                              e.target.value,
                            )
                          }
                          className="
                            border
                            border-[#C6C6C6]
                            rounded-lg
                            px-3
                            py-2
                          "
                        />

                        <button
                          onClick={() =>
                            handleSaveSectionName(
                              section.id,
                            )
                          }
                          className="
                            bg-green-600
                            text-white
                            px-3
                            py-2
                            rounded-lg
                          "
                        >
                          Save
                        </button>

                        <button
                          onClick={() =>
                            setEditingSectionId(null)
                          }
                          className="
                            bg-gray-400
                            text-white
                            px-3
                            py-2
                            rounded-lg
                          "
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <h3 className="font-semibold text-[#242525] text-xl">
                        {section.name}
                      </h3>
                    )}

                    <div className="flex items-center gap-3">
                      {/* EDIT */}
                      <button
                     onClick={() =>
                        handleRenameSection(section.id)
                      }
                        className="border border-[#C6C6C6] text-[#242525] px-4 py-2 rounded-xl text-sm"
                      >
                        ✏ Edit
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() =>
                          handleDeleteSection(section.id)
                        }
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
                            onChange={(e) =>
                              handleVersionChange(
                                section.id,
                                sub.id,
                                e.target.value,
                              )
                            }
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
                            onClick={() =>
                              handleRegenerateSubsection(
                                section.id,
                                sub.id,
                              )
                            }
                            className="bg-[#242525] text-white px-4 py-2 rounded-xl text-sm"
                          >
                            🔄 Regenerate
                          </button>

                          {/* EDIT */}
                          <button
                            onClick={() =>
                              handleEditSubsection(sub)
                            }
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
                              onClick={() =>
                                handleSaveContent(
                                  section.id,
                                  sub.id,
                                )
                              }
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
                              onChange={(e) =>
                                handleFileUpload(
                                  e,
                                  section.id,
                                  sub.id,
                                )
                              }
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
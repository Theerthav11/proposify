import MainLayout from "../components/layout/MainLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProposalBuilder() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("builder");
  const [sections, setSections] = useState([
    { id: 1, name: "Executive Summary", checked: true, subsections: [
      { id: 11, name: "Subsection 1", version: "v2", checked: true, attachments: [] }
    ]},
    { id: 2, name: "Technical Overview", checked: true, subsections: [] },
    { id: 3, name: "Features & Benefits", checked: false, subsections: [] },
    { id: 4, name: "Compliance Information", checked: false, subsections: [] },
    { id: 5, name: "Pricing & Terms", checked: false, subsections: [] },
  ]);

  const [expandedSection, setExpandedSection] = useState(1);

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      name: `New Section ${sections.length + 1}`,
      checked: false,
      subsections: []
    };
    setSections([...sections, newSection]);
  };

  const addSubsection = (sectionId) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          subsections: [
            ...section.subsections,
            {
              id: Date.now(),
              name: `Subsection ${section.subsections.length + 1}`,
              version: "v1",
              checked: true,
              attachments: []
            }
          ]
        };
      }
      return section;
    }));
  };

  const toggleSection = (sectionId) => {
    setSections(sections.map(section =>
      section.id === sectionId ? { ...section, checked: !section.checked } : section
    ));
  };

  const toggleSubsection = (sectionId, subsectionId) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          subsections: section.subsections.map(sub =>
            sub.id === subsectionId ? { ...sub, checked: !sub.checked } : sub
          )
        };
      }
      return section;
    }));
  };

  return (
    <MainLayout>
      <div className="flex h-screen">
        {/* Left Sidebar - Sections */}
        <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
          <h2 className="font-bold text-lg mb-4">Sections</h2>
          <div className="space-y-2">
            {sections.map((section) => (
              <div key={section.id}>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                  <input
                    type="checkbox"
                    checked={section.checked}
                    onChange={() => toggleSection(section.id)}
                    className="w-4 h-4"
                  />
                  <span className="flex-1 text-sm">{section.name}</span>
                  {section.checked && (
                    <span className="text-green-600">✓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={addSection}
            className="w-full mt-4 py-2 border border-dashed border-gray-400 rounded text-sm hover:border-primary-navy hover:text-primary-navy transition"
          >
            + Add Section
          </button>
          <button
            onClick={() => navigate("/preview")}
            className="w-full mt-4 btn"
          >
            👁️ Preview
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                RFP: Project Name
              </h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setSelectedTab("builder")}
                className={`px-4 py-3 font-medium transition ${
                  selectedTab === "builder"
                    ? "text-primary-navy border-b-2 border-primary-navy"
                    : "text-gray-600"
                }`}
              >
                Builder
              </button>
              <button
                onClick={() => setSelectedTab("attachments")}
                className={`px-4 py-3 font-medium transition ${
                  selectedTab === "attachments"
                    ? "text-primary-navy border-b-2 border-primary-navy"
                    : "text-gray-600"
                }`}
              >
                Attachments
              </button>
              <button
                onClick={() => setSelectedTab("history")}
                className={`px-4 py-3 font-medium transition ${
                  selectedTab === "history"
                    ? "text-primary-navy border-b-2 border-primary-navy"
                    : "text-gray-600"
                }`}
              >
                Version History
              </button>
            </div>

            {/* Builder Content */}
            {selectedTab === "builder" && (
              <div className="space-y-6">
                {sections.filter(s => s.checked).map((section) => (
                  <div key={section.id} className="card">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">
                        {section.id}. {section.name}
                      </h3>
                      <button
                        onClick={() => addSubsection(section.id)}
                        className="btn-white text-sm"
                      >
                        + Add Subsection
                      </button>
                    </div>

                    {/* Subsections */}
                    {section.subsections.length > 0 && (
                      <div className="space-y-4 mt-4">
                        {section.subsections.map((subsection) => (
                          <div
                            key={subsection.id}
                            className="border border-gray-200 rounded-lg p-4"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  checked={subsection.checked}
                                  onChange={() => toggleSubsection(section.id, subsection.id)}
                                  className="w-4 h-4"
                                />
                                <span className="font-medium">
                                  {section.id}.{subsection.id} {subsection.name}
                                </span>
                                <select className="text-sm border border-gray-300 rounded px-2 py-1">
                                  <option>{subsection.version}</option>
                                  <option>v1</option>
                                  <option>v2</option>
                                </select>
                              </div>
                              <div className="flex gap-2">
                                <button className="btn-white text-sm">
                                  🔄 Regenerate
                                </button>
                                <button className="btn-white text-sm">
                                  ✏️ Edit
                                </button>
                              </div>
                            </div>

                            {/* Attachments */}
                            <div className="mt-3">
                              <p className="text-sm text-gray-600 mb-2">Attachment 2:</p>
                              <div className="flex gap-2">
                                <button className="px-3 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200">
                                  📄 PDF
                                </button>
                                <button className="px-3 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200">
                                  🔗 URL
                                </button>
                                <button className="px-3 py-1 bg-primary-navy text-white text-sm rounded hover:bg-opacity-90">
                                  + Add
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Attachments Tab */}
            {selectedTab === "attachments" && (
              <div className="card">
                <h3 className="text-lg font-bold mb-4">Attachments</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-600 mb-4">Drag & drop files here, or click to upload</p>
                  <button className="btn">Upload Files</button>
                </div>
              </div>
            )}

            {/* Version History Tab */}
            {selectedTab === "history" && (
              <div className="card">
                <h3 className="text-lg font-bold mb-4">Version History</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((v) => (
                    <div key={v} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">Version {v}</p>
                        <p className="text-sm text-gray-600">May {20 - v}, 2024</p>
                      </div>
                      <button className="text-primary-navy text-sm font-medium">
                        Restore
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

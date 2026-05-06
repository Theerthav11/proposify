import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    projectType: "",
    industry: "",
    productName: "",
    productDescription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/proposal-builder");
  };

  return (
    <MainLayout>
      <div className="p-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create New Project</h1>
          <p className="text-gray-600">
            Add all project details, product information, and reference materials to get started.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Details */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-navy text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-xl font-bold text-gray-800">Project Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  className="input"
                  value={formData.projectName}
                  onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  A unique name to identify your project
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  placeholder="Describe the project, its purpose, and what this proposal will address"
                  className="input min-h-[100px]"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    className="input"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="rfp">RFP - Request for Proposal</option>
                    <option value="rfi">RFI - Request for Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    className="input"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    required
                  >
                    <option value="">Select industry</option>
                    <option value="software">Software & IT</option>
                    <option value="construction">Construction</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-navy text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-xl font-bold text-gray-800">Product Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product / Service Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter product or service name"
                  className="input"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Short Description *
                </label>
                <textarea
                  placeholder="Brief description of your product or service"
                  className="input min-h-[80px]"
                  value={formData.productDescription}
                  onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description
                </label>
                <textarea
                  placeholder="Provide a detailed overview of your product or service, its capabilities, features, and benefits..."
                  className="input min-h-[150px]"
                />
              </div>
            </div>
          </div>

          {/* Product Images / Screenshots */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-navy text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-xl font-bold text-gray-800">Product Images / Screenshots</h2>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="mb-4">
                <span className="text-5xl">📤</span>
              </div>
              <p className="text-gray-600 mb-2">Drag & drop files here, or click to browse</p>
              <p className="text-sm text-gray-500 mb-4">
                PDF, DOCX, XLSX, or up to 100MB each
              </p>
              <button type="button" className="btn">
                Upload Files
              </button>
            </div>
          </div>

          {/* References & Assets */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-navy text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h2 className="text-xl font-bold text-gray-800">References & Assets</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product URLs (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://yourproduct.com"
                  className="input mb-2"
                />
                <button type="button" className="text-primary-navy text-sm font-medium">
                  + Add URL
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p className="text-gray-600 text-sm mb-2">
                    Upload relevant documents, files, and other reference materials
                  </p>
                  <button type="button" className="btn-white text-sm">
                    Browse Files
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-6">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="btn-white"
            >
              Cancel
            </button>
            <div className="flex gap-3">
              <button type="button" className="btn-white">
                💾 Save Draft
              </button>
              <button type="submit" className="btn">
                Review & Create Project →
              </button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
import MainLayout from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

export default function Preview() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Document Preview</h1>
            <p className="text-gray-600">Review your final proposal document</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/proposal-builder")}
              className="btn-white"
            >
              ← Back to Builder
            </button>
            <button className="btn-secondary">
              📥 Download PDF
            </button>
            <button className="btn">
              📧 Send Proposal
            </button>
          </div>
        </div>

        {/* Preview Document */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Document Header */}
            <div className="bg-primary-navy text-white p-8">
              <h2 className="text-3xl font-bold mb-2">Project Proposal</h2>
              <p className="text-primary-lightblue">Smart Building Management System</p>
              <div className="mt-4 text-sm">
                <p>Prepared for: Acme Corp.</p>
                <p>Date: May 20, 2024</p>
              </div>
            </div>

            {/* Document Content */}
            <div className="p-8 space-y-8">
              {/* Executive Summary */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary-teal">
                  1. Executive Summary
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This proposal outlines our comprehensive solution for implementing a Smart Building
                  Management System that will revolutionize how your organization manages its facilities.
                  Our AI-powered platform integrates seamlessly with existing infrastructure to provide
                  real-time monitoring, predictive maintenance, and energy optimization.
                </p>
              </section>

              {/* Technical Overview */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary-teal">
                  2. Technical Overview
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our solution leverages cutting-edge technologies including IoT sensors, machine learning
                  algorithms, and cloud-based analytics to deliver unparalleled building management
                  capabilities.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Key Technologies:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>IoT Sensor Network</li>
                    <li>AI-Powered Analytics Engine</li>
                    <li>Cloud Infrastructure (AWS/Azure)</li>
                    <li>Real-time Dashboard & Reporting</li>
                  </ul>
                </div>
              </section>

              {/* Pricing */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary-teal">
                  3. Pricing & Terms
                </h3>
                <div className="bg-primary-yellow bg-opacity-30 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700 font-medium">Implementation Cost</span>
                    <span className="text-2xl font-bold text-gray-800">$150,000</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700 font-medium">Annual Subscription</span>
                    <span className="text-2xl font-bold text-gray-800">$24,000/year</span>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-bold text-lg">Total First Year</span>
                      <span className="text-3xl font-bold text-primary-navy">$174,000</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Attachments */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary-teal">
                  Attachments
                </h3>
                <div className="space-y-2">
                  {["Technical Specifications.pdf", "Case Studies.pdf", "Product Brochure.pdf"].map(
                    (file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📄</span>
                          <span className="text-gray-700">{file}</span>
                        </div>
                        <button className="text-primary-navy text-sm font-medium">
                          Download
                        </button>
                      </div>
                    )
                  )}
                </div>
              </section>
            </div>

            {/* Document Footer */}
            <div className="bg-gray-100 p-6 text-center text-sm text-gray-600">
              <p>© 2024 PropoAI. All rights reserved.</p>
              <p className="mt-1">Generated on May 20, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
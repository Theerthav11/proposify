import { useNavigate } from "react-router-dom";


export default function Preview() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F3FF] py-10 px-6">

      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-[#4C1D95]">
            Proposal Preview
          </h1>

          <p className="text-[#6B7280] mt-2 text-lg">
            Review and export your final AI-generated proposal
          </p>
        </div>

        <div className="flex items-center gap-4">

          {/* BACK */}
          <button
            onClick={() => navigate("/Generate")}
            className="border border-[#E9D5FF] bg-white px-5 py-3 rounded-2xl font-medium text-[#4C1D95] hover:bg-[#F5F3FF] transition shadow-sm"
          >
            ← Back
          </button>

          {/* DOWNLOAD */}
          <button className="border border-[#E9D5FF] bg-white px-5 py-3 rounded-2xl font-medium text-[#4C1D95] hover:bg-[#F5F3FF] transition shadow-sm">
            📥 Download
          </button>

          {/* SEND */}
          <button className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white px-6 py-3 rounded-2xl font-medium shadow-xl hover:scale-105 transition">
            📧 Send Proposal
          </button>
        </div>
      </div>

      {/* DOCUMENT */}
      <div className="max-w-5xl mx-auto bg-white rounded-[36px] overflow-hidden border border-[#E9D5FF] shadow-[0_20px_80px_rgba(124,58,237,0.18)]">

        {/* HERO HEADER */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#A855F7] px-10 py-14 text-white">

          {/* BACKGROUND CIRCLES */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex items-center justify-between">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[4px] text-sm text-purple-100 mb-4">
                AI Generated Proposal
              </p>

              <h2 className="text-5xl font-black leading-tight mb-5">
                Smart Building
                <br />
                Management System
              </h2>

              <p className="text-lg text-purple-100">
                Prepared for Acme Corporation
              </p>
            </div>

            {/* DATE CARD */}
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-6 shadow-2xl hover:scale-105 transition">
              <p className="text-sm text-purple-100 mb-2 ">
                Generated On
              </p>
               <p className="text-2xl font-bold text-white">
              
                May 20, 2024
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-10 py-12 space-y-12">

          {/* EXECUTIVE SUMMARY */}
          <section>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center text-xl shadow-lg">
                1
              </div>

              <h3 className="text-3xl font-bold text-[#4C1D95]">
                Executive Summary
              </h3>
            </div>

            <div className="bg-[#F5F3FF] border border-[#E9D5FF] rounded-3xl p-8">

              <p className="text-[#6B7280] leading-9 text-lg">
                This proposal outlines our comprehensive AI-powered
                Smart Building Management System designed to improve
                operational efficiency, automate maintenance workflows,
                reduce energy consumption, and provide intelligent
                monitoring across all building infrastructure.
              </p>
            </div>
          </section>

          {/* TECHNICAL OVERVIEW */}
          <section>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center text-xl shadow-lg">
                2
              </div>

              <h3 className="text-3xl font-bold text-[#4C1D95]">
                Technical Overview
              </h3>
            </div>

            <div className="bg-[#F5F3FF] border border-[#E9D5FF] rounded-3xl p-8 mb-8">

              <p className="text-[#6B7280] leading-9 text-lg">
                The platform integrates IoT devices, AI analytics,
                cloud infrastructure, and automated workflows to
                deliver real-time monitoring and predictive insights.
              </p>
            </div>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-2 gap-6">

              {/* CARD */}
              <div className="bg-white border border-[#E9D5FF] rounded-3xl p-7 hover:-translate-y-1 transition shadow-md hover:shadow-xl">

                <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-3xl mb-5">
                  ☁️
                </div>

                <h4 className="font-bold text-xl text-[#4C1D95] mb-3">
                  Cloud Infrastructure
                </h4>

                <p className="text-[#6B7280] leading-7">
                  Secure cloud architecture using AWS/Azure services.
                </p>
              </div>

              {/* CARD */}
              <div className="bg-white border border-[#E9D5FF] rounded-3xl p-7 hover:-translate-y-1 transition shadow-md hover:shadow-xl">

                <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-3xl mb-5">
                  🤖
                </div>

                <h4 className="font-bold text-xl text-[#4C1D95] mb-3">
                  AI Analytics
                </h4>

                <p className="text-[#6B7280] leading-7">
                  Intelligent prediction and automated maintenance.
                </p>
              </div>

              {/* CARD */}
              <div className="bg-white border border-[#E9D5FF] rounded-3xl p-7 hover:-translate-y-1 transition shadow-md hover:shadow-xl">

                <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-3xl mb-5">
                  📡
                </div>

                <h4 className="font-bold text-xl text-[#4C1D95] mb-3">
                  IoT Monitoring
                </h4>

                <p className="text-[#6B7280] leading-7">
                  Real-time sensor monitoring and smart automation.
                </p>
              </div>

              {/* CARD */}
              <div className="bg-white border border-[#E9D5FF] rounded-3xl p-7 hover:-translate-y-1 transition shadow-md hover:shadow-xl">

                <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-3xl mb-5">
                  📊
                </div>

                <h4 className="font-bold text-xl text-[#4C1D95] mb-3">
                  Reporting Dashboard
                </h4>

                <p className="text-[#6B7280] leading-7">
                  Interactive dashboards with live analytics.
                </p>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center text-xl shadow-lg">
                3
              </div>

              <h3 className="text-3xl font-bold text-[#4C1D95]">
                Pricing & Terms
              </h3>
            </div>

            <div className="bg-gradient-to-br from-[#7C3AED] to-[#A855F7] rounded-[32px] p-8 text-white shadow-2xl">

              <div className="space-y-6">

                <div className="flex justify-between items-center border-b border-white/20 pb-5">

                  <span className="text-lg text-purple-100">
                    Implementation Cost
                  </span>

                  <span className="text-3xl font-bold">
                    $150,000
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-white/20 pb-5">

                  <span className="text-lg text-purple-100">
                    Annual Subscription
                  </span>

                  <span className="text-3xl font-bold">
                    $24,000/year
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">

                  <span className="text-2xl font-bold">
                    Total First Year
                  </span>

                  <span className="text-5xl font-black">
                    $174,000
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ATTACHMENTS */}
          <section>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center text-xl shadow-lg">
                📎
              </div>

              <h3 className="text-3xl font-bold text-[#4C1D95]">
                Attachments
              </h3>
            </div>

            <div className="space-y-5">

              {[
                "Technical Specifications.pdf",
                "AI Architecture Document.pdf",
                "Pricing Breakdown.pdf",
              ].map((file, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#E9D5FF] rounded-3xl px-7 py-6 flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-3xl">
                      📄
                    </div>

                    <div>

                      <p className="font-bold text-[#4C1D95] text-lg">
                        {file}
                      </p>

                      <p className="text-[#6B7280] mt-1">
                        PDF Document
                      </p>
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition shadow-lg">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <div className="bg-[#F5F3FF] border-t border-[#E9D5FF] px-10 py-7 flex items-center justify-between">

          <div>

            <p className="font-bold text-[#4C1D95] text-lg">
              PropoAI
            </p>

            <p className="text-[#6B7280] mt-1">
              AI Proposal Automation Platform
            </p>
          </div>

          <div className="text-right">

            <p className="text-[#6B7280]">
              Confidential Proposal Document
            </p>

            <p className="text-sm text-[#9CA3AF] mt-1">
              © 2024 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
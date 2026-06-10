import { useNavigate } from "react-router-dom";

export default function Docs() {
  const navigate = useNavigate();

  /* ================= SIDEBAR MENU ================= */

  const docsMenu = [
    {
      category: "Getting Started",
      items: [
        "Introduction",
        "Getting Started",
        "Installation",
        "Quick Setup",
      ],
    },

    {
      category: "Core System",
      items: [
        "Project Workflow",
        "AI Generation",
        "Template Engine",
        "Export System",
      ],
    },

    {
      category: "Integrations",
      items: [
        "API Integration",
        "Cloud Storage",
        "Analytics",
        "Webhooks",
      ],
    },

    {
      category: "Enterprise",
      items: [
        "Security",
        "Deployment",
        "Team Collaboration",
        "Permissions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* ================= GRID BACKGROUND ================= */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-40
        "
      ></div>

      {/* ================= GLOW EFFECTS ================= */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-fuchsia-500/10 blur-[150px] rounded-full"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* ================= NAVBAR ================= */}
        <nav className="flex justify-between items-center px-6 md:px-10 py-5 border-b border-white/10 backdrop-blur-xl bg-black/20">

          {/* LOGO */}
          <h1
            className="
              text-2xl
              md:text-3xl
              font-semibold
              bg-gradient-to-r
              from-white
              via-purple-200
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            PROPOSIFY
          </h1>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="
              px-6
              py-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            Back Home
          </button>

        </nav>

        {/* ================= HERO ================= */}
        <section className="text-center pt-28 pb-20 px-4">

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              mb-8
            "
          >

            <div className="w-2 h-2 rounded-full bg-purple-400"></div>

            <span className="text-gray-300 text-sm tracking-wide">
              Documentation
            </span>

          </div>

          {/* TITLE */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-semibold
              leading-[0.95]
              tracking-[-3px]
            "
          >

            <span className="text-white">
              Modern AI
            </span>

            <br />

            <span
              className="
                bg-gradient-to-b
                from-white
                via-purple-200
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Documentation
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              text-gray-400
              max-w-3xl
              mx-auto
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Professional documentation platform for AI-powered
            proposal workflows, automation systems, APIs,
            enterprise integrations, and smart business operations.
          </p>

        </section>

        {/* ================= DOC LAYOUT ================= */}
        <section className="max-w-7xl mx-auto px-4 pb-24">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[320px_1fr]
              gap-8
            "
          >

            {/* ================= SIDEBAR ================= */}
            <div
              className="
                h-fit
                sticky
                top-10
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-6
              "
            >

              {/* TITLE */}
              <h2 className="text-white text-2xl font-semibold mb-8">
                Documentation
              </h2>

              {/* MENU */}
              <div className="space-y-8">

                {docsMenu.map((section, index) => (

                  <div key={index}>

                    {/* CATEGORY */}
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[3px]
                        text-purple-300
                        mb-4
                      "
                    >
                      {section.category}
                    </p>

                    {/* ITEMS */}
                    <div className="space-y-2">

                      {section.items.map((item, i) => (

                        <button
                          key={i}
                          className="
                            group
                            relative
                            w-full
                            text-left
                            px-4
                            py-3
                            rounded-2xl
                            text-gray-400
                            hover:text-white
                            hover:bg-white/[0.04]
                            transition-all
                            duration-300
                            overflow-hidden
                          "
                        >

                          {/* ACTIVE GLOW */}
                          <div
                            className="
                              absolute
                              inset-y-0
                              left-0
                              w-[3px]
                              bg-gradient-to-b
                              from-purple-400
                              to-fuchsia-500
                              opacity-0
                              group-hover:opacity-100
                              transition
                            "
                          ></div>

                          {/* TEXT */}
                          <span className="relative z-10">
                            {item}
                          </span>

                        </button>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                md:p-12
              "
            >

              {/* TOP */}
              <div className="border-b border-white/10 pb-8 mb-10">

                <p className="text-purple-300 text-sm tracking-[3px] uppercase mb-4">
                  Introduction
                </p>

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    font-semibold
                    leading-tight
                    tracking-[-2px]
                  "
                >
                  AI Proposal Documentation Platform
                </h2>

                <p className="mt-6 text-gray-400 leading-relaxed text-lg max-w-4xl">

                  Proposify provides a modern AI-powered workflow
                  system designed for generating proposals,
                  presentations, documentation, RFI/RFP systems,
                  and enterprise business processes with intelligent automation.

                </p>

              </div>

              {/* CONTENT */}
              <div className="space-y-14">

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-5">
                    Smart Project Workflow
                  </h3>

                  <p className="text-gray-400 leading-8 text-[17px]">

                    Create scalable proposal workflows using structured
                    project systems, reusable templates, AI-assisted content
                    generation, and enterprise-level automation pipelines.

                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-5">
                    AI Content Generation
                  </h3>

                  <p className="text-gray-400 leading-8 text-[17px]">

                    Generate intelligent business content instantly using
                    advanced AI writing systems optimized for modern
                    enterprise proposal creation and documentation workflows.

                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-5">
                    Enterprise Integration
                  </h3>

                  <p className="text-gray-400 leading-8 text-[17px]">

                    Integrate APIs, cloud systems, analytics pipelines,
                    storage platforms, and business automation services
                    into a unified intelligent proposal ecosystem.

                  </p>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white mb-5">
                    Export & Collaboration
                  </h3>

                  <p className="text-gray-400 leading-8 text-[17px]">

                    Share proposals securely, generate branded PDFs,
                    manage revisions, collaborate with teams,
                    and automate enterprise documentation delivery.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">

          © 2026 Proposify — AI Powered Proposal Platform

        </footer>

      </div>

    </div>
  );
}
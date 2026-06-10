import ChromaGrid from "../components/ChromaGrid";

export default function Presentation() {

  return (

    <div className="min-h-screen relative overflow-hidden bg-[#050816] text-white">

      {/* GRID BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:70px_70px]
          opacity-30
        "
      ></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[180px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              mb-10
            "
          >

            <div className="w-2 h-2 rounded-full bg-purple-400"></div>

            <span className="text-gray-300 text-sm tracking-wide">
              AI Presentation Platform
            </span>

          </div>

          {/* HEADING */}
          <h1
            className="
              text-4xl
              sm:text-6xl
              lg:text-7xl
              font-semibold
              leading-tight
              tracking-[-3px]
            "
          >

            <span className="text-white">
              Create Stunning
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
              AI Presentations
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              text-gray-400
              text-sm
              sm:text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >

            Design modern presentations with
            intelligent AI automation, premium layouts,
            and professional animations.

          </p>

          {/* BUTTON */}
          <button
            className="
              mt-12
              px-8
              py-4
              rounded-2xl
              bg-white
              text-black
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_40px_rgba(255,255,255,0.15)]
            "
          >
            Get Started
          </button>

        </section>

        {/* ================= PRESENTATION GRID ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20">

          {/* TOP */}
          <div className="text-center mb-16">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                mb-8
              "
            >

              <div className="w-2 h-2 rounded-full bg-purple-400"></div>

              <span className="text-gray-300 text-sm tracking-wide">
                Templates
              </span>

            </div>

            <h2
              className="
                text-3xl
                sm:text-5xl
                font-semibold
                leading-tight
                tracking-[-2px]
              "
            >

              <span className="text-white">
                Presentation
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
                Gallery
              </span>

            </h2>

          </div>

          {/* GRID */}
          <ChromaGrid />

        </section>

        {/* ================= CTA ================= */}
        <section className="relative py-24 px-4 sm:px-6 overflow-hidden">

          {/* GLOW */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full"></div>

          <div className="relative z-10 max-w-6xl mx-auto">

            <div
              className="
                rounded-[36px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-10 sm:p-16
                text-center
              "
            >

              <h2
                className="
                  text-3xl
                  sm:text-5xl
                  font-semibold
                  leading-tight
                "
              >

                <span className="text-white">
                  Build Better
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
                  Presentations Faster
                </span>

              </h2>

              <p
                className="
                  mt-6
                  text-gray-400
                  text-sm
                  sm:text-lg
                  max-w-2xl
                  mx-auto
                  leading-relaxed
                "
              >

                Create powerful business presentations
                using intelligent AI workflows and
                modern design systems.

              </p>

              <button
                className="
                  mt-10
                  px-8
                  py-4
                  rounded-2xl
                  bg-white
                  text-black
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Start Creating
              </button>

            </div>

          </div>

        </section>

        {/* ================= FOOTER ================= */}
        <section className="relative overflow-hidden py-24 px-4 sm:px-6">

          {/* GLOW */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full"></div>

          {/* HUGE TEXT */}
          <h1
            className="
              absolute
              inset-0
              flex
              items-end
              justify-center
              text-[70px]
              sm:text-[120px]
              lg:text-[220px]
              font-black
              text-white/[0.03]
              tracking-[8px]
              select-none
              pointer-events-none
              leading-none
            "
          >
            PROPOSIFY
          </h1>

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="border-t border-white/10 mb-16"></div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14">

              {[
                {
                  title: "Product",
                  items: ["Presentations", "Templates", "AI Generator", "Analytics"]
                },
                {
                  title: "Company",
                  items: ["About", "Careers", "Team", "Community"]
                },
                {
                  title: "Social",
                  items: ["Instagram", "LinkedIn", "YouTube", "Twitter"]
                },
                {
                  title: "Legal",
                  items: ["Privacy Policy", "Terms", "Cookies", "Security"]
                }
              ].map((section, i) => (

                <div key={i}>

                  <h3 className="text-base sm:text-lg font-semibold text-white mb-5">
                    {section.title}
                  </h3>

                  <ul className="space-y-3 text-sm text-gray-400">

                    {section.items.map((item, idx) => (

                      <li
                        key={idx}
                        className="hover:text-purple-300 transition cursor-pointer"
                      >
                        {item}
                      </li>

                    ))}

                  </ul>

                </div>

              ))}

            </div>

            {/* BOTTOM */}
            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-gray-500 text-sm">
                © 2026 Proposify. All rights reserved.
              </p>

              <p className="text-gray-600 text-sm">
                AI Powered Presentation Platform
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>

  );

}
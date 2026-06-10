import { Search } from "lucide-react";
import BorderGlow from "../components/BorderGlow";

export default function BlogPage() {

  const blogs = [
    {
      title: "How AI is Transforming Proposal Writing",
      image: "/images/blogg1.png",
      category: "AI Proposal",
    },
    {
      title: "Top 10 Business Proposal Design Ideas",
      image: "/images/blogg2.png",
      category: "Design",
    },
    {
      title: "Create Winning Client Presentations Easily",
      image: "/images/blogg3.png",
      category: "Presentation",
    },
    {
      title: "Best Proposal Templates for Startups",
      image: "/images/blogg4.png",
      category: "Templates",
    },
    {
      title: "How to Impress Investors with AI",
      image: "/images/blogg5.png",
      category: "Business",
    },
    {
      title: "Smart Automation Tools for Teams",
      image: "/images/blogg6.png",
      category: "Automation",
    },
  ];

  return (

    <div className="min-h-screen relative overflow-hidden bg-[#050816] text-white">

      {/* GRID BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-30
        "
      ></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full"></div>

      <div className="absolute top-40 right-0 w-[450px] h-[450px] bg-fuchsia-500/10 blur-[180px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <section className="text-center pt-32 pb-20 px-4 sm:px-6">

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

            <span className="text-sm text-gray-300 tracking-wide">
              AI Powered Blogs
            </span>

          </div>

          {/* TITLE */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-semibold
              leading-tight
              tracking-[-2px]
            "
          >

            <span className="text-white">
              Explore Smart
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
              AI Insights
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              text-sm
              sm:text-base
              md:text-lg
              text-gray-400
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >

            Discover proposal strategies, AI automation tips,
            business workflows, and presentation ideas to
            improve productivity and create stunning content.

          </p>

          {/* SEARCH BOX */}
          <div className="max-w-2xl mx-auto mt-12 relative">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search articles..."
              className="
                w-full
                py-4
                pl-14
                pr-5
                rounded-2xl
                bg-white/[0.05]
                border
                border-white/10
                backdrop-blur-xl
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-purple-500/40
                transition-all
              "
            />

          </div>

        </section>

        {/* ================= BLOG GRID ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-2xl
                  hover:border-purple-500/30
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="
                      h-64
                      sm:h-72
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* CATEGORY */}
                  <span
                    className="
                      inline-block
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      bg-purple-500/10
                      border
                      border-purple-500/20
                      text-purple-300
                      mb-5
                    "
                  >
                    {blog.category}
                  </span>

                  {/* TITLE */}
                  <h2
                    className="
                      text-xl
                      sm:text-2xl
                      font-semibold
                      leading-snug
                      text-white
                      group-hover:text-purple-300
                      transition
                    "
                  >
                    {blog.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">

                    Learn modern AI-powered strategies to create
                    professional proposals, improve workflow,
                    and grow your business faster.

                  </p>

                  {/* BUTTON */}
                  <div className="mt-7">

                    <BorderGlow
                      glowColor="270 100 75"
                      borderRadius={18}
                      glowRadius={25}
                      className="inline-block"
                      colors={["#9333ea", "#c084fc", "#7e22ce"]}
                    >

                      <button
                        className="
                          px-5
                          py-2.5
                          rounded-xl
                          text-sm
                          font-medium
                          text-white
                          bg-gradient-to-r
                          from-purple-700
                          via-fuchsia-600
                          to-purple-800
                          hover:scale-105
                          transition-all
                          duration-300
                        "
                      >
                        Read More
                      </button>

                    </BorderGlow>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>
        {/* ================= PREMIUM CTA ================= */}
        <section className="relative py-28 px-4 overflow-hidden">
        
          {/* BACKGROUND GLOW */}
          <div className=" relative overflow-hidden absolute inset-0 flex justify-center">
        
            <div className="w-[700px] h-[700px] bg-purple-600/15 blur-[180px] rounded-full"></div>
        
          </div>
        
          {/* CONTENT */}
          <div className="relative z-10 max-w-6xl mx-auto">
        
            {/* MAIN CARD */}
            <div
              className="
              relative overflow-hidden
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-14
                md:p-20
                text-center
              "
            >
        
              {/* ================= BORDER BEAM ================= */}
              <BorderBeam
                size={250}
                duration={12}
              />
        
              {/* TOP LIGHT */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-500/20 blur-[100px]"></div>
        
              {/* SMALL BADGE */}
              <div
                className="
                relative overflow-hidden
                  relative
                  z-10
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  mb-10
                "
              >
        
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
        
                <span className="text-gray-300 tracking-wide">
                  AI Powered Workflow
                </span>
        
              </div>
        
              {/* HEADING */}
              <h2
                className="
                relative overflow-hidden
                  relative
                  z-10
                  text-3xl
                  md:text-6xl
                  font-semibold
                  leading-[1]
                  tracking-[-3px]
                "
              >
        
                <span className="text-white">
                  Build Faster
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
                  With AI
                </span>
        
              </h2>
        
              {/* DESCRIPTION */}
              <p
                className="
                  relative
                  z-10
                  mt-8
                  text-base
                  md:text-xl
                  text-gray-400
                  max-w-xl
                  mx-auto
                  leading-relaxed
                "
              >
        
                Create professional proposals, presentations,
                and business workflows instantly using
                intelligent AI automation.
        
              </p>
        
              {/* BUTTONS */}
              <div className=" relative overflow-hidden relative z-10 flex justify-center flex-wrap gap-6 mt-14">
        
                {/* ================= PRIMARY BUTTON ================= */}
                <div className=" relative overflow-hidden relative overflow-hidden rounded-2xl">
        
                  <BorderBeam
                    size={80}
                    duration={6}
                  />
        
                  <button
                    onClick={() => navigate("/register")}
                    className="
                    relative overflow-hidden
                      relative
                      z-10
                      px-8
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-purple-600
                      via-fuchsia-500
                      to-purple-700
                      text-white
                      font-semibold
                      text-lg
                      hover:scale-105
                      transition-all
                      duration-300
                      shadow-[0_0_40px_rgba(168,85,247,0.30)]
                    "
                  >
                    Start Free
                  </button>
        
                </div>
        
                {/* ================= SECONDARY BUTTON ================= */}
                <div className=" relative overflow-hidden relative overflow-hidden rounded-2xl">
        
                  <BorderBeam
                    size={80}
                    duration={6}
                  />
        
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="
                    relative overflow-hidden
                      relative
                      z-10
                      px-8
                      py-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      text-white
                      font-semibold
                      text-lg
                      hover:bg-white
                      hover:text-black
                      transition-all
                      duration-300
                    "
                  >
                    Live Demo
                  </button>
        
                </div>
        
              </div>
        
            </div>
        
          </div>
        
        </section>

        {/* ================= FOOTER ================= */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6">

          {/* BIG BACKGROUND TEXT */}
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

          {/* FOOTER CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="border-t border-white/10 mb-14"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

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
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-gray-500 text-sm">
                © 2026 Proposify. All rights reserved.
              </p>

              <p className="text-gray-600 text-sm">
                AI Powered Proposal Platform
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
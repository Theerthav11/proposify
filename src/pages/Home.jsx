import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import BorderGlow from "../components/BorderGlow";
import { BorderBeam } from "../components/magicui/BorderBeam";
export default function Home() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* GRID BACKGROUND */}
<div
  className="
    absolute inset-0
    bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
    bg-[size:70px_70px]
    opacity-30
  "
></div>

     

      {/* ================= PREMIUM GLOW EFFECTS ================= */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F5B321]/10 blur-[180px] rounded-full"></div>

      <div className="absolute top-40 right-0 w-[450px] h-[450px] bg-[#3A4657]/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#232D3D]/30 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-[#F5B321]/10 blur-[160px] rounded-full"></div>

      {/* ================= WEBSITE CONTENT ================= */}
      <div className="relative z-10">

        {/* ================= NAVBAR ================= */}
        <nav className="relative z-[99999] flex justify-between items-center px-4 md:px-10 py-4 border-b border-white/5 backdrop-blur-xl bg-black/20">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            
          <h1
  className="
    break-words
    text-[2px]
    md:text-xl
    font-semibold
    tracking-[1px]
    bg-gradient-to-r
    from-white
    via-purple-100
    to-purple-400
    bg-clip-text
    text-transparent
  "
>
  PROPOSIFY
</h1>

          </div>

          {/* ================= MENU ================= */}
          <div className="hidden md:flex gap-8 text-[#C4CDD9] font-medium items-center">

            {/* PRODUCT DROPDOWN */}
          <div className="relative group z-[9999]">

  {/* PRODUCT BUTTON */}
  <button className=" relative overflow-hidden break-words hover:text-[#797979] transition py-3">
    Product
  </button>

  {/* DROPDOWN */}
 <div
  className="
    absolute
    left-0
    top-full
    hidden
    group-hover:block
    z-[99999]
    pt-3
  "
>
    <div className="w-56 bg-black border border-[#333333] rounded-2xl shadow-2xl p-2">

      <button
        onClick={() => navigate("/presentation")}
        className=" relative overflow-hidden break-words w-full text-left px-4 py-3 rounded-xl hover:bg-[#E6E6E6]"
      >
        Presentation
      </button>

      

      <button
        onClick={() => navigate("/blog")}
        className=" relative overflow-hidden break-words w-full text-left px-4 py-3 rounded-xl text-white hover:bg-[#242525]"
      >
        Blog
      </button>

      

      

    </div>

  </div>

</div>

            {/* NAV ITEMS */}
            

            

            <button
              onClick={() => navigate("/docs")}
              className="relative overflow-hidden  break-words hover:text-[#F5B321] transition"
            >
              Docs
            </button>

          </div>

          {/* ================= AUTH BUTTONS ================= */}
          <div className="flex gap-4">

            <button className="relative overflow-hidden  break-words text-[#C4CDD9] hover:text-[#F5B321] transition">
              Login
            </button>

            <BorderGlow
            animated={true}
  glowColor="270 100 75"
  borderRadius={22}
  glowRadius={50}
  className="inline-block"
  colors={["#9333ea", "#c084fc", "#7e22ce"]}
>

  <button
    onClick={() => navigate("/register")}
    className="
    relative overflow-hidden
      px-6 py-3
      rounded-2xl
      font-semibold
      text-white
      bg-gradient-to-r
      from-purple-600
      via-fuchsia-500
      to-purple-700
      hover:scale-105
      transition-all
      duration-300
    "
  >
    Start Free
  </button>

</BorderGlow>

          </div>

        </nav>

       {/* ================= HERO SECTION ================= */}
{/* ================= PREMIUM HERO ================= */}
<section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#030303] px-6">

 {/* PURE BLACK BASE */}
<div className="absolute inset-0 bg-black"></div>

{/* VERY SOFT SHINE */}
<div
  className="absolute inset-0"
  style={{
    background: `
      radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 30%)
    `
  }}
></div>

{/* GRID */}
<div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "80px 80px",
  }}
></div>

{/* TOP PURPLE GLOW */}
<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[150px] rounded-full"></div>

{/* LEFT BLUE GLOW */}
<div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full"></div>

{/* RIGHT PINK GLOW */}
<div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-fuchsia-500/10 blur-[140px] rounded-full"></div>

  {/* CONTENT */}
  <div className="relative z-10 text-center max-w-7xl mx-auto">

    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050816] to-transparent"></div>

    {/* BADGE */}
    <div
      className="
        inline-flex items-center gap-3
        px-6 py-3
        rounded-full
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(168,85,247,0.08)]
        mb-12
      "
    >
      <span className="text-yellow-400 text-sm">✨</span>

      <span className="text-gray-200 text-sm sm:text-base font-medium tracking-wide">
        AI Agentic Platform
      </span>

      <span className="text-gray-400">→</span>
    </div>

    {/* HEADING */}
    <h1
      className="
        text-[58px]
        sm:text-[80px]
        md:text-[110px]
        lg:text-[118px]
        leading-[0.92]
        font-bold
        tracking-[-3px]
      "
    >
      <span className="text-white">
        Create Smart 
      </span>

      <br />

      <span
        className="
          bg-gradient-to-r
          from-[#A855F7]
via-[#D946EF]
to-[#EC4899]
          bg-clip-text
          text-transparent
        "
      >
        AI  Proposals.
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p
      className="
        mt-10
        text-gray-400
        text-base
        sm:text-lg
        md:text-2xl
        leading-relaxed
        max-w-4xl
        mx-auto
      "
    >
     Generate stunning proposals, presentations,
      documentation, and business workflows using
      powerful AI automation tools.
    </p>

    {/* BUTTON */}
    
  </div>

</section>


{/* ================= VIDEO SECTION ================= */}
<section className="relative bg-black py-24 overflow-hidden">

  {/* TOP FADE */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050816] to-transparent"></div>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[700px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-6xl font-bold text-white">
        Watch AI In Action
      </h2>

      <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
        Experience how our AI platform creates stunning proposals,
        presentations, and workflows within seconds.
      </p>
    </div>

    {/* VIDEO CONTAINER */}
    <div
      className="
        relative
        rounded-[32px]
        overflow-hidden
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_60px_rgba(168,85,247,0.18)]
      "
    >

      {/* VIDEO */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src="/videos/demo.mp4" type="video/mp4" />
      </video>

    </div>

  </div>
</section>






{/* ================= FEATURES SECTION ================= */}
<section
  className="
    relative
    isolate
    z-10
    py-28
    px-4
    sm:px-6
    overflow-hidden
    bg-transparent
  "
>

  {/* BACKGROUND GLOW */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[200px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* TRUST TEXT */}
  <div className="flex justify-center">
  <div
    className="
      inline-flex
      items-center
      gap-2
      px-6
      py-3
      rounded-full
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      mb-8
    "
  >
    <div className="w-2 h-2 rounded-full bg-purple-400"></div>

    <span className="text-gray-300 text-sm tracking-[3px] uppercase">
      Features
    </span>
  </div>
</div>
    {/* FEATURE GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

      {[
        {
          icon: "⚡",
          title: "AI Automation",
          desc: "Generate proposals, reports, and presentations instantly with advanced AI workflows."
        },

        {
          icon: "✨",
          title: "Smart Templates",
          desc: "Use premium ready-made templates designed for modern businesses and startups."
        },

        {
          icon: "📊",
          title: "Analytics",
          desc: "Track engagement, proposal opens, views, and client interactions in real time."
        },

        {
          icon: "🧠",
          title: "AI Writing",
          desc: "Automatically generate professional business content within seconds."
        },

        {
          icon: "🚀",
          title: "Fast Workflow",
          desc: "Create documents and presentations faster with intelligent automation."
        },

        {
          icon: "🔒",
          title: "Enterprise Security",
          desc: "Secure cloud infrastructure with premium business-grade protection."
        }

      ].map((feature, i) => (

        <div
          key={i}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-8
            hover:border-purple-500/40
            transition-all
            duration-500
            hover:-translate-y-2
          "
        >

          {/* BORDER BEAM */}
          <BorderBeam
            size={180}
            duration={8}
          />

          {/* HOVER LIGHT */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              bg-gradient-to-b
              from-purple-500/10
              to-transparent
            "
          ></div>

          {/* TOP GLOW */}
          <div
            className="
              absolute
              -top-10
              right-0
              w-40
              h-40
              bg-purple-500/10
              blur-[80px]
              rounded-full
            "
          ></div>

          {/* ICON */}
          <div
            className="
              relative
              z-10
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-br
              from-purple-500
              via-fuchsia-500
              to-purple-700
              flex
              items-center
              justify-center
              text-3xl
              shadow-[0_0_35px_rgba(168,85,247,0.35)]
            "
          >
            {feature.icon}
          </div>

          {/* TITLE */}
          <h3
            className="
              relative
              z-10
              mt-7
              text-2xl
              font-semibold
              text-white
            "
          >
            {feature.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              relative
              z-10
              mt-4
              text-gray-400
              leading-8
              text-sm
              sm:text-base
            "
          >
            {feature.desc}
          </p>

          {/* BOTTOM TEXT */}
          {/* <div
            className="
              relative
              z-10
              mt-8
              flex
              items-center
              gap-2
              text-purple-300
              text-sm
              font-medium
              tracking-wide
            "
          >

            Learn More

            <span className="group-hover:translate-x-1 transition duration-300">
              →
            </span>

          </div> */}

        </div>

      ))}

    </div>

  </div>

</section>

    {/* ================= INDUSTRIES ================= */}
<section className=" relative overflow-hidden relative py-20 px-4 sm:px-6 overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[200px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* ================= TOP CONTENT ================= */}
    <div className="text-center mb-20">

      {/* BADGE */}
      <div
        className="
        

          inline-flex
          items-center
          gap-2
          px-6
          py-3
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          mb-8
        "
      >

        <div className="w-2 h-2 rounded-full bg-purple-400"></div>

        <span className="text-gray-300 text-sm tracking-[3px] uppercase">
          Industries
        </span>

      </div>

      {/* HEADING */}
      <h2
        className="
          text-4xl
          sm:text-5xl
          md:text-7xl
          font-semibold
          leading-[0.95]
          tracking-[-4px]
        "
      >

        <span className="text-white">
          Built For
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
          Every Industry
        </span>

      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          mt-8
          text-gray-400
          text-sm
          sm:text-base
          md:text-lg
          max-w-2xl
          mx-auto
          leading-relaxed
        "
      >

        Intelligent AI workflow automation and proposal generation
        designed for modern startups, enterprises, and creative teams.

      </p>

    </div>

    {/* ================= INDUSTRIES GRID ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

      {[
        {
          icon: "💻",
          title: "Software & IT",
          desc: "AI-powered workflows, technical documentation, and proposal automation for modern development teams.",
        },

        {
          icon: "📈",
          title: "Marketing",
          desc: "Generate campaign proposals, presentations, and client-ready business documents instantly.",
        },

        {
          icon: "🎓",
          title: "Education",
          desc: "Create smart learning documentation, institutional workflows, and AI-powered reports.",
        },

        {
          icon: "🚘",
          title: "Automobile",
          desc: "Automate dealership workflows, business reports, and proposal generation systems efficiently.",
        },

        {
          icon: "🛍️",
          title: "Fashion",
          desc: "Build modern brand presentations, product catalogs, and premium marketing documents.",
        },

        {
          icon: "🏥",
          title: "Healthcare",
          desc: "Secure AI automation for healthcare workflows, proposal systems, and enterprise operations.",
        },
      ].map((industry, i) => (

        <div
          key={i}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-8
            hover:border-purple-500/40
            transition-all
            duration-500
            hover:-translate-y-2
          "
        >

          {/* ================= BORDER BEAM ================= */}
          <BorderBeam
            size={180}
            duration={8}
          />

          {/* HOVER LIGHT */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              bg-gradient-to-b
              from-purple-500/10
              to-transparent
            "
          ></div>

          {/* TOP GLOW */}
          <div
            className="
              absolute
              -top-10
              right-0
              w-40
              h-40
              bg-purple-500/10
              blur-[80px]
              rounded-full
            "
          ></div>

          {/* ICON */}
          <div
            className="
              relative
              z-10
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-br
              from-purple-500
              via-fuchsia-500
              to-purple-700
              flex
              items-center
              justify-center
              text-3xl
              shadow-[0_0_35px_rgba(168,85,247,0.35)]
            "
          >
            {industry.icon}
          </div>

          {/* TITLE */}
          <h3
            className="
              relative
              z-10
              mt-7
              text-2xl
              font-semibold
              text-white
            "
          >
            {industry.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              relative
              z-10
              mt-4
              text-gray-400
              leading-8
              text-sm
              sm:text-base
            "
          >
            {industry.desc}
          </p>

          {/* BOTTOM LINE */}
          {/* <div
            className="
              relative
              z-10
              mt-8
              flex
              items-center
              gap-2
              text-purple-300
              text-sm
              font-medium
              tracking-wide
            "
          >

            Explore Industry

            <span className="group-hover:translate-x-1 transition duration-300">
              →
            </span>

          </div> */}

        </div>

      ))}

    </div>

  </div>

</section>




{/* ================= PREMIUM CTA ================= */}
<section className="relative pt-0 pb-10 px-4 overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none">

    <div className="absolute w-[550px] h-[550px] bg-purple-600/10 blur-[120px] rounded-full"></div>

  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto">

    {/* MAIN CARD */}
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-8
        md:p-10
        text-center
      "
    >

      <BorderBeam
        size={250}
        duration={12}
      />

      {/* TOP LIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-purple-500/10 blur-[80px]"></div>

      {/* SMALL BADGE */}
      <div
        className="
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
          mb-6
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
          relative
          z-10
          text-3xl
          md:text-6xl
          font-semibold
          leading-none
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
          mt-5
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
      <div className="relative z-10 flex justify-center flex-wrap gap-6 mt-10">

        <div className="relative overflow-hidden rounded-2xl">

          <BorderBeam
            size={80}
            duration={6}
          />

          <button
            onClick={() => navigate("/register")}
            className="
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

        <div className="relative overflow-hidden rounded-2xl">

          <BorderBeam
            size={80}
            duration={6}
          />

          <button
            onClick={() => navigate("/dashboard")}
            className="
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
      {/* ================= PREMIUM FOOTER ================= */}
<section className="relative overflow-hidden py-24 px-4 sm:px-6">

  {/* BACKGROUND GLOW */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full"></div>

  {/* HUGE BACKGROUND TEXT */}
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

    {/* TOP BORDER */}
    <div className="border-t border-white/10 mb-16"></div>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14">

      {/* PRODUCT */}
      <div>

        <h3 className="text-base sm:text-lg font-semibold text-white mb-5">
          Product
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">

          <li className="hover:text-purple-300 transition cursor-pointer">
            Presentations
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Templates
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            AI Generator
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Analytics
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Insights
          </li>

        </ul>

      </div>

      {/* COMPANY */}
      <div>

        <h3 className="text-base sm:text-lg font-semibold text-white mb-5">
          Company
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">

          <li className="hover:text-purple-300 transition cursor-pointer">
            About
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Careers
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Team
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Community
          </li>

        </ul>

      </div>

      {/* SOCIAL */}
      <div>

        <h3 className="text-base sm:text-lg font-semibold text-white mb-5">
          Social
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">

          <li className="hover:text-purple-300 transition cursor-pointer">
            Instagram
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            LinkedIn
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            YouTube
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Twitter
          </li>

        </ul>

      </div>

      {/* LEGAL */}
      <div>

        <h3 className="text-base sm:text-lg font-semibold text-white mb-5">
          Legal
        </h3>

        <ul className="space-y-3 text-sm text-gray-400">

          <li className="hover:text-purple-300 transition cursor-pointer">
            Privacy Policy
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Terms of Service
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Cookies
          </li>

          <li className="hover:text-purple-300 transition cursor-pointer">
            Security
          </li>

        </ul>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

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
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3A] via-[#102B52] to-[#0F172A]">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-6">

        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-3">
          <span className="text-4xl">🤖</span>

          <h1 className="text-3xl font-bold text-yellow-400">
            Proposify
          </h1>
        </div>

        {/* ================= NAVBAR LINKS ================= */}
        <div className="hidden md:flex gap-8 text-white font-medium items-center">

          {/* ================= PRODUCT DROPDOWN ================= */}
          <div className="relative group">

            <button className="hover:text-yellow-400 transition">
              Product
            </button>

            {/* Dropdown */}
            <div className="absolute top-10 left-0 hidden group-hover:flex flex-col bg-white text-black rounded-2xl shadow-2xl w-56 p-2 z-50">

              <button
                onClick={() => navigate("/presentation")}
                className="text-left px-4 py-3 hover:bg-yellow-100 rounded-xl transition"
              >
                Presentation
              </button>

              <button
                onClick={() => navigate("/documentation")}
                className="text-left px-4 py-3 hover:bg-yellow-100 rounded-xl transition"
              >
                Documentation
              </button>

              <button
                onClick={() => navigate("/blog")}
                className="text-left px-4 py-3 hover:bg-yellow-100 rounded-xl transition"
              >
                Blog
              </button>

              <button
                onClick={() => navigate("/brochure")}
                className="text-left px-4 py-3 hover:bg-yellow-100 rounded-xl transition"
              >
                Brochure
              </button>

              <button
                onClick={() => navigate("/api")}
                className="text-left px-4 py-3 hover:bg-yellow-100 rounded-xl transition"
              >
                API
              </button>

            </div>
          </div>

          {/* ================= OTHER LINKS ================= */}
          <button
            onClick={() => navigate("/docs")}
            className="hover:text-yellow-400 transition"
          >
            Docs
          </button>

          <button
            onClick={() => navigate("/pricing")}
            className="hover:text-yellow-400 transition"
          >
            Pricing
          </button>

          <button
            onClick={() => navigate("/industries")}
            className="hover:text-yellow-400 transition"
          >
            Industries
          </button>

        </div>

        {/* ================= RIGHT BUTTONS ================= */}
        <div className="flex gap-4">

          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 text-white hover:text-yellow-400 transition font-medium"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition font-bold shadow-lg"
          >
            Start for Free
          </button>

        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-24 gap-14">

        {/* ================= LEFT SIDE ================= */}
        <div className="md:w-1/2">

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">

            Create proposals that{" "}

            <span className="text-yellow-400">
              win more business
            </span>

          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            PropoAI helps teams create, send, and track beautiful
            proposals that close deals faster using powerful
            AI-driven automation and smart workflows.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="flex gap-5 flex-wrap">

            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 bg-yellow-400 text-black rounded-2xl hover:bg-yellow-300 transition font-bold shadow-2xl"
            >
              Get Started Free
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="px-5 py-3 border border-yellow-400 text-yellow-400 rounded-2xl hover:bg-yellow-400 hover:text-black transition font-bold"
            >
              View Demo
            </button>

          </div>

        </div>

        {/* ================= RIGHT SIDE CAROUSEL ================= */}
        <div className="md:w-1/2 flex justify-center">

          <Carousel />

        </div>

      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-24 max-w-7xl mx-auto">

        {/* ================= FEATURE 1 ================= */}
        <div className="bg-[#13294B] border border-yellow-400/20 p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition duration-300">

          <div className="text-5xl mb-5 text-yellow-400">
            📄
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Beautiful Templates
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Choose from premium proposal templates and customize
            them easily for your business branding.
          </p>

        </div>

        {/* ================= FEATURE 2 ================= */}
        <div className="bg-[#13294B] border border-yellow-400/20 p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition duration-300">

          <div className="text-5xl mb-5 text-yellow-400">
            ✏️
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Easy Content
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Save time using reusable AI-powered content blocks
            and proposal automation tools.
          </p>

        </div>

        {/* ================= FEATURE 3 ================= */}
        <div className="bg-[#13294B] border border-yellow-400/20 p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition duration-300">

          <div className="text-5xl mb-5 text-yellow-400">
            📊
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Track & Insights
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Monitor proposal engagement, client activity,
            and real-time analytics effortlessly.
          </p>

        </div>

      </div>

    </div>
  );
}
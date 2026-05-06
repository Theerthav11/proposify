import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-yellow via-primary-coral to-primary-teal">

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🤖</span>
          <h1 className="text-2xl font-bold text-primary-navy">PropoAI</h1>
        </div>

        {/* NEW: Middle Navbar Links */}
        <div className="hidden md:flex gap-6 text-primary-navy font-medium">
          <button onClick={() => navigate("/product")} className="hover:underline">
            Product
          </button>
          <button onClick={() => navigate("/docs")} className="hover:underline">
            Docs
          </button>
          <button onClick={() => navigate("/pricing")} className="hover:underline">
            Pricing
          </button>
          <button onClick={() => navigate("/industries")} className="hover:underline">
            Industries
          </button>
        </div>

        {/* Right Side Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 text-primary-navy font-medium hover:underline"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-2 bg-primary-navy text-white rounded-lg hover:bg-opacity-90 transition"
          >
            Start for Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center px-4 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl font-bold text-primary-navy mb-6">
            Create proposals that{" "}
            <span className="text-white">win more business</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            PropoAI helps teams create, send, and track beautiful proposals that close deals faster and smarter using AI-powered automation.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-4 bg-primary-navy text-white text-lg rounded-lg hover:bg-opacity-90 transition font-medium"
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="px-8 py-4 bg-white text-primary-navy text-lg rounded-lg hover:bg-gray-100 transition font-medium"
            >
              View Demo
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-bold text-primary-navy mb-2">Beautiful Templates</h3>
            <p className="text-gray-700">
              Choose from 100+ professional templates or build your own custom brand.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="text-xl font-bold text-primary-navy mb-2">Easy Content</h3>
            <p className="text-gray-700">
              Save and reuse content with the content library. Keep everything consistent.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-primary-navy mb-2">Track & Insights</h3>
            <p className="text-gray-700">
              See when your proposal is viewed and get real-time engagement insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
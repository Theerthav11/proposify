import { useNavigate } from "react-router-dom";

export default function Pricing() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3A] via-[#102B52] to-[#0F172A] text-white px-6 py-16">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold text-yellow-400 mb-4">
          Simple Pricing Plans
        </h1>

        <p className="text-gray-300 text-lg">
          Choose the perfect plan for your business.
        </p>

      </div>

      {/* ================= PRICING CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* ================= BASIC PLAN ================= */}
        <div className="bg-[#13294B] border border-yellow-400/20 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Basic
          </h2>

          <h3 className="text-5xl font-bold mb-6">
            ₹499
            <span className="text-lg text-gray-400">
              {" "} / month
            </span>
          </h3>

          <ul className="space-y-4 text-gray-300 mb-8">

            <li>✔ 10 Proposals</li>

            <li>✔ AI Content Generator</li>

            <li>✔ Basic Templates</li>

            <li>✔ Email Support</li>

          </ul>

          <button
            onClick={() => navigate("/register")}
            className="w-full py-3 bg-yellow-400 text-black rounded-2xl font-bold hover:bg-yellow-300 transition"
          >
            Choose Plan
          </button>

        </div>

        {/* ================= PRO PLAN ================= */}
        <div className="bg-yellow-400 text-black rounded-3xl p-8 shadow-2xl">

          <div className="bg-black text-yellow-400 px-4 py-1 rounded-full inline-block mb-4 font-bold">
            MOST POPULAR
          </div>

          <h2 className="text-3xl font-bold mb-4">
            Pro
          </h2>

          <h3 className="text-5xl font-bold mb-6">
            ₹1499
            <span className="text-lg">
              {" "} / month
            </span>
          </h3>

          <ul className="space-y-4 mb-8">

            <li>✔ Unlimited Proposals</li>

            <li>✔ AI Proposal Builder</li>

            <li>✔ Premium Templates</li>

            <li>✔ Analytics Dashboard</li>

            <li>✔ Priority Support</li>

          </ul>

          <button
            onClick={() => navigate("/register")}
            className="w-full py-3 bg-black text-yellow-400 rounded-2xl font-bold hover:bg-gray-900 transition"
          >
            Start Pro Plan
          </button>

        </div>

        {/* ================= ENTERPRISE PLAN ================= */}
        <div className="bg-[#13294B] border border-yellow-400/20 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Enterprise
          </h2>

          <h3 className="text-5xl font-bold mb-6">
            Custom
          </h3>

          <ul className="space-y-4 text-gray-300 mb-8">

            <li>✔ Team Collaboration</li>

            <li>✔ Custom Branding</li>

            <li>✔ API Access</li>

            <li>✔ Dedicated Manager</li>

            <li>✔ 24/7 Support</li>

          </ul>

          <button
            className="w-full py-3 bg-yellow-400 text-black rounded-2xl font-bold hover:bg-yellow-300 transition"
          >
            Contact Sales
          </button>

        </div>

      </div>

    </div>
  );
}
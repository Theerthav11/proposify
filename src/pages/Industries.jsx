import { useNavigate } from "react-router-dom";

export default function Industries() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3A] via-[#102B52] to-[#0F172A] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-yellow-400/20">

        <h1 className="text-3xl font-bold text-yellow-400">
          Proposify
        </h1>

        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 border border-yellow-400 text-yellow-400 rounded-xl hover:bg-yellow-400 hover:text-black transition"
        >
          Back Home
        </button>

      </nav>

      {/* ================= HEADING ================= */}
      <div className="text-center py-20 px-6">

        <h1 className="text-6xl font-bold text-yellow-400 mb-6">
          Industries We Serve
        </h1>

        <p className="text-gray-300 text-xl max-w-4xl mx-auto">
          Proposify helps businesses create proposals,
          presentations and documents using AI automation.
        </p>

      </div>

      {/* ================= INDUSTRY CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">

        {/* ================= CARD 1 ================= */}
        <div className="bg-[#13294B] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

          <img
            src="/images/it.png"
            alt="IT"
            className="w-full h-56 object-cover"
          />

          <div className="p-8">

            <div className="text-5xl mb-4">
              💻
            </div>

            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              IT & Software
            </h2>

            <p className="text-gray-300">
              Build software proposals, API documents,
              SaaS presentations and AI workflows.
            </p>

          </div>

        </div>

        {/* ================= CARD 2 ================= */}
        <div className="bg-[#13294B] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

          <img
            src="/images/marketing.png"
            alt="Marketing"
            className="w-full h-56 object-cover"
          />

          <div className="p-8">

            <div className="text-5xl mb-4">
              📈
            </div>

            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Marketing
            </h2>

            <p className="text-gray-300">
              Create campaign proposals, brochures,
              presentations and pitch decks.
            </p>

          </div>

        </div>

        {/* ================= CARD 3 ================= */}
        <div className="bg-[#13294B] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

          <img
            src="/images/education.png"
            alt="Education"
            className="w-full h-56 object-cover"
          />

          <div className="p-8">

            <div className="text-5xl mb-4">
              🎓
            </div>

            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Education
            </h2>

            <p className="text-gray-300">
              Generate reports, research documents
              and academic presentations.
            </p>

          </div>

        </div>

        {/* ================= CARD 4 ================= */}
        <div className="bg-[#13294B] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

          <img
            src="/images/automobile.png"
            alt="Automobile"
            className="w-full h-56 object-cover"
          />

          <div className="p-8">

            <div className="text-5xl mb-4">
              🚗
            </div>

            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Automobile
            </h2>

            <p className="text-gray-300">
              Create vehicle brochures, showroom proposals,
              dealership presentations and automotive reports.
            </p>

          </div>

        </div>

        {/* ================= CARD 5 ================= */}
        <div className="bg-[#13294B] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

          <img
            src="/images/fashion.png"
            alt="Fashion"
            className="w-full h-56 object-cover"
          />

          <div className="p-8">

            <div className="text-5xl mb-4">
              👗
            </div>

            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Fashion
            </h2>

            <p className="text-gray-300">
              Design fashion catalogs, brand presentations,
              clothing brochures and creative campaign proposals.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
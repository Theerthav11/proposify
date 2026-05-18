import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200 hidden md:flex flex-col">
        
        {/* LOGO */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-black text-[#242525]">
            Proposify
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            AI Proposal Platform
          </p>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-4 space-y-2">
          
          <Link
            to="/dashboard"
            className="block px-4 py-3 rounded-xl bg-black text-white font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/projects"
            className="block px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium transition"
          >
            Projects
          </Link>

          <Link
            to="/requests"
            className="block px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium transition"
          >
            Requests
          </Link>

          <Link
            to="/proposal-builder"
            className="block px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 font-medium transition"
          >
            Proposal Builder
          </Link>
        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
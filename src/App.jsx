import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Requests from "./pages/Requests";
import Proposals from "./pages/Proposals";
import NewProject from "./pages/NewProject";
import ProposalBuilder from "./pages/ProposalBuilder";
import Preview from "./pages/Preview";
import Pricing from "./pages/Pricing";
import Industries from "./pages/Industries";

function App() {
  return (
    <BrowserRouter>

      <div>

        <Routes>

          {/* ================= HOME ================= */}
          <Route path="/" element={<Home />} />

          {/* ================= AUTH ================= */}
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          {/* ================= DASHBOARD ================= */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* ================= PROJECTS ================= */}
          <Route path="/projects" element={<Projects />} />

          <Route
            path="/recent-projects"
            element={<Projects />}
          />

          {/* ================= REQUESTS ================= */}
          <Route path="/requests" element={<Requests />} />

          {/* ================= PROPOSALS ================= */}
          <Route path="/proposals" element={<Proposals />} />

          {/* ================= NEW PROJECT ================= */}
          <Route
            path="/new-project"
            element={<NewProject />}
          />

          {/* ================= BUILDER ================= */}
          <Route
            path="/proposal-builder"
            element={<ProposalBuilder />}
          />

          {/* ================= PREVIEW ================= */}
          <Route path="/preview" element={<Preview />} />

          {/* ================= PRODUCT PAGE ================= */}
          <Route
            path="/product"
            element={<h1 className="text-white text-5xl p-20">Product Page</h1>}
          />

          {/* ================= DOCS PAGE ================= */}
          <Route
            path="/docs"
            element={<h1 className="text-white text-5xl p-20">Docs Page</h1>}
          />

          {/* ================= PRICING PAGE ================= */}
          <Route
            path="/pricing"
            element={<Pricing />}
          />

          {/* ================= INDUSTRIES PAGE ================= */}
          <Route
            path="/industries"
            element={<Industries />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
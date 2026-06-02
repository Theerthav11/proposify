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
import Generate from "./pages/Generate";
import Preview from "./pages/Preview";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/recent-projects" element={<Projects />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/proposal-builder" element={<ProposalBuilder />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
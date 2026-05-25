import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import Projects from "./pages/Projects.js";
import Requests from "./pages/Requests.js";
import Proposals from "./pages/Proposals.js";
import NewProject from "./pages/NewProject.js";
import ProposalBuilder from "./pages/ProposalBuilder.js";
import Preview from "./pages/Preview.js";
import SharedWithMe from "./pages/SharedWithMe.js";
import Templates from "./pages/Templates.js";
import ProductLibrary from "./pages/ProductLibrary.js";
import Channels from "./pages/Channels.js";
import Uploads from "./pages/Uploads.js";
import Drafts from "./pages/Drafts.js";
import SentProposals from "./pages/SentProposals.js";
import Settings from "./pages/Settings.js";

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
          <Route path="/preview" element={<Preview />} />
          <Route path="/shared-with-me" element={<SharedWithMe />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/product-library" element={<ProductLibrary />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/uploads" element={<Uploads />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/sent-proposals" element={<SentProposals />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
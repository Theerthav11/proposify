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
import SharedWithMe from "./pages/SharedWithMe";
import Templates from "./pages/Templates";
import ProductLibrary from "./pages/ProductLibrary";
import Channels from "./pages/Channels";
import Uploads from "./pages/Uploads";
import Drafts from "./pages/Drafts";
import SentProposals from "./pages/SentProposals";
import Settings from "./pages/Settings";

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
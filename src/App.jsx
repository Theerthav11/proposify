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
          <Route path="/product" element={<h1>Product Page</h1>} />
<Route path="/docs" element={<h1>Docs Page</h1>} />
<Route path="/pricing" element={<h1>Pricing Page</h1>} />
<Route path="/industries" element={<h1>Industries Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
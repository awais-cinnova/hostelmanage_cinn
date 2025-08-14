import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import Navbar from './components/Navbar/Navbar';
import OwnerDetail from "./components/OwnerDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/owner/:id" element={<OwnerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
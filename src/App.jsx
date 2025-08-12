import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
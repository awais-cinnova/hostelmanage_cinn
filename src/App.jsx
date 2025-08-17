import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/DashBoard";
import OwnerDetail from "./components/OwnerDetail";
import HostelDetail from "./components/HostelDetail";
import RoomDetail from "./components/RoomDetail";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/owner/:id" element={<OwnerDetail/>}/>
        <Route path="/dashboard/hostel/:id" element={<HostelDetail/>}/>
        <Route path="/dashboard/room/:id" element={<RoomDetail/>}/>
      </Routes>
    </Router>
  );
}
export default App;
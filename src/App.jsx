import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashBoard";
import OwnerDashboard from './components/Owner/OwnerDashBoard';
import OwnerDetail from "./components/Owner/OwnerDetail";
import Home from "./components/Home";
import { ProtectedRoute } from './components/ProtectedRoute';
import { Navigate } from "react-router-dom";
import HostelList from "./components/HostelList";
import mockData from "./data/mockData";
import HostelDetail from "./components/Hostel/HostelDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to = "/home"/>}/>
        <Route path="/home" element={<Home />} />

        <Route path="/admin-dashboard" element={<ProtectedRoute role="admin"> <AdminDashboard/> </ProtectedRoute>}/>

        <Route path="/owner-dashboard" element={<ProtectedRoute role="owner"> <OwnerDashboard/> </ProtectedRoute>}/>

        <Route path="/admin-dashboard/owner/:id" element={<ProtectedRoute role="admin"> <OwnerDetail/> </ProtectedRoute>} />

        <Route path="/dashboard/hostels"element={<HostelList hostels={mockData.hostels} />}  />
        <Route path="/unauthorized" element={<div className="p-4 text-red-600">Unauthorized Access</div>} />
        
        <Route  path="/hostel/:hostelId"  element={<ProtectedRoute><HostelDetail /></ProtectedRoute>}/>


        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </Router>
  );
}
export default App;
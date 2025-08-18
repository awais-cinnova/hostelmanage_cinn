import HostelList from "../HostelList";
import mockData from "../../data/mockData";
import { useAuthStore } from '../../store/authStore';
import Navbar from "../Navbar/Navbar";

const OwnerDashboard = () => {
  const user = useAuthStore((state) => state.user);

  const ownerHostels = mockData.hostels.filter(
    (hostel) => hostel.ownerId === user?.id
  );

  return (
    <div className="p-6">
      <Navbar />
      <HostelList hostels={ownerHostels} />
    </div>
  );
};

export default OwnerDashboard;

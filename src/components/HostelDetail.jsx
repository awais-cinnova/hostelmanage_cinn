import { useParams, useNavigate } from "react-router-dom";
import { hostels } from "../data/hostels";
import { rooms } from "../data/rooms";
import { Button } from "./ui/button";

const HostelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hostel = hostels.find(h => h.id === id);
  if (!hostel) return <div>Hostel not found!</div>;


  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{hostel.name}</h1>
      <p className="text-gray-600">{hostel.location}</p>


    </div>
  );
};
export default HostelDetail;
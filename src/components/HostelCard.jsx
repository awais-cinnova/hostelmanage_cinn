import React from "react";
import mockData from "../data/mockData";
import { useNavigate } from "react-router-dom";
const HostelCard = ({ hostel }) => {
  const  navigate = useNavigate();
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition cursor-pointer " onClick={() => navigate(`/hostel/${hostel.id}`)}>
      <img
        src={hostel.image || "/placeholder.jpg"}
        alt={hostel.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-semibold">{hostel.name}</h2>
      <p className="text-gray-600">{hostel.location}</p>
      <p className="mt-2">Total Rooms: {hostel.totalRooms}</p>
      <p>Booking Protocol: {hostel.protocol}</p>
    </div>
  );
};
export default HostelCard;
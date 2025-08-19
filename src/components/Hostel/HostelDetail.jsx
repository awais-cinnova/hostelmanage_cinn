// components/Hostel/HostelDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mockData from "../../data/mockData";
import Navbar from "../Navbar/Navbar";
import Image from "../ui/image";
import { Button } from "../ui/button";

const HostelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hostel = mockData.hostels.find((h) => h.id === id);
  const owner = mockData.owners.find((o) => o.id === hostel?.ownerId);

  if (!hostel) {
    return <div className="p-4 text-red-600">Hostel not found!</div>;
  }

  return (
    <div className="min-h-screen w-full bg-[#F7F7F7] p-6">
      <Navbar />

      {/* Back Button + Title */}
      <div className="flex items-center gap-4 mb-6">
        <Button onClick={() => navigate(-1)} className="bg-transparent hover:bg-gray-200">
          <Image src="/back-icon.svg" alt="Back" className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-semibold">Hostel Details</h1>
      </div>

      {/* Hostel Summary Card */}
      <div className="flex justify-between gap-4 p-4 bg-white rounded-lg shadow-md">
        
        <div className="flex-1 p-4 max-w-72 bg-black max-h-[275px] rounded-md ">
            <Image src="/hh.png" alt="hostel icon" className= "max-h-full object-fill" />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="text-xl font-bold text-gray-800">{hostel.name}</h2>
          <p className="text-gray-600">📍 Location: {hostel.location}</p>
          <p className="text-gray-700">🛏️ Total Rooms: {hostel.totalRooms}</p>
          <p className="text-gray-700">🚪 Occupied Rooms: {hostel.occupiedRooms ?? "0"}</p>
          <p className="text-gray-700 capitalize">📋 Protocol: {hostel.protocol}</p>
        </div>
      

      {/* Owner Info Section */}
      {owner && (
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Owner Information</h3>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center font-semibold text-lg">
              {owner.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex flex-col">
              <p className="font-medium">{owner.name}</p>
              <p className="text-sm text-gray-600">{owner.email}</p>
              <p className="text-sm text-gray-600">{owner.phoneNumber}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default HostelDetail;

// components/HostelList.jsx
import React from "react";
import HostelCard from "./HostelCard";

const HostelList = ({ hostels = [] }) => {
  if (!hostels.length) {
    return (
      <div className="text-center text-gray-500 mt-12">
        <p>You haven’t added any hostels yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hostels.map((hostel) => (
        <HostelCard key={hostel.id} hostel={hostel} />
      ))}
    </div>
  );
};

export default HostelList;

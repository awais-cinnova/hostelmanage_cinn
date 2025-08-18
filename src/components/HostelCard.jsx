import { Button } from "./ui/button";
import Image from "./ui/image";
const HostelCard = ({ hostel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 cursor-pointer">
      <img
        src={hostel.image || "/placeholder.jpg"}
        alt={hostel.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{hostel.name}</h2>
      <p className="text-sm text-gray-500">{hostel.location}</p>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>Rooms: {hostel.totalRooms}</span>
        <span>Occupied: {hostel.occupiedRooms}</span>
      </div>

      <div className="mt-4 flex justify-between">
        <Button className="bg-transparent ml-auto"><Image src="/delete-icon.svg" className="cursor-pointer"></Image></Button>
      </div>
    </div>
  );
};

export default HostelCard;

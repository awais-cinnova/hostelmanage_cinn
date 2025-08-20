// components/RoomCard.jsx
import { Button } from "../ui/button"
import Image from "../ui/image"
const RoomCard = ({ room, type, hostel }) => {
  return (
    <div className="border p-4  rounded-lg shadow bg-[#F8B6000D]">
      <h3 className="text-xl 2xl:text-3xl font-semibold mb-2">{type?.name}</h3>
      <p>Total Rooms: {room.rooms}</p>

      {/* Show both room + bed info depending on hostel protocol */}
      {(hostel.protocol === "Bed" || hostel.protocol === "Bed/Room") && (
        <p> Beds Available: {room.bedsAvailable} / Occupied: {room.bedsOccupied}    </p>
      )}
      {(hostel.protocol === "Room" || hostel.protocol === "Bed/Room") && (
        <p> Rooms Available: {room.roomsAvailable} / Occupied:{" "}{room.roomsOccupied} </p>
      )}
      <Button className="bg-transparent flex w-full justify-between mt-3 ">
        <div className="min-w-[25px] max-w-[40px] w-[4%] h-[4%] flex items-center justify-center"><Image src="/delete-icon.svg" alt="Delete" className="w-4/5"/></div>
        <div className="min-w-[25px] max-w-[40px] w-[4%] h-[4%] flex items-center justify-center"> <Image src="/edit-icon.svg" className="w-4/5 "/></div>
      </Button> 
    </div>
  );
};

export default RoomCard;

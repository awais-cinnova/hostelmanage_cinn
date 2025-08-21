import { useParams } from "react-router-dom";
import mockData from "../../data/mockData";
import rooms from "../../data/rooms";
import roomTypes from "../../data/roomtypes";
import HostelCard from "../HostelCard";
import RoomCard from "../Room/RoomCard";
const HostelDetail = () => {
  const { hostelId } = useParams();
  const hostel = mockData.hostels.find((h) => h.id === hostelId);

  if (!hostel) {
    return <h2 className="text-center text-red-500">Hostel not found</h2>;
  }

  const hostelRooms = rooms.filter((room) => room.hostelId === hostel.id);

  return (
    <div className="p-6 flex flex-col gap-3" >

        <div className="border rounded-md p-4 shadow hover:shadow-lg transition cursor-pointer" >
            <HostelCard key={hostel.id} hostel={hostel} imgClass="xl:w-[60%]" className="flex flex-col xl:flex-row flex-1 gap-5 items-center text-5xl"/>
        </div>
     
      <h2 className="text-2xl font-semibold mb-3">Room Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hostelRooms.map((room) => {
                const type = roomTypes.find((t) => t.id === room.typeId);
            return (
                     <RoomCard key={room.id} room={room} type={type} hostel={hostel}/>
            );
        })}
      </div>
    </div>
  );
};

export default HostelDetail;

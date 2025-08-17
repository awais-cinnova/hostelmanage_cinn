import { useParams } from "react-router-dom";
import { rooms } from "../data/rooms";
import { bookings } from "../data/bookings";

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === id);
  if (!room) return <div>Room not found!</div>;

  const roomBookings = bookings.filter(b => b.roomId === room.id);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Room {room.roomNumber}</h1>
      <p>Capacity: {room.capacity}</p>
      <p>Price: Rs.{room.price}</p>
      <p>Status: {room.available ? "Available" : "Occupied"}</p>

      <h2 className="mt-6 font-semibold">Bookings</h2>
      {roomBookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="space-y-2 mt-2">
          {roomBookings.map(b => (
            <li key={b.id} className="border p-3 rounded">
              Tenant: {b.tenant} — From {b.checkIn} to {b.checkOut}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default RoomDetail;
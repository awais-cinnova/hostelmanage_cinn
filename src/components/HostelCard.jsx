const HostelCard = ({ hostel, className }) => {
  return (
    <div className={className}>
      <img  src={hostel.image || "/hh.png"}  alt={hostel.name} className="w-[60%] max-h-[800px] object-fit rounded-md mb-3"/>
    <div className="min-w-[250px] flex-1 flex flex-col items-center">
        
      <h2 className="text-2xl xl:text-5xl font-semibold">{hostel.name}</h2>
      <p className="text-gray-600 xl:text-2xl">{hostel.location}</p>
      <p className="xl:text-2xl">Total Rooms: {hostel.totalRooms}</p>
      <p className="xl:text-2xl">Booking Protocol: {hostel.protocol}</p>
    </div>
    </div>
  );
};
export default HostelCard;
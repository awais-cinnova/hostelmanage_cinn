const HostelCard = ({ hostel, className , imgClass }) => {
  return (
    <div className={className}>
      <img  src="/hh.png"  alt={hostel.name} className={`${imgClass} max-h-[800px] object-fit rounded-md mb-3`}/>
    
    <div className="min-w-[250px] flex-1 flex flex-col items-center">
      <h2 className="text-2xl md:text-[1.5em] font-semibold">{hostel.name}</h2>
      <p className="text-gray-600 md:text-[1em]">{hostel.location}</p>
      <p className="md:text-[1em]">Total Rooms: {hostel.totalRooms}</p>
      <p className="md:text-[1em]">Booking Protocol: {hostel.protocol}</p>
    </div>
    </div>
  );
};
export default HostelCard;
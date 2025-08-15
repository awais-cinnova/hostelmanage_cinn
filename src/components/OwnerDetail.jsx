import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Button } from "./ui/button";
import DetailItem from "./HelpingUI/DetailItem";
import { useState } from "react";
import PaginationDemo from "./HelpingUI/Pagination";
const hostelOwners = [
  { id: "1", name: "Emily Johnson", email: "emily.johnson@cityhostels.com", phoneNumber: "+1 (415) 555-0198", hostelName: "Downtown City Hostel", age: 32, dob: "1992-06-14", gender: "Female" },
  {id: "2", name: "Michael Smith", email: "michael.smith@coasthostel.com", phoneNumber: "+1 (212) 555-2345", hostelName: "Coastline Backpackers", age: 40, dob: "1985-03-02", gender: "Male" },
  {id: "3", name: "Samantha Lee", email: "samantha.lee@urbanstay.com", phoneNumber: "+1 (310) 555-8721", hostelName: "UrbanStay Hostel", age: 29, dob: "1996-08-22", gender: "Female" },
  {id: "4", name: "David Thompson", email: "david.thompson@midwesthostel.com", phoneNumber: "+1 (312) 555-1122", hostelName: "Midwest Traveler's Inn", age: 38, dob: "1987-11-05", gender: "Male" },
  {id: "5", name: "Natalie Rivera", email: "natalie.rivera@sunhostel.com", phoneNumber: "+1 (617) 555-6677", hostelName: "Sunny Bay Hostel", age: 35, dob: "1990-01-19", gender: "Female" },
  {id: "6", name: "Chris Brown", email: "chris.brown@mountainlodge.com", phoneNumber: "+1 (206) 555-4422", hostelName: "Mountain Lodge Hostel", age: 42, dob: "1983-05-07", gender: "Male" },
  {id: "7", name: "Charles Dan", email: "charles.dan@mountaintravelling.com", phoneNumber: "+1 (258) 165-4931", hostelName: "Mountain Travelling Hostel", age: 37, dob: "1988-09-11", gender: "Male" },
  {id: "8", name: "Harry Smith", email: "harry.smith@motel.com", phoneNumber: "+1 (243) 552-4322", hostelName: "Motel Hostel", age: 33, dob: "1992-12-03", gender: "Male" }
];
export const properties = [
  { id: "p1", ownerId: "1", hostelId: "1", name: "Downtown Apartment", location: "Downtown City", rooms: 5 },
  { id: "p2", ownerId: "1", hostelId: "1", name: "City View Flat", location: "Downtown City", rooms: 3 },
  { id: "p3", ownerId: "2", hostelId: "2", name: "Coastal Villa", location: "Coastline", rooms: 6 },
    { id: "p1", ownerId: "1", hostelId: "3", name: "Los Apartment", location: "Down City", rooms: 3 }
  // You can add more properties here
];


const OwnerDetail = () => {
  const [currentPage, setCurrentPage] = useState(1);
const propertiesPerPage = 2;
  const { id } = useParams();
  const navigate = useNavigate();
    const owner = hostelOwners.find((o) => o.id === id);
 const ownedProperties = properties.filter(p => p.ownerId === owner.id);
const indexOfLastProperty = currentPage * propertiesPerPage;
const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
const currentProperties = ownedProperties.slice(indexOfFirstProperty, indexOfLastProperty);

const totalPages = Math.ceil(ownedProperties.length / propertiesPerPage);

  if (!owner) return <div className="p-4">Owner not found!</div>;

  return (
    <div className="flex flex-col bg-[#F7F7F7] gap-6 min-h-screen w-screen absolute box-border pt-4 pl-4 pr-2">
      <Navbar />

      {/* Header */}
      <div className="flex items-center justify-between h-12">
        <div className="text-xl font-bold">Owner Detail</div>
        <Button onClick={() => navigate(-1)} className="w-[100px] bg-gray-500">Back</Button>
      </div>

      {/* Owner Card */}
      <div className="flex justify-between w-full py-1">
        <div className="flex items-center gap-4 text-[var(--primary-color)]">
          <div className="w-[60px] h-[60px] border-[1.5px] border-[var(--primary-color)] rounded-full flex items-center justify-center text-lg font-bold shadow-md">
            {owner.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>

          <div className="flex flex-col gap-1 text-[#000000] font-normal text-base leading-[1.2] tracking-tightest">
            <h1 className="text-xl font-semibold">{owner.name}</h1>
            <h2 className="text-black/60">{owner.hostelName}</h2>
          </div>
        </div>
        <Button className="w-[100px]">Edit</Button>
      </div>

      {/* Personal Info */}
      <div className="w-full mt-[15px] border border-[#00000033] p-4 rounded-2xl">
        <h1 className="font-semibold text-[18px] leading-[1.2] tracking-tighter pb-5">  Personal Information  </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
          <DetailItem label="Email" value={owner.email} />
          <DetailItem label="Phone" value={owner.phoneNumber} />
          <DetailItem label="Age" value={owner.age} />
          <DetailItem label="Date of Birth" value={owner.dob} />
          <DetailItem label="Gender" value={owner.gender} />
        </div>
      </div>
      {/* Owned Properties Section */}
      <div className="w-full mt-6 border border-[#00000033] p-4 rounded-2xl">
        <h1 className="font-semibold text-[18px] leading-[1.2] tracking-tighter pb-5">Owned Properties</h1>
        {currentProperties.length === 0 ? (
          <p>No properties found for this owner.</p>
        ) : (
          <ul className="list-disc list-inside">
            {currentProperties.map(property => (
              <li key={property.id} className="mb-2">
                <strong>{property.name}</strong> — Location: {property.location}, Rooms: {property.rooms}
              </li>
            ))}
          </ul>
        )}

            <PaginationDemo
              totalItems={ownedProperties.length}
              rowsPerPage={propertiesPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
        </div>
    </div>
  );
};

export default OwnerDetail;

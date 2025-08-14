import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const hostelOwners = [
    {name: "Emily Johnson",email: "emily.johnson@cityhostels.com",phoneNumber: "+1 (415) 555-0198",hostelName: "Downtown City Hostel",},
    {name: "Michael Smith",email: "michael.smith@coasthostel.com",phoneNumber: "+1 (212) 555-2345",hostelName: "Coastline Backpackers",},
    {name: "Samantha Lee",email: "samantha.lee@urbanstay.com",phoneNumber: "+1 (310) 555-8721",hostelName: "UrbanStay Hostel",},
    {name: "David Thompson",email: "david.thompson@midwesthostel.com",phoneNumber: "+1 (312) 555-1122",hostelName: "Midwest Traveler's Inn",},
    {name: "Natalie Rivera",email: "natalie.rivera@sunhostel.com",phoneNumber: "+1 (617) 555-6677",hostelName: "Sunny Bay Hostel",},
    {name: "Chris Brown",email: "chris.brown@mountainlodge.com",phoneNumber: "+1 (206) 555-4422",hostelName: "Mountain Lodge Hostel",},
    {name: "Charles Dan",email: "charles.dan@mountaintravelling 555-4422", phoneNumber: "+1 (258) 165-4931",hostelName: "Mountain Travelling Hostel",},
    {name: "Harry Smith",email: "harry.smith@motel.com",phoneNumber: "+1 (243) 552-4322",hostelName: "Motel Hostel",},
  ]
const OwnerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const owner = hostelOwners[id];

  if (!owner) return <div>Owner not found!</div>;

  return (
    <div className=" flex flex-col  bg-[#F7F7F7] gap-[24px] min-h-screen w-screen absolute box-border pt-4 pl-4 pr-2">
        <Navbar/>
      <button onClick={() => navigate(-1)} className="mb-4">← Back</button>
      <h1 className="text-xl font-bold mb-2">{owner.name}</h1>
      <p><strong>Email:</strong> {owner.email}</p>
      <p><strong>Phone:</strong> {owner.phoneNumber}</p>
      <p><strong>Hostel:</strong> {owner.hostelName}</p>
    </div>
  );
};

export default OwnerDetail;
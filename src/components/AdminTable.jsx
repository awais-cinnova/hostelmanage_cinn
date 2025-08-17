import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect } from "react"
import { Button } from "./ui/button";
import Image from "./ui/image";
import { useNavigate } from "react-router-dom";

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
export function TableDemo({host , setHost , currentPage, rowsPerPage }) {
  const navigate = useNavigate();
 
  useEffect(() => {
      setHost(hostelOwners.length)
  }, [setHost])

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const displayedOwners = hostelOwners.slice(start, end);

  return (
    <div className="p-[22px] pb-[15px] w-full rounded-[12px] bg-[#FFFFFF] ">
      <Table className="table-auto w-full text-left  font-normal text-base leading-[120%] tracking-[-0.05em]">
        <TableHeader>
          <TableRow className="py-12 border-none">
            <TableHead>Names</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Hostel Name</TableHead>
            <TableHead >Actions</TableHead> 
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedOwners.map((owner, index) => (
            <TableRow className='[&>td]:py-4'key={index}>
              <TableCell className="font-medium">{owner.name}</TableCell>
              <TableCell>{owner.email}</TableCell>
              <TableCell>{owner.phoneNumber}</TableCell>
              <TableCell>{owner.hostelName}</TableCell>
              <TableCell className="text-right">

              <Button
                  variant="default"
                  className="bg-transparent cursor-pointer"
                  onClick={() => navigate(`/dashboard/owner/${owner.id}`)}
                >
                  <Image src="detail-icon.svg" alt="View Details" className="w-6 h-6" />
                </Button>    
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableDemo

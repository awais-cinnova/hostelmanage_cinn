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

export function TableDemo({host , setHost , currentPage, rowsPerPage }) {
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedOwners.map((owner, index) => (
            <TableRow className='[&>td]:py-4'key={index}>
              <TableCell className="font-medium">{owner.name}</TableCell>
              <TableCell>{owner.email}</TableCell>
              <TableCell>{owner.phoneNumber}</TableCell>
              <TableCell>{owner.hostelName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableDemo

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import TableDemo from  './AdminTable'
import AdminTableActions from './AdminTableActions';
import { PaginationDemo } from '../HelpingUI/Pagination';
import mockData from '../../data/mockData';

const navlinks = [
  { label: "home", path: "/" , type: "internal"},
  { label: "dashboard", path: "/dashboard", type: "internal"},
  { label: "hostel", path: "/dashboard/hostel/h1", type: "internal"},
  { label: "projects", path: "/dashboard", type: "internal"},
];
export default function AdminDashboard() {

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");
  const owners = mockData.owners;
  const totalOwners = owners.length;
    return (
      <div className=" flex flex-col  bg-[#F7F7F7] gap-[24px] min-h-screen w-screen absolute box-border pt-4 pl-4 pr-2">
        <Navbar navlinks={navlinks}/>
        <div className='flex items-center justify-between h-[48px]'>
            <div>Hostels({totalOwners})</div>
            <AdminTableActions/>
        </div>

        <TableDemo data={mockData} currentPage={currentPage} rowsPerPage={rowsPerPage}></TableDemo>
        
      <PaginationDemo
        totalItems={totalOwners}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </div>
    );
  }
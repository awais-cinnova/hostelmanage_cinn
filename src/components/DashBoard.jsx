import React, { useState } from 'react';

import Navbar from './Navbar/Navbar';
import TableDemo from  './OwnerTable'
import OwnerTableActions from './OwnerTableActions';
import { PaginationDemo } from './HelpingUI/Pagination';
export default function Dashboard() {

  const [host , setHost] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState("")
    return (
      <div className=" flex flex-col  bg-[#F7F7F7] gap-[24px] min-h-screen w-screen absolute box-border pt-4 pl-4 pr-2">
        <Navbar/>
        <div className='flex items-center justify-between h-[48px]'>
        <div>Hostels({host})</div>
        <OwnerTableActions/>
        </div>

        <TableDemo host = {host}  setHost={setHost} currentPage={currentPage} rowsPerPage={rowsPerPage}></TableDemo>
        
      <PaginationDemo
        totalItems={host}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </div>
    );
  }
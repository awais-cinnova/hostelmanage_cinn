import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import TableDemo from  './OwnerTable'

export default function Dashboard() {
  const [host , setHost] = useState();
    return (
      <div className=" flex flex-col bg-[#F7F7F7] gap-[24px] h-screen w-screen absolute box-border pt-4 pl-4 pr-2">
        <Navbar/>
        <div>
          Hostels({host})
        </div>
        <TableDemo host = {host}  setHost={setHost}></TableDemo>
      </div>
    );
  }
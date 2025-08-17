import React, { useState } from 'react';
import Links from '../Links';
import MobileMenu from './MobileMenu';
import Logo from '../Logo'; 
import {Button} from '../ui/button'
import Profile from './Profile'
const navlinks = [
  { label: "home", path: "/" , type: "internal"},
  { label: "dashboard", path: "/dashboard", type: "internal"},
  { label: "hostel", path: "/hostel", type: "internal"},
  { label: "projects", path: "/dashboard", type: "internal"},
 //{ label: "schedule", path: "/dashboard", type: "internal"},
 // { label: "role&technologies", path: "/roles&tech", type: "internal"},
 //{ label: "congiguration", path: "/configuration", type: "internal"},
 // { label: "reports", path: "/reports", type: "internal"},
 // { label: "utilization", path: "/utilization", type: "internal"},
 // { label: "forecasting", path: "/forrecasting", type: "internal"},

];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
      
    <nav className="flex items-center justify-between bg-[#000000]  text-[#f0f0f0]  h-[px] rounded-[12px] pl-[24px] pt-[13.5x]" >

        <div className="flex items-center justify-start max-w-[70%] gap-[24px]">
            <Logo/>
            <Links onClick={closeMenu} links = {navlinks} className = "w-screen hidden md:flex gap-[16px] item-start pl-[16px] pb-[20px] pr-[16px] pt-[20px]"/>
        </div>
        
        <Profile/>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links = {navlinks}  className="md:hidden" />
    </nav>
  );
};

export default Navbar;
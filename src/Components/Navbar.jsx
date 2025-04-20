import React from 'react'
import { IoMdPlanet } from "react-icons/io";
import Switch from './Switch'

export default function Navabar() {
  return (
    <div className='flex justify-between items-center h-[5rem] px-10 shadow-sm shadow-gray-300'>
        <div>
        <IoMdPlanet className='text-[3rem] text-purple-500'/>
        <h4 className='font-semibold text-purple-600'>Satrun</h4>
        </div>
  
        <ul className='flex gap-x-10 text-sm font-medium'>
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul> 
  
        <div className='flex flex-col items-center gap-y-2'>
         <Switch/>
         <div>
          <p className='text-xs font-medium'>Eng - Jap</p>
         </div>
        </div>
    </div>
  )
}

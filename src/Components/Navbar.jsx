import React, {useContext} from 'react'
import { IoMdPlanet } from "react-icons/io";
import Switch from './Switch'
import { LanguageContext } from './Context/LanguageContext';

export default function Navabar() {
  
  const {language, text} = useContext(LanguageContext)
       
  return (
    <div className='flex justify-between items-center h-[5rem] px-10 shadow-sm shadow-gray-300'>
        <div>
        <IoMdPlanet className='text-[3rem] text-purple-500'/>
        <h4 className='font-semibold text-purple-600'>Satrun</h4>
        </div>
        
          <ul className='flex gap-x-10'>
          {text[language].nav.map((item,index) => (
            <li key={index} className='hover:text-orange-400 cursor-pointer'>{item}</li>
          ))}
          </ul>

        <div className='flex flex-col items-center gap-y-2'>
         <Switch />
         <div>
          <p className='text-xs font-medium'>Eng - Jap</p>
         </div>
        </div>
    </div>
  )
}

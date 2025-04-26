import React, {useContext} from 'react'
import {LanguageContext} from '../Components/Context/LanguageContext'

export default function Switch() {

  const {language, toggleLanguage} = useContext(LanguageContext)

  return (
    <div className={`${language === 'ja' ? 'bg-orange-300': 'bg-blue-200'} h-6 w-12 rounded-full relative cursor-pointer`} onClick={toggleLanguage}>
      <span className={`${language === 'ja' ? 'translate-x-6' : 'translate-x-0'} w-4 h-4 transition-all duration-300 ease-in-out absolute bg-white rounded-full top-1 left-1`}></span>
    </div>
  )
}

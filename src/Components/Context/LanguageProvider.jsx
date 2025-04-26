import React, {useState} from 'react'
import { LanguageContext } from './LanguageContext'
import { text } from '../Text'

export default function LanguageProvider({children}) {
      
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
        setLanguage((prev) => (prev == 'en' ? 'ja' : 'en'))
    }

  return (
    <LanguageContext.Provider value = {{language, toggleLanguage, text}}>
      {children}
    </LanguageContext.Provider>
  )
}

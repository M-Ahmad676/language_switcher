import React, {useState} from 'react'
import { LanguageContext } from './LanguageContext'

export default function LanguageProvider({children}) {
      
    const [language, setLanguage] = useState(false)

    const toggleLanguage = () => {
        setLanguage(!language)
    }

  return (
    <LanguageContext.Provider value = {{language, toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

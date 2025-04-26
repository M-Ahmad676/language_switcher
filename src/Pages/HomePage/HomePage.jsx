import React, {useContext} from 'react'
import { LanguageContext } from '../../Components/Context/LanguageContext'

export default function HomePage() {

  const {language, text} = useContext(LanguageContext)

  return (
    <div className='min-h-screen my-32 px-20 space-y-10'>

      <h1 className='text-[2rem] font-semibold'>{text[language].homeTitle}</h1>
      <p>{text[language].description}</p>

    </div>
  )
}

import React, { useState } from 'react'
import Provider from './i18n/Provider'
import { LOCALES } from './i18n/messages/locale'
import './App.scss'
import ReactHeader from './Components/ReactHeader/ReactHeader'
import ReactMain from './Components/ReactMain/ReactMain'
import ReactFooter from './Components/ReactFooter/ReactFooter'

export default function App() {
  const [language, setLanguage] = useState(LOCALES.ENGLISH)

  const languages = {
    ENGLISH: 'English',
    RUSSIAN: 'Русский',
    ARMENIAN: 'Հայերեն'
  }

  const changeLanguage = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <Provider locale={language}>
      <div className='App'>
       <div className="conteiner">
        <select name="language" id="language" onChange={changeLanguage} >
           {
             Object.keys(LOCALES).map(elm => {
               return (
                  <option value={LOCALES[elm]} key={elm}>{languages[elm]}</option>
               )
              })
            }
         </select>
        <ReactHeader/>
        <ReactMain/>
       </div>
       <ReactFooter/>
      </div>
    </Provider>
  )
}

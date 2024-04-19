import React from 'react'
import './ReactMain.scss'
import Translate from '../../i18n/Translate'
import domLogo from '../../../public/reactDom.jpg'

export default function ReactMain() {
  return (
    <div className='Main'>
      <div className='Main_section'>
        <h3><Translate id='mainTitle'/></h3>
        <p><Translate id='mainAbout'/></p>
      </div>
      <img src={domLogo} alt="domlogo" />
    </div>
  )
}

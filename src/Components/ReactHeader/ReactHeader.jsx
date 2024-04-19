import React from 'react'
import reactLogo from '../../../public/images.svg'
import Translate from '../../i18n/Translate'
import './ReactHeader.scss'


export default function ReactHeader() {
  return (
    <div className='Header'>
      <div className='Header__item'>
        <img src={reactLogo} alt="reactlogo" />
        <h1>React</h1>
        <h2><Translate id='subtitle'/></h2>
      </div>
      <div className='Header__item-section'>
        <h2><Translate id='sectionTitle'/></h2>
        <p><Translate id='about'/></p>
      </div>
    </div>
  )
}

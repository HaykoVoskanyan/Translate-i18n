import React from 'react'
import Translate from '../../i18n/Translate'
import './ReactFooter.scss'

export default function ReactFooter() {
  return (
    <div className='Footer'>   
      <ul className='Fotter__ul'>
        <li><Translate id='firstLi'/></li>
        <li><Translate id='secondLi'/></li>
        <li><Translate id='thirdLi'/></li>
        <li><Translate id='fourthLi'/></li>
      </ul>
    </div>
  )
}

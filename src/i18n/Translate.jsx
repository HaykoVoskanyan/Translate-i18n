import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function Translate({id, value}) {
  return (
  <FormattedMessage id={id} values={value}/>
  )
}

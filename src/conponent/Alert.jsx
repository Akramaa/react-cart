import React from 'react'
import "../style/Alert.scss"

function Alert({type, massage}) {
  return (
  <>
    <div className='alert'>{type} {massage}</div>
  </>
  )
}

export default Alert
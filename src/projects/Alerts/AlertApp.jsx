import React from 'react'
import Alert from '../components/Alert'

export default function AlertApp() {
  return (
    <div className='cointainer mx-auto'>    
      <Alert type={"success"} message={"Login successful"}/>
    </div>
  )
}

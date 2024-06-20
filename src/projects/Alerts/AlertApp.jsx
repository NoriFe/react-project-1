import React from 'react'
import Alert from '../components/Alert'

export default function AlertApp() {
  return (
    <div className='cointainer mx-auto'>    
      <Alert type={"success"} message={"Login successful"}/>
      <Alert type={"danger"} message={"Login failed"}/>
      <Alert type={"warning"} message={"Please fill out all fields"}/>
      <Alert type={"info"} message={"Please check your email"} delay={true}/>
    </div>
  )
}

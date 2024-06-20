import React, { useState, useEffect } from 'react'
import Button from './Button'

export default function Alert({type, message, delay = false}) {
    const [alert, setAlert] = useState(true)
    const closeAlert = (e) => {
        e.target.parentElement.parentElement.classList.add("fadeAlert")
        setTimeout(() => {
            setAlert(false)
        }, 400)
    }
        useEffect(() => {
            delay && setTimeout(() => {
                setAlert(false)
            }, 3000)
        })
  return alert && <div className={`alert alert-${type}`}>
    <div className="alert-close">
        <span className="mr-1">{message}</span>
        <Button btnClass={"btn-close"} text={"X"} onClick={closeAlert}/>

    </div>
  </div>  
}

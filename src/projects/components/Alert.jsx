import React, { useState, useEffect } from 'react'
import Button from './Button'

export default function Alert({type, message}) {
    const [alert, setAlert] = useState(true)
  return alert && <div className={`alert alert-${type}`}>
    <div className="alert-close">
        <span className="mr-1">{message}</span>
        <Button />

    </div>
  </div>  
}

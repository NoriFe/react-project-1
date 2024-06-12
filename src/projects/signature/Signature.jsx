import React, { useState } from 'react'
import Title from '../components/Title'


const Signature = () => {
    const [name, setName] = useState('Your Signature')
    const [date, setDate] = useState('')

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const inputStyle = {
        border: 'none',
        borderBottom: '2px dotted black',
        outline: 'none',
        padding: '.35rem 0',
    }
    document.body.style.backgroundColor = 'lightblue'
  return (
    <div className='cointainer text-center'>
      <Title classes={"title"} text={name}/>
      <Title classes={"main-title mb-4"} text={!date ? "Date of Signature" : date}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor earum praesentium cupiditate ex eaque facilis culpa nihil aperiam aut, nulla sequi vitae sit. Voluptates harum distinctio dolores expedita doloremque.</p>
      <footer className='d-flex' style={{justifyContent: "space-around", position: "relative", top: "40vh"}}>
        <input type="date" value={date} style={inputStyle} onChange={handleDateChange}/>
        <input type="text" value={name} style={inputStyle} onChange={handleNameChange}/>
      </footer>
    </div>
  )
}

export default Signature


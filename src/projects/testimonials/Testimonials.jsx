import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

export default function Testimonials() {
    const handleClick = () => {
        
    }
  return (
    <div className='cointainer m-auto'>
      <Title text={"Testimonials"} />
      <Button text={" Posts"} btnClass="btn-info" icon={<BsFillFileEarmarkPostFill/>} onClick={handleClick}/>
      <Button text={" Users"} btnClass="btn-info" icon={<FaUserAlt />} onClick={handleClick}/>
      <Button text={" Commnets"} btnClass="btn-info" icon={<BiCommentDetail/>} onClick={handleClick}/>
    </div>
  )
}

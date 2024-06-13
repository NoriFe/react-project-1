import React, { useState } from 'react'
import Title from '../components/Title'
import {AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from 'react-icons/ai'
import Piz from '../like-my-photo/img/pizza.jpg'


export default function () {    
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(0)
    const toggleLike= () => {
        if(!like) {
          setLike(true)
          setCount(count + 1)
    }else{
        setLike(false)
        setCount(count - 1)    
    }
        }
  return (
    <div className="cointainer text-center">
        <Title text={"Like My Photo"}/>
        <Title classes={"subtitle"} text={`Likes ${count}`}/>
        <div className="card card-dark m-auto shadow-sm" style={{ width: 300, cursor:"pointer" }} onDoubleClick={toggleLike}>
            
            <div className="card-header fs-xl">
                <AiFillSmile className='mr-2'/>
                <small>Pizza</small>
            </div>
            <img src={Piz} alt="img" style={{ height:"fit-content" }} />
            <div className="card-footer fs-xl d-flex" style={{ justifyContent:"space-between"}}>
                <AiOutlineComment />{" "}
                {like? <AiFillHeart className='text-danger' onClick={toggleLike}/> : <AiOutlineHeart onClick={toggleLike} />}   
            </div>
        </div>
          
      
    </div>
  )
}

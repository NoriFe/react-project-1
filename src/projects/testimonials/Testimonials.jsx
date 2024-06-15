import React, {useState, useEffect} from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

export default function Testimonials() {
    // const handleClick = () => {
        
    // }
    const [testimonials, setTestimonials] = useState("");
    const [items, setItems] = useState();

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    }, [testimonials]);

  return (
    <div className='cointainer m-auto text-center'>
      <Title text={"Testimonials"} />
      <Button text={" Posts"} btnClass="btn-info" icon={<BsFillFileEarmarkPostFill/>} onClick={()=> setTestimonials("Posts")}/>
      <Button text={" Users"} btnClass="btn-info" icon={<FaUserAlt />} onClick={()=> setTestimonials("Users")}/>
      <Button text={" Commnets"} btnClass="btn-info" icon={<BiCommentDetail/>} onClick={()=> setTestimonials("Comments")}/>
      <Title classes={"subtitle text-primary"} text={!testimonials ? "Testimonials details" : testimonials} />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-2" key={item.id}>
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
              </div>
            );
          })}
    </div>
  );
}

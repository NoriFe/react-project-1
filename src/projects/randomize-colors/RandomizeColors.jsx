import React from 'react'
import Title from '../components/Title'

export default function RandomizeColors() {
    const handleClick = (e) => {       
       let body = document.querySelector("body");
       body.style.backgroundColor = randomColor();
       e.target.style.backgroundColor = randomColor();
    };

    function randomColor() {
        let letters = '0123456789ABCDEF';
        let color ="#";
        for (let i=0; i<6 ; i++) {
            color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  return (
    <div className='cointainer'>
      <Title text={"Randomize Color"} classses={"mb-4"}/>
      <div className='text-center'> 
        <button className='btn btn-danger' onClick={handleClick}>Click Me!</button>
        <button className='btn btn-success' onClick={handleClick}>Click Me!</button>
        <button className='btn btn-primary' onClick={handleClick}>Click Me!</button>
        <button className='btn btn-warning' onClick={handleClick}>Click Me!</button>
     </div>
    </div>
  )
}

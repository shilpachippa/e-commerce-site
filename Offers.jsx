import React from 'react'
import './Offers.css'
import exlusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>offers For You!</h1>
        <p>ONLY ON BEST SELLERS PRPDUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exlusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offers
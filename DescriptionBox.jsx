import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce wvbsite is an online platform that facilitates buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with cutomers, and conduct transactions without the need for a physical presence. E-commerce websites have a gained immense popularity duv to their convenience accesibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites display products or services along with detailed descriptions, images, prices and any available variablvs(eg., sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
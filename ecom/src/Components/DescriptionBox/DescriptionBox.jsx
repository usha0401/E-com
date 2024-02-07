import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform that enables businesses to showcase and sell their products or services to a global audience.
                These websites provide a virtual storefront where customers can browse through a diverse range of offerings, add items to their cart,
                and complete transactions securely over the internet. </p> 
                <p>
                E-commerce websites often feature user-friendly interfaces, secure payment gateways,
                and personalized shopping experiences, enhancing convenience for both buyers and sellers.
                This digital marketplace has transformed the way people shop, 
                offering a seamless and accessible solution for purchasing goods and services from the comfort of their homes.
                </p>
        </div>
    </div>
  )
}

export default DescriptionBox
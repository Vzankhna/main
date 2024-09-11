import React from 'react'
import bannerimage from '../../assets/image.png';
import './Banner.scss'

const Banner = () => {
  return (
  <div className="banner">
    <div className="text">
      <p>FURNITURE STORE</p>
      <h1>Discover the Artistry of Modern Contemporary Furniture</h1>
      <span>Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation
      </span>
    </div>
    <div className="bannerimage">
        <img src={bannerimage} alt="" />
      </div>
  </div>
  )
}

export default Banner



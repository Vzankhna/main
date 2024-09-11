import React from 'react'
import Category from '../Category/Category'
import Product from '../Product/Product'
import Homedecoration from '../Homedecoration/Homedecoration'
import Service from '../Service/Service'
import Banner from '../Banner/Banner'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Product/>
      <Homedecoration/>
      <Service/>
    </div>
  )
}

export default Home

import React from 'react'
import Catagory from '../../Components/Catagory/Catagory'
import CarouselEffect from'../../Components/Carousel/CarouselEffect.jsx'
import Product from '../../Components/Products/Product.jsx'
import LayOut from '../../Components/LayOut/LayOut.jsx'

const Landing = () => {
  return (
    <LayOut>
        <CarouselEffect/>
      <Catagory/>
      <Product/>
    </LayOut>
  )
}

export default Landing

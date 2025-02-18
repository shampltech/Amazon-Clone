import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {imgs} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './CarouselEffect.module.css'



// console.log(imgs)
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {imgs.map((imageItemsLink, index) => {
          // console.log(imageItemsLink)
          return <img key={index} src={imageItemsLink} />;
        })}
      </Carousel>

      <div className={styles.carousel_image}></div>
    </div>
  );
}

export default CarouselEffect

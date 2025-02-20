import React from 'react'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Rating from "@mui/material/Rating"
import styles from './Product.module.css'

function ProductCard({product}) {
  console.log(product)
  const { image, title, id, rating, price } = product;
  return (
    <div className={`${styles.card_container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>

        <div className={styles.rating}>
          {/* <div>rating</div> */}
          <Rating value={rating.rate} precision={0.5}/>
          
          {/* rating number */}
          <small>{rating.count}</small>
        </div>

        <div>{/* price */}
          <CurrencyFormat amount={price}/>
        </div>
        <button className={styles.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard

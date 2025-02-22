import React from 'react'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Rating from "@mui/material/Rating"
import styles from './Product.module.css'
import {Link} from 'react-router-dom'

function ProductCard({ product, flex, renderDesc }) {
  // console.log(product)
  const { image, title, id, rating, price, description } = product;

  return (
    <div
      className={`${styles.card_container}${flex?styles.flexed : ''}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc &&  <div style={{maxWidth:"750px"}}>{description}</div> }

        <div className={styles.rating}>
          {/* <div>rating</div> */}
          <Rating value={rating?.rate ?? 0} precision={0.5} />

          {/* rating number */}
          <small>{rating?.count}</small>
        </div>

        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={styles.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard

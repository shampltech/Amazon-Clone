import React, { useContext } from 'react'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Rating from "@mui/material/Rating"
import styles from './Product.module.css'
import {Link} from 'react-router-dom'
import { DataContaxt } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  // console.log(product)
  const { image, title, id, rating, price, description } = product;
  const [state, dispach] = useContext(DataContaxt);

  const addToCart = () => {
    dispach({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };
  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

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
        {renderAdd && (
          <button className={styles.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard

import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContaxt } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Products/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from '@mui/material'
import styles from './Cart.module.css'
import { Type } from '../../Utility/action.type'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Cart = () => {
  const [{basket,user},dispach] =useContext(DataContaxt)
  const total = basket.reduce((amount,item)=>{
   return  item.price * item.amount + amount
  },0)
  const increment=(item)=>{
    dispach({
      type:Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement=(id)=>{
    dispach({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shoping basket</h3>
          <hr />
          {basket?.length==0?(<p>Opps ! No item in your cart</p>):(basket?.map((item,i)=>{
            return (
              <section className={styles.cart_products}>
                <ProductCard
                  product={item}
                  key={i}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />

                <div className={styles.btn_container}>
                  <button
                    className={styles.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20}/>
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={styles.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20}/>
                  </button>
                </div>
              </section>
            );
            
          }))}


      </div>

{basket?.length !==0&&(
  <div className={styles.subtotal}>
    <div><p>Subtotal({basket.length} items) </p>
    <CurrencyFormat amount= {total}/>
        </div>
        <span>
          <input type="checkbox" />
          <small>This order contains a gift</small>
        </span>
        <Link to="/payments">

        Continue to ckeckout
        </Link>
  </div>
)}

      </section>
    </LayOut>
  )
}

export default Cart

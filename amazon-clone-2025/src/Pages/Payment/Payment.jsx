import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import styles from './Payment.module.css'
import { DataContaxt } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader} from 'react-spinners'
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";


const Payment = () => {

  const [{user,basket},dispatch]=useContext(DataContaxt)
  const totalItems = basket?.reduce((amount, item) => {
    return item?.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError,setCardError] = useState("")
  const [processing,setProcessing]=useState(false)
  const navigate=useNavigate()

  const errorHandler=(e)=>{
    e?.error?.message? setCardError(e?.error?.message):setCardError("")

  }

    const paymentHandeler= async (e)=>{
      e.preventDefault()

      try {
    // Step1 backend function connect to the clientSecrete
setProcessing(true)

        const response = await axiosInstance({
          method: "POST",
          url: `/payment/create?total=${total*100}`
        });
        // console.log(response?.data)
        const clientSecret=response?.data?.clientSecret

        // Step2 client side (react side confirmation)
        const { paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          }
        );
        // console.log(paymentIntent);

        // step3 after confermation order the data base ,store fire base , clear baskat
        await db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent?.id)
        .set(
          {
            basket:basket,
            amount:paymentIntent?.amount,
            created:paymentIntent?.created
          })
          dispatch({type:Type.EMPTY_BASKET})

        setProcessing(false)
        navigate("/orders",{state:{msg:"you have placed a new order"

        }})

      } catch (error) {
        console.log(error)
        setProcessing(false)
      }
    }

  return (
    <LayOut>
      <div className={styles.payment_header}>
        Check out ({totalItems}) items{" "}
      </div>
      <section className={styles.payment}>
        {/* address */}
        <div className={styles.flex}>
          <h3>Delivery address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React lane</div>
            <div>Chikago </div>
          </div>
        </div>
        <hr />
        {/* products */}
        <div className={styles.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard product={item} flex={true} key={i} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div>
          <h3>Payment form</h3>
          <div className={styles.paymentCard_container}>
            <div className={styles.payment_details}>
              <form action="" onSubmit={paymentHandeler}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={errorHandler} />
                {/* price */}
                <div className={styles.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total order|</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={styles.loading}>
                        <ClipLoader color="gray" size={12}/>
                        <p>Pleas Wait..</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;

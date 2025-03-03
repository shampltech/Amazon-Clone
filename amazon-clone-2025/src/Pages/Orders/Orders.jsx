import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { db } from '../../Utility/firebase'
import { useContext } from 'react'
import { DataContaxt } from '../../Components/DataProvider/DataProvider'
import styles from './Orders.module.css'
import ProductCard from '../../Components/Products/ProductCard.jsx'

function Orders() {

  const [{user},dispatch]=useContext(DataContaxt)
  const[orders,setOrders]=useState([])
  useEffect(()=>{
    if (user) {
      db.collection("users")
      .doc(user.uid)
      .collection("orders").orderBy("created","desc")
      .onSnapshot((snapshot)=>{
        // console.log(snapshot)
        setOrders(
          snapshot?.docs?.map((doc)=>({
            
            id : doc.id,
            data:doc.data()
            
            
          }))
        )

      })
    }else{
      setOrders([])
    }

  },[])
  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.orders_data}>
          <h2>Your orders</h2>
          {orders?.length==0 && <div style={{padding:"20px"}}>You don't have orders yet</div>}
          <div>
          {
            orders?.map((eachOrder ,index)=>{
              return(
              <div key={index}>
        <hr />
        <p>orderId={eachOrder?.id}</p>
        {
          eachOrder?.data?.basket?.map(order=>(
            <ProductCard  
            flex={true}
            key={order.id}
            product={order} />
          ))
        }

              </div>
              )
            })
          }
          
          </div>
        </div>
      </section>
    </LayOut>
  )
}

export default Orders

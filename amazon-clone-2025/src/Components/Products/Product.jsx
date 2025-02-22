import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.jsx'
import styles from './Product.module.css'
import Loder from '../Loder/Loder.jsx'

function Product() {
    const [products, setProducts]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
       
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts(res.data)
             isLoading(false);
            
        }).catch((err)=>{
            console.log(err)
             isLoading(false);
        },[])
        
    })
   
  return (
    <>
      {isLoading ? (
        <Loder />
      ) : (
        <section className={styles.porducts_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product

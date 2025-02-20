import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.jsx'
import styles from './Product.module.css'

function Product() {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts(res.data)
            console.log(products)
        }).catch((err)=>{
            console.log(err)
        },[])
        
    })
   
  return (
    <section className={styles.porducts_container}>
        {
            products?.map((singleProduct)=>{
                
                return <ProductCard product={singleProduct} key={singleProduct.id} />
            })
        } 
    </section>
  )
}

export default Product

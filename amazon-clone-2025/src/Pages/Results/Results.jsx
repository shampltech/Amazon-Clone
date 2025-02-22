import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/ensPoints'
import LayOut from '../../Components/LayOut/LayOut'
import styles from './Results.module.css'
import ProductCard from '../../Components/Products/ProductCard'
import Loder from '../../Components/Loder/Loder'

const Results = () => {
   const { catagoryName } = useParams();
  //  console.log(catagoryName)
  const [results,setResults]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  
  useEffect(()=>{
axios
  .get(`${productUrl}/products/category/${catagoryName}`)
  .then((res) => {
    console.log(res);
    setResults(res.data);
    isLoading(false)
    // console.log(results)
  })
  .catch((err) => {
    console.log(err);
    isLoading(false)
  });
  },[])
  
 
  
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}> Results</h1>
        <p style={{ padding: "30px" }}> Catagory /{catagoryName}</p>
        <hr />
        {isLoading ? (
          <Loder />
        ) : (
          <div className={styles.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results

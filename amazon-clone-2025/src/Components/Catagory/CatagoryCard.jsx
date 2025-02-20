






import React from 'react'
import styles from './Catagory.module.css'
function CatagoryCard({data}) {
 
  return (
    <div className={styles.catagory_card}>
      {console.log(data)}
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.ImageLink} alt="" />
      </a>
    </div>
  );
}

export default CatagoryCard








import React from 'react'
import styles from './Catagory.module.css'
import { Link } from 'react-router-dom';
function CatagoryCard({data}) {
 
  return (
    <div className={styles.catagory_card}>
      {/* {console.log(data)} */}
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.ImageLink} alt="" />
        <p>Shope now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard

import React from 'react'
import { catagoryInfos } from "./catagorFullInfos";
import CatagoryCard from './CatagoryCard';
import styles from './Catagory.module.css'
const Catagory = () => {
  return (
    <section className={styles.catagory}>

      {catagoryInfos.map((infos ,id) => (
        // {console.log(infos)}
        <CatagoryCard key={id} data={infos}/>

))}
      
    </section>
  );
}

export default Catagory

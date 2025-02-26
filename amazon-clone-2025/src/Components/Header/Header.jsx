import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContaxt } from '../DataProvider/DataProvider';
import {auth} from '../../Utility/firebase'
const Header = () => {
  const [{user,basket},dispach] = useContext(DataContaxt)
  const totalItems = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliverd to </p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* searchSection */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search product" />
          {/* icon */}

          <BsSearch size={38} />
        </div>
        {/* right side link */}
        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg"
              alt=""
            />
            <select>
              <option value="">EN</option>
            </select>
          </a>

          {/* three components */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={()=>auth.signOut()}>Sign out</span>
                </>
              ) : (
                <>
                  <p>Sign In </p>
                  <span>Account and Lists</span>
                </>
              )}
            </div>
          </Link>
          {/* orders */}
          <Link to="/order">
            <p>returns</p>
            <span> &orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItems}</span>
          </Link>
        </div>
      </div>

      <LowerHeader />
    </section>
  );
}

export default Header

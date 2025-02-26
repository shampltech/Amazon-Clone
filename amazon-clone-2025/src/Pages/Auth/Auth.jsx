import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'
import {auth} from '../../Utility/firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { DataContaxt } from '../../Components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
import {ClipLoader} from "react-spinners"
function Auth() {
  const [email,setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error,setError] = useState("")
  const [{user},dispach]=useContext(DataContaxt)
  const [loading,setLoading]=useState({signIn:false,
    signUp:false
  })
  const navigate=useNavigate()
  // console.log(user)

   const authHandler=async(e)=>{
    e.preventDefault()
    // console.log(e.target.name)
if (e.target.name=="signin") {
  setLoading({...loading,signIn:true})
signInWithEmailAndPassword(auth,email,password).then((userData)=>{
  // console.log(userData)
  dispach({
  type:Type.SET_USER,
  user:userData.user
  })
setLoading({...loading,signIn:false})
navigate("/")
}).catch((err)=>{
  setError(err.message)
  setLoading({...loading,signIn:false})
})
  
} else{
  setLoading({...loading,signUp:true})
createUserWithEmailAndPassword(auth,email,password).then((userData)=>{
  dispach({
    type:Type.SET_USER,
    user:userData.user
  })
  setLoading({...loading,signUp:false})
  navigate("/")

}).catch((err)=>{
  setError(err.message)
  setLoading({...loading,signUp:false})
})
}
   }
  return (
    <section className={styles.login}>
      <Link  to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
      </Link>

      <div className={styles.login_container}>
        <form action="">
          <h1>Sign In</h1>

          <div>
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            name="signin"
            type="submit"
            onClick={authHandler}
            className={styles.login_signInButton}
          >
            {" "}
            {loading.signIn ? <ClipLoader size={15} color="#000" /> : "sign in"}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of Use and
          sele.Please see our Praivecy Notce, Our Cookies Notice and our
          Interest-Based Ads Notice{" "}
        </p>
        <button
          name="signup"
          type="submit"
          onClick={authHandler}
          className={styles.registorButton}
        >
          {loading.signUp ? (
            <ClipLoader size={15} color="#000" />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
} 

export default Auth

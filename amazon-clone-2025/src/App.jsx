import { useContext, useEffect, useState } from 'react'

// import './App.css'
// import Header from './Components/Header/Header'
// import CarouselEffect from './Components/Carousel/CarouselEffect'
// import Catagory from './Components/Catagory/Catagory'
// import Product from './Components/Products/Product'
import Routing from './Routing'
import { useColorScheme } from '@mui/material'
import { DataContaxt } from './Components/DataProvider/DataProvider'
import { auth } from './Utility/firebase'
import { Type } from './Utility/action.type'

function App() {
  const [{ user }, dispatch] = useContext(DataContaxt);
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if (authUser) {
      dispatch({
        type:Type.SET_USER,
        user:authUser,
      })
      
    }
    else{
      dispatch({
        type: Type.SET_USER,
        user: null,
      })
    }
  })

},[])
  return (
    <>
    <Routing/>
    
    </>
  )
}

export default App

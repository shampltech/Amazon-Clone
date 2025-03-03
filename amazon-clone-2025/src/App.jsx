import { useContext, useEffect, useState } from 'react'

import './App.css'
import Routing from './Routing'
import { useColorScheme } from '@mui/material'
import { DataContaxt } from './Components/DataProvider/DataProvider.jsx'
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

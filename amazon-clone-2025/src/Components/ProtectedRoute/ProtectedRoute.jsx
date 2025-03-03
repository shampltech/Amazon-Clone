import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContaxt } from '../DataProvider/DataProvider'

const ProtectedRoute = ({ children ,msg,redirect}) => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContaxt);
  useEffect(() => {

if (!user) {
    navigate("/auth",{state:{msg,redirect}})
}

  }, [user]);
  return children;
};

export default ProtectedRoute

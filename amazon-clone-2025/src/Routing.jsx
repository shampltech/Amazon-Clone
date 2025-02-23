import React from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart.jsx'
import Resullts from './Pages/Results/Results.jsx'
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:catagoryName" element={<Resullts />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing

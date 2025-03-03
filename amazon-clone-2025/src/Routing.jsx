import React from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth.jsx'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart.jsx'
import Resullts from './Pages/Results/Results.jsx'
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
// import Auth from './Pages/Auth/Auth.jsx'
const stripePromise = loadStripe(
  "pk_test_51Qx63pDG0CBks9H9LnJpV0Sp1LSVy06ETaurxfcX8pCmjILDY4e4xfvxtjVAo9QnbC3ACMswAdPxqPmT7QLqe9aJ00ZGhGcXE7"
);

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute msg={"You must log in to access yor orders"} redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:catagoryName" element={<Resullts />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing

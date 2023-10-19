import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import SingleProduct from '../Pages/SingleProduct'
import ErrorPage from '../Pages/ErrorPage'
import Cart from '../Pages/Cart'
import Loader from '../Components/Loader'
import Wishlist from '../Pages/Wishlist'
import Payment from '../Pages/Payment'
import Address from '../Pages/Address'
import PrivateRoutes from './PrivateRoutes'
import Orders from '../Pages/Orders'
import Profile from '../Pages/Profile'

const MainRoutes = () => {
  const location = useLocation();
  const loginToken = JSON.parse(localStorage.getItem('google-login')) || {};

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {!loginToken.token && <Route path='/login' element={<Login />} /> }
      <Route path='/products' element={<Product />} />
      <Route path='/products/:id' element={<PrivateRoutes>
        <SingleProduct />
      </PrivateRoutes>} />

      <Route path='/cart' element={<PrivateRoutes>
        <Cart />
      </PrivateRoutes>} />

      <Route path='/wishlist' element={<PrivateRoutes>
        <Wishlist />
      </PrivateRoutes>} />

      <Route path='/address' element={<PrivateRoutes>
        <Address />
      </PrivateRoutes>} />

      <Route path='/payment' element={<PrivateRoutes>
        <Payment />
      </PrivateRoutes>} />

      <Route path='/orders' element={<PrivateRoutes>
        <Orders />
      </PrivateRoutes>} />

      <Route path='/profile' element={<PrivateRoutes>
        <Profile />
      </PrivateRoutes>} />

      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default MainRoutes;
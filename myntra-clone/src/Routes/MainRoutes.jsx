import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Admin from '../Pages/Admin'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
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

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/products' element={<Product />} />
      <Route path='/men' element={<Men />} />
      <Route path='/women' element={<Women />} />
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
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default MainRoutes;
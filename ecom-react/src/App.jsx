import './App.css'
import { Routes, Route } from 'react-router'
import AuthLayout from './component/layouts/AuthLayout'
import ProductsLayout from './component/layouts/ProductsLayout'

import Product from './container/product/Product'
import Login from './container/login/Login'
import AddToCart from './container/addToCart/addToCart'
import { Add } from '@mui/icons-material'
function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Login />} />
        </Route>
        <Route element={<ProductsLayout />}>
          <Route path='/product' element={<Product />} />
          <Route path='/addToCart' element={<AddToCart />} />
        </Route>
      </Routes>

    </>
  )
}

export default App

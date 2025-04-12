import './App.css'
import { Routes, Route } from 'react-router'
import AuthLayout from './component/layouts/AuthLayout'
import ProductsLayout from './component/layouts/ProductsLayout'

import Product from './container/product/Product'
import Login from './container/login/Login'
function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<ProductsLayout />}>
          <Route path='/' element={<Product />} />
        </Route>
      </Routes>

    </>
  )
}

export default App

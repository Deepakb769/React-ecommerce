import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Navbar from './component/Navbar'
import Product from './container/product/Product'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

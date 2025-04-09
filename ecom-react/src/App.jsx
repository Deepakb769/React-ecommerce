import './App.css'
import { Routes, Route, Link } from 'react-router'
import Navbar from './component/Navbar'
import Product from './container/product/Product'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
  )
}

export default App

import './App.css'
import { Routes, Route, Link } from 'react-router'
import Navbar from './component/Navbar'
import Product from './container/product/product'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
  )
}

export default App

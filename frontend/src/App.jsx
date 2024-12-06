import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import Syntrogis from './pages/syntrogis'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/syntrogis' element={<Syntrogis />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

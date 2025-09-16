import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'

import Gardening from './Components/Gardening'
import Gallery from './Components/Gallery'
import Support from './Components/Support'
import Museum from './Components/Museum'
import News from './Components/News'
import Footer from './Components/Footer'
import Hero from './Components/Hero';
import Home from './Pages/Home'
import Galliries from './Pages/Galliries';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Galliries' element={<Galliries />} />
  </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App

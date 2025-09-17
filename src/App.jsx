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
import Documentaries from './Pages/Documentaries'
import Content from './Pages/Content';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Forget from './Pages/Forget';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Galliries' element={<Galliries />} />
       <Route path='/Documentaries' element={<Documentaries />} />
        <Route path='/Content' element={<Content />} />
         <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
                  <Route path='/forget' element={<Forget />} />
  </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Gardening from './Components/Gardening'
import Gallery from './Components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar />
     <Home />
     <Gardening />
     <Gallery />
    </>
  )
}

export default App

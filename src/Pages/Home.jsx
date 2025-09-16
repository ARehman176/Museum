import { useState } from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Gardening from '../Components/Gardening'
import Gallery from '../Components/Gallery'
import Support from '../Components/Support'
import Museum from '../Components/Museum'
import News from '../Components/News'
import Footer from '../Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar />
     <Hero />
     <Gardening />
     <Gallery />
     <Support />
     <Museum />
     <News />
     <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Components/Footer'
import Footer from './Components/Footer'

import CarouselHome from './Components/CarouselHome'
import NavbarMain from './Components/NavbarMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarMain/>
    <CarouselHome/>
      <Footer/>
    </>
  )
}

export default App

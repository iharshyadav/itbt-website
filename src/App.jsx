import React from 'react'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import Registration from './Registration';
import Contact from './Components/Contact';
import Commitee from './Commitee';
import Venues from './Venues';

const App = () => {
  return (
    <>
     {/* <Home/> */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/commitee" element={<Commitee/>} />
        <Route path="/venues" element={<Venues/>} />
      </Routes>
    </>
  )
}

export default App
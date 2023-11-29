import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="main bg-white">
      <nav className="bg-white-800 h-20 flex text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" font-bold text-xl">Your Logo</div>
        <div className="hidden gap-4 md:flex space-x-4 ">
          <Link to='/'><h1>Home</h1></Link>
          <Link to='/commitee'><h1>Commitee</h1></Link>
          <Link to='/registration'><h1>Registration</h1></Link>
          <Link to='/venues'><h1>Venues</h1></Link>
          <Link to='/contact'><h1>Contact</h1></Link>
        </div>
        <div className="md:hidden">
          {/* Add a responsive menu button (e.g., a hamburger icon) */}
          <button className="">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <hr />
      </div>
    </>
  )
}

export default Navbar
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Commitee = () => {
  return (
   <>
     <Navbar/>
     <div className="main-commitee mt-10 w-full text-center text-2xl font-semibold">
        {/* <h1 className='underline'>Meet The Speakers</h1> */}
        <div className="pic flex w-full h-96">
           <img src="" alt="" />
           <img src="" alt="" />
           <img src="" alt="" />
           <img src="" alt="" />
        </div>
     </div>
     <Footer/>
   </>
  )
}

export default Commitee
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Commitee = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-around p-5 w-full flex-col sm:flex-row">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className=" text-white rounded-md shadow-md  mx-2 my-4">
          
          <img className='rounded-lg' src="../Images/venue3.jpg" alt="" />
        </div>
      ))}
    </div>


      <Footer />
    </>
  );
}

export default Commitee
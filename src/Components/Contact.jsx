import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="main-contact flex-col flex items-center justify-center mb-16">
        <h1 className="w-full text-center text-4xl font-bold mt-3 underline">
          Contact Us
        </h1>
        <div className="box-input w-3/4 flex flex-row md:flex-col items-center justify-around mt-12 gap-5">
          <img
            className="w-3/5 h-96 hidden md:block"
            src="../../Images/img4.jpg"
            alt=""
          />
          <div className="left w-full md:w-2/5">
            <form action="" className="w-full">
              <input
                type="text"
                className="border w-full h-10 rounded-lg"
                placeholder=" Enter Your Name"
              />
              <input
                type="text"
                className="border w-full h-10 mt-4 rounded-lg"
                placeholder=" Enter Your Email"
              />
              <input
                type="text"
                className="border w-full h-28 mt-4 rounded-lg"
                placeholder=" Enter Your Query"
              />
              <input
                type="button"
                value="Submit"
                className="border w-full h-10 bg-blue-500 text-white font-semibold mt-4 rounded-lg"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact
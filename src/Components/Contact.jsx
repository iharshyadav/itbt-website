import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
     <Navbar/>
     <div className="main-contact flex-col flex items-center justify-center mb-16">
        <h1 className="w-full text-center text-4xl font-bold mt-3">Want to Contact Us?</h1>
        <div className="box-input w-3/4 flex items-center justify-around mt-12">
            <div className="left w-2/5 h-72 ">
                <form action="">
                    <input type="text" className="border w-full h-10 rounded-lg" placeholder=' Enter Your Name'/>
                    <input type="text" className="border w-full h-10 mt-4 rounded-lg" placeholder=' Enter Your email'/>
                    <input type="text" className="border w-full h-28 mt-4 rounded-lg" placeholder=' Enter Your feedback'/>
                    <input type="button" value="Submit" className="border w-full h-10 bg-green-500 text-white font-semibold mt-4 rounded-lg" />
                </form>
            </div>
            <img className="w-2/5 h-80" src="../../Images/img4.jpg" alt="" />
        </div>
     </div>
     <Footer/>
    </>
  )
}

export default Contact
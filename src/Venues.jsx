import React from 'react'
import akshardham from '../public/Images/venue1.jpg'
import indiagate from'../public/Images/venue2.jpg'
import  redfort from '../public/Images/venue3.jpg'
import Navbar from './Components/Navbar'

const Venues = () => {
  return (
    <>
    <Navbar/>
           <div id="venue" className="h-screen">
      <div className="container">
        <h1 className="text-5xl font-bold mt-5 text-center text-purple-800">Venue</h1>
        <hr className="w-1/4 mx-auto my-6 border-t-4 border-yellow-500" />
        <div className="text-center mb-8">
              <p className="text-xl">ICLLM -2024 will take place in AKGEC Main seminar hall.</p>
            </div>
        <div className="flex">
          <div>
           
          </div>
          <div className="flex flex-wrap gap-4">
            <div className='w-full sm:w-1/2 text-center justify-center p-4 flex-col items-center '>
              <div className="text-center w-full">
                <h5 className="text-3xl sm:ml-8  mb-8 underline font-semibold mt-12">About Ghaziabad</h5>
                <p className="text-lg sm:ml-28 leading-7 text-justify">
                  Ghaziabad, located in the Indian state of Uttar Pradesh, is a  significant city in the National Capital Region (NCR) of India.  It is an industrial hub known for manufacturing industries and is well-connected to Delhi through road and metro networks.  The city has a rich history, numerous educational institutions, and landmarks like Swarna Jayanti Park and ISKCON Temple.
                </p>
              <div className="text-center">
                <a href="#myCarousel" className="btn btn-primary mt-4">Tourist Attractions</a>
              </div>
              </div>
            </div>
            <div className="formMap sm:w-44 w-76 p-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.467007802247!2d77.49981541461779!3d28.67567358240077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1676826055930!5m2!1sen!2sin"
                className='w-[85vw] sm:w-[45vw] h-[60vh]'
                title="location"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="carouselSection  flex flex-wrap items-center justify-center">
        <div className="carouselContainer ">
          <div className="row justify-center align-center">
            <div className=" justify-center align-center w-full flex flex-col sm:flex-row gap-3 mt-24 ">
              <div className="card w-full flex flex-wrap " style={{ width: '23rem', height: '37rem' }} >
                <div className="card-body  ">
                  <img src={akshardham} className=" rounded-md  card-img-top" alt="dummyImg"  />
                  <h5 className="card-title mt-4">Akshardham Temple</h5>
                  <p className="card-text">
                    Akshardham, a spectacular temple complex located in Delhi, is a must-visit tourist destination for those in the Ghaziabad area. Just a short drive away, it offers a serene and culturally enriching experience. The intricately carved architecture, exhibitions, and lush gardens make it a perfect place to spend a day exploring Indian spirituality and history.
                  </p>
                </div>
              </div>
              <div className="card item" style={{ width: '23rem', height: '37rem' }}>
                <div className="card-body  ">
                  <img src={indiagate} className=" rounded-md  card-img-top" alt="dummyImg"  />
                  <h5 className="card-title mt-4">India Gate</h5>
                  <p className="card-text">
                    India Gate, a war memorial in the heart of Delhi, is easily accessible from Ghaziabad. It's a revered monument that pays homage to the nation's fallen soldiers. The vast lawns surrounding the monument provide an excellent spot for picnics and leisurely strolls, making it a popular destination for people from Ghaziabad and nearby areas.
                  </p>
                </div>
              </div>
              <div className="card item" style={{ width: '23rem', height: '37rem' }}>
                <div className="card-body ">
                  <img src={redfort} className="  h-52 w-96 rounded-md card-img-top" alt="dummyImg"  />
                  <h5 className="card-title mt-4">Red Fort</h5>
                  <p className="card-text  w-74">
                    The Red Fort, a UNESCO World Heritage Site, is a short drive from Ghaziabad. This historic gem in Old Delhi is known for its stunning red sandstone architecture and rich Mughal history. A visit to the Red Fort is a journey back in time, offering a glimpse into India's glorious past.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-16'></div>
    </div>
    </>
  )
}

export default Venues
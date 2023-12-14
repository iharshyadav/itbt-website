import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Footer from './Footer';

const Home = () => {

  return (
    <>
      <Navbar />
      <Carousel />
      <div className="main">
        <div className="mb-12  p-8">
          <h1 className="mt-10 text-center w-full text-3xl font-semibold text-purple-950 underline mb-10">
            ABOUT THE CONFERENCE
          </h1>
          <p className="text-justify">
            The 'Information Technology Business Transformation' conference is a
            pivotal event that encapsulates the dynamic convergence of
            technology and business. In a world marked by incessant change and
            innovation, this conference serves as a crucial nexus for industry
            leaders, professionals, and visionaries to converge, exchange ideas,
            and chart the course for the future of IT-driven business
            transformation. Our mission is grounded in the commitment to
            fostering innovation, driving collaboration, and shaping the
            narrative of technological advancements that influence business
            strategies. Recognizing the fluid nature of the information
            technology landscape, our conference endeavors to empower
            individuals and organizations by providing the knowledge, insights,
            and connections necessary to thrive in this ever-evolving
            environment. Transformation is not merely a buzzword; it is the
            fundamental force behind progress. In the context of information
            technology and business, transformation serves as the catalyst that
            propels organizations forward. Whether it's adopting the latest
            technologies, embracing digitalization, or reimagining traditional
            processes, the conference delves deep into the essence of
            transformation. Attendees will explore the strategies, best
            practices, and real-world case studies that illuminate the path
            forward. The conference is designed to cover a spectrum of key
            themes and tracks mirroring the diverse facets of information
            technology business transformation. From Cloud Computing and
            Artificial Intelligence to Cybersecurity and Digital Innovation,
            each track is curated to provide a comprehensive understanding of
            the challenges and opportunities in today's tech-driven business
            landscape. Attendees will have the opportunity to explore Digital
            Innovation and Disruption, understanding how organizations can
            leverage digital innovation to disrupt traditional models, enhance
            customer experiences, and drive sustainable growth. The significance
            of Data Analytics and Insights will be unraveled, delving into the
            power of data and analytics in informing strategic decisions,
            improving operational efficiency, and gaining a competitive edge in
            the market. Navigating the complex landscape of cybersecurity is a
            crucial aspect, and the conference will address the evolving
            threats, compliance challenges, and strategies to safeguard critical
            assets. Emerging Technologies will take center stage, allowing
            participants to stay ahead of the curve by gaining insights into the
            latest technologies reshaping the IT landscape, from blockchain to
            the Internet of Things (IoT). Understanding the nuances of cloud
            computing, from migration strategies to optimal utilization, will be
            explored in the Strategies for Cloud Adoption track. This
            comprehensive approach ensures that attendees gain a holistic
            understanding of the multifaceted nature of IT business
            transformation. In conclusion, the 'Information Technology Business
            Transformation' conference stands as a beacon guiding individuals
            and organizations through the intricate landscape of IT-driven
            change. As we embrace the future, the conference provides a unique
            opportunity to connect, learn, and contribute to the ongoing
            narrative of transformation that defines the intersection of
            technology and business. Join us on this transformative journey,
            where opportunities for growth and excellence abound.
          </p>
        </div>
        <div className="flex flex-wrap p-10">
          <div className="w-full md:w-1/2">
            <h1 className="font-bold text-2xl text-center">
              Technical Sponsors
            </h1>
            <div className="flex flex-wrap justify-evenly items-center">
              <div className="w-full sm:w-1/3 flex flex-col items-center mb-12">
                <img
                  className="h-48 object-cover sm:h-40 w-3/5 sm:w-2/3 "
                  src="../Images/itbt.png"
                  alt="ITBT"
                />
                <p className="text-center pb-8">
                  <span className="font-bold">ITBT</span> Information technology
                  for Busineess Transformation
                </p>
              </div>
              <div className="w-full sm:w-1/3 flex flex-col items-center mb-12">
                <img
                  className="h-32 w-3/5 sm:w-3/5 pb-4"
                  src="../Images/Screenshot_2023-11-29_202207-removebg-preview.png"
                  alt="Big Data Centre of Excellence Ghaziabad"
                />
                <p className="text-center font-semibold">
                  Big Data Centre of Excellence Ghaziabad
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-bold text-2xl text-center">
              in association with
            </p>
            <div className="w-full flex flex-col items-center mb-12">
              <img
                className="h-40 w-3/5 sm:w-32 mx-auto"
                src="https://www.gmaindia.org/images/logo.png"
                alt="Ghaziabad Management Association"
              />
              <p className="text-center font-semibold">
                Ghaziabad Management Association
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home

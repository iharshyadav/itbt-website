import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Commitee = () => {
  const [popupVisible1, setPopupVisible1] = useState(false);
  const [popupVisible2, setPopupVisible2] = useState(false);
  const [popupVisible3, setPopupVisible3] = useState(false);
  const [popupVisible4, setPopupVisible4] = useState(false);


  
  
    // const data = [
    //   {
    //     image_url: "../Images/venue3.jpg",
    //     link: "",
    //     overlayText: "Proceedings 2017"
    //   },
    //   {
    //     image_url: "../Images/venue3.jpg",
    //     link: "",
    //     overlayText: "Proceedings 2018"
    //   },
    //   {
    //     image_url: "../Images/venue3.jpg",
    //     link: "",
    //     overlayText: "Proceedings 2019"
    //   },
    //   {
    //     image_url: "../Images/venue3.jpg",
    //     link: "",
    //     overlayText: "Proceedings 2020"
    //   },
    // ];


//  const committees = [
//     "Committee 1",
//     "Committee 2",
//     "Committee 3",
//  ];

//  const advisoryCommittee = [
//     "Advisory Member 1",
//     "Advisory Member 2",
//     "Advisory Member 3",
//  ];

  const openPopup1 = () => {
    setPopupVisible1(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup1 = () => {
    setPopupVisible1(false);
    document.body.style.overflow = 'auto';
  };

  const openPopup2 = () => {
    setPopupVisible2(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup2 = () => {
    setPopupVisible2(false);
    document.body.style.overflow = 'auto';
  };
  const openPopup3 = () => {
    setPopupVisible3(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup3 = () => {
    setPopupVisible3(false);
    document.body.style.overflow = 'auto';
  };
  const openPopup4 = () => {
    setPopupVisible4(true);
     document.body.style.overflow = 'hidden';
  };

  const closePopup4 = () => {
    setPopupVisible4(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      <div className="text-center">
        <h2 className="text-4xl pt-16 font-bold text-indigo-800">Proceeding</h2>
        <div className="border-b-4 border-indigo-800 w-1/2 sm:w-1/4 mx-auto my-3"></div>
      </div>

      <div className='flex flex-wrap w-full'>
        {/* Card-1 */}

        <div className="flex flex-wrap flex-col sm:flex-row   justify-around p-5 w-1/2 relative">
          <div
            className={`relative text-white rounded-md hover:cursor-pointer shadow-md mx-2 my-4 overflow-hidden `}
            onClick={openPopup1}
          >
            <img className="rounded-lg" src="../Images/venue3.jpg" alt="" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className=" text-white text-2xl font-bold">harsh</p>
            </div>
          </div>
        </div>


      {popupVisible && (
        <div className="fixed top-[3%] left-[10%] transform -translate-x-1/2 -translate-y-1/2    z-50">
          <div className="popup-overlay rounded-xl h-[85vh] shadow-2xl bg-[#e3e3e4] w-[80vw] absolute">
            <div className="popup-content text-center scrollable-content">
            <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold  pt-4 mb-4 underline">CHIEF PATRON</h2>
        <p className=" text-xl font-bold">Dr. R.K. Agarwal</p>
        <p className="mb-3">Director, AKGEC</p>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2 underline ">PATRONS</h2>
        <div className='flex flex-wrap items-center justify-center  gap-8 '>
        <ul>
          <li className=" text-xl font-bold">Prof. P.K. Chopra</li>
          <li className='mb-2'>HoD ECE, AKGEC</li>
          <li className=" text-xl font-bold">AKGEC Prof. S.L. Kapoor</li>
          <li className='mb-2'>HoD MCA, AKGEC </li>
          <li className=" text-xl font-bold">Prof. Bhupal Singh</li>
          <li> HoD EN, AKGEC</li>
          
        </ul>
        <ul>
        <li className=" text-xl font-bold">Prof. I.P. Sharma</li>
          <li className='mb-2'>HoD ME, AKGEC</li>
          <li className=" text-xl font-bold">Prof. B.B. Prasad</li>
          <li className='mb-4'>HoD CE, AKGEC </li>
        
          
        </ul>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl mb-3 mt-3 font-bold underline ">ORGANIZING COMMITTEE</h2>
        <div className='flex flex-wrap items-center justify-center gap-8'>
        <ul>
        <li className=" text-xl font-bold">Dr. Anu Chaudhary</li>
          <li className='mb-2'>Convener</li>
          <li className=" text-xl font-bold">Dr. Arun Yadav</li>
          <li className='mb-2'>Co-Convener </li>
          <li className=" text-xl font-bold">Ms. Anupama Sharma </li>
          <li>  Member </li>
          
        </ul>
        <ul>
        <li className=" text-xl font-bold">Dr. Sunita Yadav</li>
          <li className='mb-2'>Convener</li>
          <li className=" text-xl font-bold">Mr. Ruchin Gupta</li>
          <li>Member</li>
          
        </ul>
        <ul>
        <li className=" text-xl font-bold">Dr.Vivek Singh Verma </li>
          <li className='mb-2'>Co-Convener </li>
          <li className=" text-xl font-bold"> Mr. J.K. Seth  </li>
          <li className='mb-2'>Member </li>
          <li className=" text-xl font-bold">Mr. Narendra Kumar </li>
          <li className='mb-4'> Member</li>
          
        </ul>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl mb-3 font-bold underline ">TECHNICAL & ADVISORY COMMITTEE</h2>
        <div className='flex  flex-wrap items-center justify-center gap-8'>
        <ul>
        <li className=" text-xl font-bold">Dr. M.N. Hoda </li>
          <li className='mb-2' >BVICAM </li>
          <li className=" text-xl font-bold">Dr. Sateesh K. Peddoju </li>
          <li className='mb-2' >IIT, Roorkee  </li>
          <li className=" text-xl font-bold">Dr. D.P. Vidyarthi </li>
          <li className='mb-2' > JNU</li>
          <li className=" text-xl font-bold">Dr. Rajib Kr. Jha </li>
          <li className='mb-2' >IIT PATNA</li>
          <li className=" text-xl font-bold">Mr. Saurabh Agarwal </li>
          <li className='mb-2' >CSI </li>
          
          
        </ul>
        <ul  >
        <li className=" text-xl font-bold">Dr. Deepak Garg </li>
          <li className='mb-2' >Bennett University</li>
          <li className=" text-xl font-bold">Dr. Emmanuel Shubhakar Pilli </li>
          <li className='mb-2' >NIT, Jaipur</li>
          <li className=" text-xl font-bold">Dr. Abhay Bansal   </li>
          <li className='mb-2' > Amity University</li>
          <li className=" text-xl font-bold">Dr.D.K.Lobiyal   </li>
          <li className='mb-2' > JNU</li>
          <li className=" text-xl font-bold">Mr. Anil Ji Garg </li>
          <li className='mb-2' >CSI </li>
          <li className=" text-xl font-bold">Dr. Vinay Rishiwal MJP </li>
          <li className='mb-2' >Rohillkhand University</li>
          
          
        </ul>
        </div><div className='flex flex-wrap items-center justify-center gap-24'>
        <ul >
        <li className="mb-1 text-xl font-bold">Dr. Kavita Saxena </li>
          <li className='mb-2' > CSI </li>
        <li className=" text-xl font-bold">Dr. B.B. Sagar</li>
          <li className='mb-2' >BIT, Mesra</li>
          <li className=" text-xl font-bold">Mr. Vinay Gupta</li>
          <li className='mb-2' >Executive director GMA</li>
         
          
        </ul>
        <ul>
        <li className=" text-xl font-bold">Dr. Robin Porwal </li>
          <li className='mb-2' > LBSIM</li>
        <li className=" text-xl font-bold"> Dr. Satish Chandra</li>
          <li className='mb-2' >JIIT,Noida </li>
          <li className=" text-xl font-bold">Prof. Manoj K. Pandey</li>
          <li className='mb-2' >Vice chairman CSI</li>
        </ul>
        </div>
      </div>
    </div>
              <button className='right-5 top-0 absolute text-5xl' onClick={closePopup}>×</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Commitee;

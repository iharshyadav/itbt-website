import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const Commitee = () => {
  const [popupVisible1, setPopupVisible1] = useState(false);
  const [popupVisible2, setPopupVisible2] = useState(false);
  const [popupVisible3, setPopupVisible3] = useState(false);
  const [popupVisible4, setPopupVisible4] = useState(false);

  const handleDownload1 = () => {

    const link = document.createElement('a');

    link.href = '/2015/ITBT2015.pdf';
     link.download = 'ITBT2015.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  
  const handleDownload2 = (zipFileName) => {
    
    const link = document.createElement('a');
  
    link.href = `/${zipFileName}`;
    
    link.download = zipFileName;
    
    document.body.appendChild(link);
  
    link.click();
    
    document.body.removeChild(link);
  };
  

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

      <div className="flex flex-col sm:w-full justify-center items-center  sm:flex-row sm:flex-wrap w-full">


                                                       {/* Card-1 */}



        <div className="flex flex-wrap flex-col sm:flex-row justify-around sm:p-12 pr-2 pl-2 sm:w-1/2 relative">
          <div
            className={`relative text-white rounded-md hover:cursor-pointer shadow-md mx-2 my-4 overflow-hidden `}
            onClick={openPopup1}
          >
            <img className="rounded-lg" src="../Images/venue3.jpg" alt="" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className=" text-white text-2xl font-bold">2015</p>
            </div>
          </div>
        </div>

        {popupVisible1 && (
          <div className="fixed top-[3%] left-[10%] transform -translate-x-1/2 -translate-y-1/2    z-50">
            <div className="popup-overlay rounded-xl h-[85vh] shadow-2xl bg-[#e3e3e4] w-[80vw] absolute">
              <div className="popup-content text-center scrollable-content">
                <div className="bg-gray-100 min-h-screen">
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold  pt-4 mb-4 underline">
                      CHIEF PATRON
                    </h2>
                    <p className=" text-xl font-bold">Dr. R.K. Agarwal</p>
                    <p className="mb-3">Director, AKGEC</p>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-2 underline ">
                      PATRONS
                    </h2>
                    <div className="flex flex-wrap items-center justify-center  gap-8 ">
                      <ul>
                        <li className=" text-xl font-bold">Prof. M.P. Dave</li>
                        <li className="mb-2">M.Tech Coordinator</li>
                        <li className=" text-xl font-bold">Prof. P.K Chopra</li>
                        <li className="mb-2">HoD ECE </li>
                        <li className=" text-xl font-bold">
                          Prof. I.P. Sharma
                        </li>
                        <li> HoD ME</li>
                        <li className=" text-xl font-bold">
                          Prof. S.L. Kapoor
                        </li>
                        <li> HoD MCA</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">Prof. B.M. Kalra</li>
                        <li className="mb-2">HoD CSE</li>
                        <li className=" text-xl font-bold">
                          Prof. V.K. Parashar
                        </li>
                        <li className="">HoD EN </li>
                        <li className=" text-xl font-bold">
                          Prof. P.K. Sharda
                        </li>
                        <li className="mb-2">HoD AS&H</li>
                        <li className=" text-xl font-bold">
                          Prof. B.B. Prasad
                        </li>
                        <li className="">HoD Civil Engg. </li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl mb-3 mt-3 font-bold underline ">
                      ORGANIZING COMMITTEE
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                      <ul>
                        <li className=" text-xl font-bold">Prof. R.P Saw</li>
                        <li className="mb-2">Convener</li>
                        <li className=" text-xl font-bold">Prof. Ashiv Shah</li>
                        <li className="mb-2">Co-Convener </li>
                        <li className=" text-xl font-bold">
                          Ms. Anupama Sharma{" "}
                        </li>
                        <li> Member </li>
                        <li className=" text-xl font-bold">
                          Mr. Sumit Sharma{" "}
                        </li>
                        <li> Member </li>
                        <li className=" text-xl font-bold">
                          Mr. Narendra Kr. Tewatia{" "}
                        </li>
                        <li> Member </li>
                      </ul>

                      <ul>
                        <li className=" text-xl font-bold">
                          Dr.Anu Chaudhary{" "}
                        </li>
                        <li className="mb-2">Co-Convener </li>
                        <li className=" text-xl font-bold"> Mr. J.K. Seth </li>
                        <li className="mb-2">Member </li>
                        <li className=" text-xl font-bold">
                          Mr. Ruchin Gupta{" "}
                        </li>
                        <li className=""> Member</li>
                        <li className=" text-xl font-bold">
                          Mr. Parcham Singh{" "}
                        </li>
                        <li className=""> Member</li>
                        <li className=" text-xl font-bold">
                          Ms. Yogita Chhabra{" "}
                        </li>
                        <li className=""> Member</li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl mb-3 font-bold underline ">
                      TECHNICAL & ADVISORY COMMITTEE
                    </h2>
                    <div className="flex  flex-wrap items-center justify-center gap-8">
                      <ul>
                        <li className=" text-xl font-bold">prof. R.C Joshi</li>
                        <li className="mb-2">
                          Chancellor,Graphic Era University{" "}
                        </li>
                        <li className=" text-xl font-bold">
                          Mr. Daman Dev Sood{" "}
                        </li>
                        <li className="mb-2">IEEE Delhi Section </li>
                        <li className=" text-xl font-bold">
                          Prof. Bhim Singh{" "}
                        </li>
                        <li className="mb-2"> IIT, Delhi</li>
                        <li className=" text-xl font-bold">
                          Mr. Saurabh Agarwal{" "}
                        </li>
                        <li className="mb-2">
                          Chairman CSI, Ghaziabad Chapter
                        </li>
                        <li className=" text-xl font-bold">Dr. Arun Sharma </li>
                        <li className="mb-2">
                          Asocc Prof- IGDTUW and Vice Chairman-CSI Ghaziabad
                          Chapter{" "}
                        </li>
                        <li className=" text-xl font-bold">
                          Dr. Satish Chandra
                        </li>
                        <li className="mb-2">JIIT, Noida</li>
                        <li className=" text-xl font-bold">Dr. Rajesh Tyagi</li>
                        <li className="mb-2">JIMS, Noida</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">Dr. Deepak Garg</li>
                        <li className="mb-2">
                          Secretary, IEEE Computer Society
                        </li>
                        <li className=" text-xl font-bold">
                          Dr. D.K, Lobiyal{" "}
                        </li>
                        <li className="mb-2">JNU, New Delhi</li>
                        <li className=" text-xl font-bold">
                          Dr. D.P. Vidyarthi{" "}
                        </li>
                        <li className="mb-2">JNU, New Delhi</li>
                        <li className=" text-xl font-bold">
                          Dr. Emmanuel S. Pilli{" "}
                        </li>
                        <li className="mb-2"> NIT, Jaipur</li>
                        <li className=" text-xl font-bold">Mr. Anil Ji Garg</li>
                        <li className="mb-2">
                          {" "}
                          Enterpreneur and Honey Secretary - CSI Ghaziabad
                          Chapter
                        </li>
                        <li className=" text-xl font-bold">
                          Dr. Satish Peddoju{" "}
                        </li>
                        <li className="mb-2">HOD MCA </li>
                        <li className=" text-xl font-bold">
                          Dr. Maitreyee Dutta{" "}
                        </li>
                        <li className="mb-2">NITTTR, Chandigarh</li>
                      </ul>
                    </div>
                  </div>
                  <button
                    className=" border-3 border-black text-red-600 p-1 rounded-lg m-4 text-xl font-bold "
                    onClick={handleDownload1}
                  >
                    Download PDF
                  </button>
                </div>
                <button
                  className="right-5 top-0 absolute text-5xl"
                  onClick={closePopup1}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}

                                                           {/* Card-2 */}


        <div className="flex flex-wrap flex-col sm:flex-row  justify-around sm:p-12 pr-2 pl-2 sm:w-1/2 relative">
          <div
            className={`relative text-white rounded-md hover:cursor-pointer shadow-md mx-2 my-4 overflow-hidden `}
            onClick={openPopup2}
          >
            <img className="rounded-lg" src="../Images/venue3.jpg" alt="" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className=" text-white text-2xl font-bold">2017</p>
            </div>
          </div>
        </div>

        {popupVisible2 && (
          <div className="fixed top-[3%] left-[10%] transform -translate-x-1/2 -translate-y-1/2    z-50">
            <div className="popup-overlay rounded-xl h-[85vh] shadow-2xl bg-[#e3e3e4] w-[80vw] absolute">
              <div className="popup-content text-center scrollable-content">
                <div className="bg-gray-100 min-h-screen">
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold  pt-4 mb-4 underline">
                      CHIEF PATRON
                    </h2>
                    <p className=" text-xl font-bold">Dr. R.K. Agarwal</p>
                    <p className="mb-3">Director, AKGEC</p>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-2 underline ">
                      PATRONS
                    </h2>
                    <div className="flex flex-wrap items-center justify-center  gap-8 ">
                      <ul>
                        <li className=" text-xl font-bold">
                          Prof. P.K. Chopra
                        </li>
                        <li className="mb-2">HoD ECE, AKGEC</li>
                        <li className=" text-xl font-bold">
                          Prof. S.L. Kapoor
                        </li>
                        <li className="mb-2">HoD MCA, AKGEC </li>
                        <li className=" text-xl font-bold">
                          Prof. Bhupal Singh
                        </li>
                        <li> HoD EN, AKGEC</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">
                          Prof. I.P. Sharma
                        </li>
                        <li className="mb-2">HoD ME, AKGEC</li>
                        <li className=" text-xl font-bold">
                          Prof. B.B. Prasad
                        </li>
                        <li className="">HoD CE, AKGEC </li>
                        <li className=" text-xl font-bold">
                          Prof. Arshiv Shah
                        </li>
                        <li className="">HoD, TIFAC CORE</li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl mb-3 mt-3 font-bold underline ">
                      ORGANIZING COMMITTEE
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                      <ul>
                        <li className=" text-xl font-bold">Prof. R.P. Saw</li>
                        <li className="mb-2">Convener</li>
                        <li className=" text-xl font-bold">
                          Dr. Anu Chaudhary
                        </li>
                        <li className="mb-2">Co-Convener </li>
                        <li className=" text-xl font-bold">
                          Ms. Anupama Sharma{" "}
                        </li>
                        <li> Member </li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">
                          Prof. Mamta Bhusry
                        </li>
                        <li className="mb-2">Convener</li>
                        <li className=" text-xl font-bold">Dr. Sunita Yadav</li>
                        <li className="mb-2">Co-Convener</li>
                        <li className=" text-xl font-bold">Mr. J.k. Seth</li>
                        <li>Member</li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl mb-3 font-bold underline ">
                      TECHNICAL & ADVISORY COMMITTEE
                    </h2>
                    <div className="flex  flex-wrap items-center justify-center gap-8">
                      <ul>
                        <li className=" text-xl font-bold">Dr. M.N. Hoda </li>
                        <li className="mb-2">BVICAM </li>
                        <li className=" text-xl font-bold">
                          Dr. Sateesh K. Peddoju{" "}
                        </li>
                        <li className="mb-2">IIT, Roorkee </li>
                        <li className=" text-xl font-bold">
                          Dr. D.P. Vidyarthi{" "}
                        </li>
                        <li className="mb-2"> JNU</li>
                        <li className=" text-xl font-bold">
                          Dr. Maitreyee Dutta{" "}
                        </li>
                        <li className="mb-2">NITTTR</li>
                        <li className=" text-xl font-bold">
                          Mr. Saurabh Agarwal{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Dr. Kavita Saxena{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Mr. Robin Porwal{" "}
                        </li>
                        <li className="mb-2">LBSIM </li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">Dr. Deepak Garg </li>
                        <li className="mb-2">Bennett University</li>
                        <li className=" text-xl font-bold">
                          Dr. Emmanuel Shubhakar Pilli{" "}
                        </li>
                        <li className="mb-2">NIT, Jaipur</li>
                        <li className=" text-xl font-bold">Dr.D.K.Lobiyal </li>
                        <li className="mb-2"> JNU</li>
                        <li className=" text-xl font-bold">
                          Dr. Abhay Bansal{" "}
                        </li>
                        <li className="mb-2"> Amity University</li>
                        <li className=" text-xl font-bold">
                          Mr. Anil Ji Garg{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Dr. Vinay Rishiwal MJP{" "}
                        </li>
                        <li className="mb-2">MJP Rohillkhand University</li>
                        <li className=" text-xl font-bold">Dr. B.B. Sagar </li>
                        <li className="mb-2">BIT, Mesra</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-24">
                      <ul>
                        <li className="mb-1 text-xl font-bold">
                          Dr. Satish Chandra{" "}
                        </li>
                        <li className="mb-2">JIIT,Noida</li>
                      </ul>
                    </div>
                  </div>

                  <button
                    className=" border-3 border-black text-red-600 p-1 rounded-lg m-4 text-xl font-bold "
                    onClick={() => handleDownload2("2017.zip")}
                  >
                    Download PDF
                  </button>
                </div>
                <button
                  className="right-5 top-0 absolute text-5xl"
                  onClick={closePopup2}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}

                                                           {/* Card-3 */}

        <div className="flex flex-wrap flex-col sm:flex-row  justify-around sm:p-12 pr-2 pl-2 sm:w-1/2 relative">
          <div
            className={`relative text-white rounded-md hover:cursor-pointer shadow-md mx-2 my-4 overflow-hidden `}
            onClick={openPopup3}
          >
            <img className="rounded-lg" src="../Images/venue3.jpg" alt="" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className=" text-white text-2xl font-bold">2018</p>
            </div>
          </div>
        </div>

        {popupVisible3 && (
          <div className="fixed top-[3%] left-[10%] transform -translate-x-1/2 -translate-y-1/2    z-50">
            <div className="popup-overlay rounded-xl h-[85vh] shadow-2xl bg-[#e3e3e4] w-[80vw] absolute">
              <div className="popup-content text-center scrollable-content">
                <div className="bg-gray-100 min-h-screen">
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold  pt-4 mb-4 underline">
                      CHIEF PATRON
                    </h2>
                    <p className=" text-xl font-bold">Dr. R.K. Agarwal</p>
                    <p className="mb-3">Director, AKGEC</p>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-2 underline ">
                      PATRONS
                    </h2>
                    <div className="flex flex-wrap items-center justify-center  gap-8 ">
                      <ul>
                        <li className=" text-xl font-bold">
                          Prof. P.K. Chopra
                        </li>
                        <li className="mb-2">HoD ECE, AKGEC</li>
                        <li className=" text-xl font-bold">
                          Prof. S.L. Kapoor
                        </li>
                        <li className="mb-2">HoD MCA, AKGEC </li>
                        <li className=" text-xl font-bold">
                          Prof. Bhupal Singh
                        </li>
                        <li> HoD EN, AKGEC</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">
                          Prof. I.P. Sharma
                        </li>
                        <li className="mb-2">HoD ME, AKGEC</li>
                        <li className=" text-xl font-bold">
                          Prof. B.B. Prasad
                        </li>
                        <li className="mb-4">HoD CE, AKGEC </li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl mb-3 mt-3 font-bold underline ">
                      ORGANIZING COMMITTEE
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                      <ul>
                        <li className=" text-xl font-bold">
                          Dr. Anu Chaudhary
                        </li>
                        <li className="mb-2">Convener</li>
                        <li className=" text-xl font-bold">Dr. Arun Yadav</li>
                        <li className="mb-2">Co-Convener </li>
                        <li className=" text-xl font-bold">
                          Ms. Anupama Sharma{" "}
                        </li>
                        <li> Member </li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">Dr. Sunita Yadav</li>
                        <li className="mb-2">Convener</li>
                        <li className=" text-xl font-bold">Mr. Ruchin Gupta</li>
                        <li>Member</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">
                          Dr.Vivek Singh Verma{" "}
                        </li>
                        <li className="mb-2">Co-Convener </li>
                        <li className=" text-xl font-bold"> Mr. J.K. Seth </li>
                        <li className="mb-2">Member </li>
                        <li className=" text-xl font-bold">
                          Mr. Narendra Kumar{" "}
                        </li>
                        <li className="mb-4"> Member</li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl mb-3 font-bold underline ">
                      TECHNICAL & ADVISORY COMMITTEE
                    </h2>
                    <div className="flex  flex-wrap items-center justify-center gap-8">
                      <ul>
                        <li className=" text-xl font-bold">Dr. M.N. Hoda </li>
                        <li className="mb-2">BVICAM </li>
                        <li className=" text-xl font-bold">
                          Dr. Sateesh K. Peddoju{" "}
                        </li>
                        <li className="mb-2">IIT, Roorkee </li>
                        <li className=" text-xl font-bold">
                          Dr. D.P. Vidyarthi{" "}
                        </li>
                        <li className="mb-2"> JNU</li>
                        <li className=" text-xl font-bold">
                          Dr. Rajib Kr. Jha{" "}
                        </li>
                        <li className="mb-2">IIT PATNA</li>
                        <li className=" text-xl font-bold">
                          Mr. Saurabh Agarwal{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Dr. Kavita Saxena{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Dr. Robin Porwal{" "}
                        </li>
                        <li className="mb-2">LBSIM </li>
                        <li className=" text-xl font-bold">Mr. Vinay Gupta</li>
                        <li className="mb-2">Executive director GMA</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">Dr. Deepak Garg </li>
                        <li className="mb-2">Bennett University</li>
                        <li className=" text-xl font-bold">
                          Dr. Emmanuel Shubhakar Pilli{" "}
                        </li>
                        <li className="mb-2">NIT, Jaipur</li>
                        <li className=" text-xl font-bold">Dr.D.K.Lobiyal </li>
                        <li className="mb-2"> JNU</li>
                        <li className=" text-xl font-bold">
                          Dr. Abhay Bansal{" "}
                        </li>
                        <li className="mb-2"> Amity University</li>

                        <li className=" text-xl font-bold">
                          Mr. Anil Ji Garg{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Dr. Vinay Rishiwal{" "}
                        </li>
                        <li className="mb-2">MJP Rohillkhand University</li>
                        <li className=" text-xl font-bold">Dr. B.B. Sagar </li>
                        <li className="mb-2">BIT, Mesra</li>
                        <li className=" text-xl font-bold">
                          Prof. Manoj K. Pandey{" "}
                        </li>
                        <li className="mb-2">Vice chairman CSI</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-24">
                      <ul>
                        <li className=" text-xl font-bold">
                          {" "}
                          Dr. Satish Chandra
                        </li>

                        <li className="mb-2">JIIT,Noida</li>
                      </ul>
                    </div>
                  </div>

                  <button
                    className=" border-3 border-black text-red-600 p-1 rounded-lg m-4 text-xl font-bold "
                    onClick={() => handleDownload2("2018.zip")}
                  >
                    Download PDF
                  </button>
                </div>
                <button
                  className="right-5 top-0 absolute text-5xl"
                  onClick={closePopup3}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}

                                                                  {/* Card-4 */}

        <div className="flex flex-wrap flex-col sm:flex-row  justify-around sm:p-12 pr-2 pl-2 sm:w-1/2 relative">
          <div
            className={`relative text-white rounded-md hover:cursor-pointer shadow-md mx-2 my-4 overflow-hidden `}
            onClick={openPopup4}
          >
            <img className="rounded-lg" src="../Images/venue3.jpg" alt="" />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className=" text-white text-2xl font-bold">2019</p>
            </div>
          </div>
        </div>

        {popupVisible4 && (
          <div className="fixed top-[3%] left-[10%] transform -translate-x-1/2 -translate-y-1/2    z-50">
            <div className="popup-overlay rounded-xl h-[85vh] shadow-2xl bg-[#e3e3e4] w-[80vw] absolute">
              <div className="popup-content text-center scrollable-content">
                <div className="bg-gray-100 min-h-screen">
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold  pt-4 mb-4 underline">
                      CHIEF PATRON
                    </h2>
                    <p className=" text-xl font-bold">Agarwal</p>
                    <p className="mb-3">Director, AKGEC</p>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-2 underline ">
                      PATRONS
                    </h2>
                    <div className="flex flex-wrap items-center justify-center  gap-8 ">
                      <ul>
                        <li className=" text-xl font-bold">
                          Prof. P.K. Chopra
                        </li>
                        <li className="mb-2">HoD ECE, AKGEC</li>
                        <li className=" text-xl font-bold">
                          Prof. S.L. Kapoor
                        </li>
                        <li className="mb-2">HoD MCA, AKGEC </li>
                        <li className=" text-xl font-bold">
                          Prof. Bhupal Singh
                        </li>
                        <li> HoD EN, AKGEC</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">
                          Prof. I.P. Sharma
                        </li>
                        <li className="mb-2">HoD ME, AKGEC</li>
                        <li className=" text-xl font-bold">
                          Prof. B.B. Prasad
                        </li>
                        <li className="mb-4">HoD CE, AKGEC </li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl mb-3 mt-3 font-bold underline ">
                      ORGANIZING COMMITTEE
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                      <ul>
                        <li className=" text-xl font-bold">
                          Dr. Anu Chaudhary
                        </li>
                        <li className="mb-2">Convener</li>
                        <li className=" text-xl font-bold">Dr. Arun Yadav</li>
                        <li className="mb-2">Co-Convener </li>
                        <li className=" text-xl font-bold">
                          Ms. Anupama Sharma{" "}
                        </li>
                        <li> Member </li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">Dr. Sunita Yadav</li>
                        <li className="mb-2">Convener</li>
                        <li className=" text-xl font-bold">Mr. Ruchin Gupta</li>
                        <li>Member</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">
                          Dr.Vivek Singh Verma{" "}
                        </li>
                        <li className="mb-2">Co-Convener </li>
                        <li className=" text-xl font-bold"> Mr. J.K. Seth </li>
                        <li className="mb-2">Member </li>
                        <li className=" text-xl font-bold">
                          Mr. Narendra Kumar{" "}
                        </li>
                        <li className="mb-4"> Member</li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mx-auto">
                    <h2 className="text-2xl mb-3 font-bold underline ">
                      TECHNICAL & ADVISORY COMMITTEE
                    </h2>
                    <div className="flex  flex-wrap items-center justify-center gap-8">
                      <ul>
                        <li className=" text-xl font-bold">Dr. M.N. Hoda </li>
                        <li className="mb-2">BVICAM </li>
                        <li className=" text-xl font-bold">
                          Dr. Sateesh K. Peddoju{" "}
                        </li>
                        <li className="mb-2">IIT, Roorkee </li>
                        <li className=" text-xl font-bold">
                          Dr. D.P. Vidyarthi{" "}
                        </li>
                        <li className="mb-2"> JNU</li>
                        <li className=" text-xl font-bold">
                          Dr. Rajib Kr. Jha{" "}
                        </li>
                        <li className="mb-2">IIT PATNA</li>
                        <li className=" text-xl font-bold">
                          Mr. Saurabh Agarwal{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Dr. Kavita Saxena{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Dr. Robin Porwal{" "}
                        </li>
                        <li className="mb-2">LBSIM </li>
                        <li className=" text-xl font-bold">Mr. Vinay Gupta</li>
                        <li className="mb-2">Executive director GMA</li>
                      </ul>
                      <ul>
                        <li className=" text-xl font-bold">Dr. Deepak Garg </li>
                        <li className="mb-2">Bennett University</li>
                        <li className=" text-xl font-bold">
                          Dr. Emmanuel Shubhakar Pilli{" "}
                        </li>
                        <li className="mb-2">NIT, Jaipur</li>
                        <li className=" text-xl font-bold">Dr.D.K.Lobiyal </li>
                        <li className="mb-2"> JNU</li>
                        <li className=" text-xl font-bold">
                          Dr. Abhay Bansal{" "}
                        </li>
                        <li className="mb-2"> Amity University</li>

                        <li className=" text-xl font-bold">
                          Mr. Anil Ji Garg{" "}
                        </li>
                        <li className="mb-2">CSI </li>
                        <li className=" text-xl font-bold">
                          Dr. Vinay Rishiwal{" "}
                        </li>
                        <li className="mb-2">MJP Rohillkhand University</li>
                        <li className=" text-xl font-bold">Dr. B.B. Sagar </li>
                        <li className="mb-2">BIT, Mesra</li>
                        <li className=" text-xl font-bold">
                          Prof. Manoj K. Pandey{" "}
                        </li>
                        <li className="mb-2">Vice chairman CSI</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-24">
                      <ul>
                        <li className=" text-xl font-bold">
                          {" "}
                          Dr. Satish Chandra
                        </li>

                        <li className="mb-2">JIIT,Noida</li>
                      </ul>
                    </div>
                  </div>

                  <button
                    className=" border-3 border-black text-red-600 p-1 rounded-lg m-4 text-xl font-bold "
                    onClick={() => handleDownload2("2019.zip")}
                  >
                    Download PDF
                  </button>
                </div>
                <button
                  className="right-5 top-0 absolute text-5xl"
                  onClick={closePopup4}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Commitee;

import React from 'react'


const Footer = () => {
  return (
    <>
     <div className="main-footer h-72 bg-gray-400 text-white">
       <div className="pt-10 flex justify-center flex-col items-center">
         <img src="../../Images/img5.png" className="w-24" alt="" />
         <h1 className="mt-3">Ajay Kumar Garg Engineering College</h1>
       </div>
       <hr className="w-full mt-4 text-white h-1" />
       <div className='flex gap-2 items-center justify-center mt-4'>
         <img className='w-10' src="../../Images/Screenshot_2023-11-29_202207-removebg-preview.png" alt="" />
         <h1 className='font-semibold'>DESIGNED AND DEVELOPED BY:</h1>
         <h2 className='font-bold'>BIG DATA CENTER OF EXCELLENCE</h2>
       </div>
       
     </div>
    </>
  )
}

export default Footer

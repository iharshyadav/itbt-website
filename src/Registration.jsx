import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Registration = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-200">
      <div className="container mx-auto p-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-800">Registration</h2>
          <div className="border-b-4 border-indigo-800 w-1/4 mx-auto my-3"></div>
        </div>

        <div className="my-8">
          <div className="reg-main">
            <h3 className="text-indigo-800">Please Read</h3>
            <p className="text-lg">
              Note: Minimum one registration is mandatory for the paper to be
              part of proceedings. If the author/co-author wishes to attend the
              conference and requires separate proceedings and a certificate
              along with the conference kit, in that case, the author/co-author
              needs to pay full registration fees individually. Accommodation
              could be arranged in the guest house of Ajay Kumar Garg
              Engineering College or nearby hotels as per availability, on a
              payment basis for which the organizers will provide necessary
              assistance if informed well in advance.
            </p>

            <h3 className="text-indigo-800">The fees structure is as follows:</h3>
          </div>
        </div>

        <div className="reg-table">
          <table className="table table-striped w-95 h-400 p-10 text-lg shadow-md">
            <thead>
              <tr>
                <th className="text-center align-middle font-bold">Category</th>
                <th className="text-center align-middle font-bold">
                  Indian authors (INR)
                </th>
                <th className="text-center align-middle font-bold">
                  International authors (USD)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center align-middle font-bold">
                  Scholars/Students
                </td>
                <td className="text-center align-middle">₹4000</td>
                <td className="text-center align-middle">$200</td>
              </tr>
              <tr>
                <td className="text-center align-middle font-bold">Academia</td>
                <td className="text-center align-middle">₹6000</td>
                <td className="text-center align-middle">$300</td>
              </tr>
              <tr>
                <td className="text-center align-middle font-bold">Industry</td>
                <td className="text-center align-middle">₹8000</td>
                <td className="text-center align-middle">$300</td>
              </tr>
              <tr>
                <td className="text-center align-middle font-bold">
                  Attendees Only
                </td>
                <td className="text-center align-middle">₹5000</td>
                <td className="text-center align-middle">$100</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="reg-note text-lg mt-12">
          <h5 className="text-indigo-800">Note:</h5>
          <p>
            Registration fee does not include accommodation and transportation
            expenses. <br />
            After Payment, please send the transaction receipt and details to
            the following Google form link:
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Registration
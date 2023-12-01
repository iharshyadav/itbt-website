import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Registration = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <div className="container mx-auto ">
          <div className="text-center">
            <h2 className="text-4xl pt-16 font-bold text-indigo-800">
              Registration
            </h2>
            <div className="border-b-4 border-indigo-800 w-1/2 sm:w-1/4 mx-auto my-3"></div>
          </div>

          <div className="my-8">
            <div className="reg-main p-1">
              <h3 className="text-indigo-800  text-2xl font-medium">
                Please Read
              </h3>
              <p className="  text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique mollitia dicta perferendis! Dolorum, delectus. Illo
                laboriosam obcaecati beatae mollitia facere pariatur assumenda
                excepturi, error officiis dolore officia eligendi numquam
                praesentium. Iure consequatur officia, alias error minus
                dignissimos, ratione libero, incidunt eius ex at debitis
                explicabo doloremque necessitatibus sit ad reiciendis saepe.
                Possimus aliquid sequi, impedit fugit ducimus quidem earum
                labore? Doloremque explicabo enim sed consectetur esse possimus
                deserunt modi, eligendi nemo minus est, alias, eos id iure rerum
                beatae. Enim placeat iure minus neque ipsum blanditiis quam qui
                illo consectetur. Quam labore, molestias accusantium in animi ut
              </p>

              <h3 className="text-indigo-800 mt-12 text-2xl font-medium ">
                The fees structure is as follows:
              </h3>
            </div>
          </div>

          <div className="reg-table">
            <table className="table table-striped w-full h-400 p-10 text-lg shadow-md">
              <thead>
                <tr>
                  <th className="text-center align-middle font-bold">
                    Category
                  </th>
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
                  <td className="text-center align-middle font-bold">
                    Academia
                  </td>
                  <td className="text-center align-middle">₹6000</td>
                  <td className="text-center align-middle">$300</td>
                </tr>
                <tr>
                  <td className="text-center align-middle font-bold">
                    Industry
                  </td>
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

          <div className="reg-note pb-16 text-lg mt-12">
            <h5 className="text-indigo-800 text-2xl font-medium">Note:</h5>
            <p>
              Registration fee does not include accommodation and transportation
              expenses. <br />
              After Payment, please send the transaction receipt and details to
              the following Google form link:
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Registration
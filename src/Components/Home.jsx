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
        <h1 className="mt-10 text-center w-full text-3xl font-semibold text-purple-950 underline">
          Important Dates
        </h1>
        <div className="flex flex-col md:flex ml-52 mt-10 w-2/3 items-center justify-evenly border h-52 bg-gray-200 shadow-2xl shadow-gray-400">
          {/* Left side for names */}
          <div className=" md:w-full">
             <div className="first flex justify-around items-center ">
               <h1>Paper Submission</h1>
               <h1>31 Jan 2024</h1>
             </div>
          </div>
          <hr className="w-full" />
          <div className=" md:w-full items-center justify-center w-full">
             <div className="first flex justify-around">
               <h1>Notification to Authors</h1>
               <h1>28 Feb 2024</h1>
             </div>
          </div>
          <hr className="w-full" />
          <div className=" md:w-full items-center justify-center w-full">
             <div className="first flex justify-around">
               <h1>Camera-Ready</h1>
               <h1>	31 Mar 2024</h1>
             </div>
          </div>
          <hr className="w-full" />
          <div className=" md:w-full items-center justify-center w-full">
             <div className="first flex justify-around">
               <h1>Conference Date</h1>
               <h1>	11 May 2024</h1>
             </div>
          </div>
        </div>
        <div className='mb-12'>
        <h1 className="mt-10 text-center w-full text-3xl font-semibold text-purple-950 underline mb-10">
          ABOUT THE CONFERENCE
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius neque ipsa dicta vero veritatis consequatur, dolor natus, eveniet dolore tempora debitis numquam accusantium facilis, explicabo voluptate maxime. Obcaecati, at?
        Mollitia, eum libero. Assumenda quaerat totam dolorem delectus ea aliquam odio autem molestiae, provident fuga voluptatem. Enim, beatae quos harum libero sed corrupti tenetur fugiat, ducimus impedit exercitationem assumenda rerum?
        Iure itaque ab ipsum distinctio quos impedit delectus, error, fuga ut dolor totam cumque laudantium asperiores saepe! Rem modi, impedit nulla laborum hic odit, alias necessitatibus veritatis enim omnis voluptate.
        Est officiis repellendus tempora perferendis laborum facere dignissimos doloribus, soluta consectetur iste? Quod at minima quae deserunt eos illum ratione consequatur, cum natus error vero architecto voluptatibus recusandae iusto exercitationem.
        Rerum in perspiciatis cumque quaerat, voluptatibus, fugiat nihil unde, veniam delectus aut excepturi cum laborum magnam voluptatum nisi molestias natus illo dignissimos dolorum expedita neque. Excepturi earum pariatur laudantium unde.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam explicabo obcaecati sequi, dolor quis nostrum nesciunt eveniet temporibus. Tempora, quos? Hic enim asperiores consectetur voluptatem, inventore explicabo magnam ad Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem similique illum id fuga, explicabo tempore vero repudiandae sint vel deleniti unde mollitia ut cum ea, nobis molestiae impedit, rerum fugiat? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium hic eum ab perferendis ducimus doloremque ea quibusdam excepturi voluptates alias expedita molestiae, inventore cum libero in consequatur quaerat numquam corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quibusdam libero sunt doloremque tempore pariatur officia beatae ab suscipit repellendus quaerat ut repellat, incidunt assumenda, aperiam exercitationem maxime odio rerum.
        Culpa, totam ipsa, nam voluptates dolore rem blanditiis magnam soluta ab tenetur nostrum placeat eligendi voluptatem alias quidem quod repellat iste. Aperiam deleniti assumenda eligendi totam est magnam at labore?
        Cupiditate fugiat neque velit molestias voluptate sed optio placeat deleniti laborum corrupti consequuntur id officia, voluptates quia voluptatibus natus dolores facilis molestiae tempore deserunt exercitationem commodi odio iure! Incidunt, accusantium.
        Numquam obcaecati sit vitae dolore eum libero ipsa a, inventore fugit temporibus dignissimos dolor. Asperiores corrupti mollitia explicabo suscipit cumque. Dolor nisi laboriosam consequuntur neque cumque quisquam harum consectetur asperiores.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home
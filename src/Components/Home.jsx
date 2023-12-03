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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius
            neque ipsa dicta vero veritatis consequatur, dolor natus, eveniet
            dolore tempora debitis numquam accusantium facilis, explicabo
            voluptate maxime. Obcaecati, at? Mollitia, eum libero. Assumenda
            quaerat totam dolorem delectus ea aliquam odio autem molestiae,
            provident fuga voluptatem. Enim, beatae quos harum libero sed
            corrupti tenetur fugiat, ducimus impedit exercitationem assumenda
            rerum? Iure itaque ab ipsum distinctio quos impedit delectus, error,
            fuga ut dolor totam cumque laudantium asperiores saepe! Rem modi,
            impedit nulla laborum hic odit, alias necessitatibus veritatis enim
            omnis voluptate. Est officiis repellendus tempora perferendis
            laborum facere dignissimos doloribus, soluta consectetur iste? Quod
            at minima quae deserunt eos illum ratione consequatur, cum natus
            error vero architecto voluptatibus recusandae iusto exercitationem.
            Rerum in perspiciatis cumque quaerat, voluptatibus, fugiat nihil
            unde, veniam delectus aut excepturi cum laborum magnam voluptatum
            nisi molestias natus illo dignissimos dolorum expedita neque.
            Excepturi earum pariatur laudantium unde. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt quisquam explicabo
            obcaecati sequi, dolor quis nostrum nesciunt eveniet temporibus.
            Tempora, quos? Hic enim asperiores consectetur voluptatem, inventore
            explicabo magnam ad Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatem similique illum id fuga, explicabo
            tempore vero repudiandae sint vel deleniti unde mollitia ut cum ea,
            nobis molestiae impedit, rerum fugiat? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Accusantium hic eum ab perferendis
            ducimus doloremque ea quibusdam excepturi voluptates alias expedita
            molestiae, inventore cum libero in consequatur quaerat numquam
            corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eos quibusdam libero sunt doloremque tempore pariatur officia beatae
            ab suscipit repellendus quaerat ut repellat, incidunt assumenda,
            aperiam exercitationem maxime odio rerum. Culpa, totam ipsa, nam
            voluptates dolore rem blanditiis magnam soluta ab tenetur nostrum
            placeat eligendi voluptatem alias quidem quod repellat iste. Aperiam
            deleniti assumenda eligendi totam est magnam at labore? Cupiditate
            fugiat neque velit molestias voluptate sed optio placeat deleniti
            laborum corrupti consequuntur id officia, voluptates quia
            voluptatibus natus dolores facilis molestiae tempore deserunt
            exercitationem commodi odio iure! Incidunt, accusantium. Numquam
            obcaecati sit vitae dolore eum libero ipsa a, inventore fugit
            temporibus dignissimos dolor. Asperiores corrupti mollitia explicabo
            suscipit cumque. Dolor nisi laboriosam consequuntur neque cumque
            quisquam harum consectetur asperiores.
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
                <p className="text-center pb-8"><span className='font-bold'>ITBT</span> Information technology for Busineess Transformation</p>
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
              <p className="text-center font-semibold">Ghaziabad Management Association</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home

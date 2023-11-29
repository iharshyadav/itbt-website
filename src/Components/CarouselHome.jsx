import React from 'react'
import { Carousel } from 'react-bootstrap'
import {CarouselCaption} from 'react-bootstrap'
import { CarouselItem} from 'react-bootstrap'

const CarouselHome = () => {
  return (
    <div>
        <Carousel>
  <CarouselItem interval={1000}>
    <img
      className="d-block w-100"
      src="https://tse1.mm.bing.net/th?id=OIP.7dLZGf2_JIJWhywlYFGCjgHaDJ&pid=Api&rs=1&c=1&qlt=95&w=268&h=113"
      alt="First slide"
    />
    <CarouselCaption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </CarouselCaption>
  </CarouselItem>
  <CarouselItem interval={500}>
    <img
      className="d-block w-100"
      src="https://springconferenceit.netlify.app/images/college2.jpg"
      alt="Second slide"
    />
    <CarouselCaption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </CarouselCaption>
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100"
      src="https://www.akgec.ac.in/wp-content/uploads/2019/08/home-about.jpg"
      alt="Third slide"
    />
    <CarouselCaption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </CarouselCaption>
  </CarouselItem>
</Carousel>
    </div>
  )
}

export default CarouselHome
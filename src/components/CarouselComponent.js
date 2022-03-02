import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
    return (
        <div className=''>
            <Carousel autoPlay>
                <div>
                    <img className='' alt="" src="https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <div>
                    <img className='' alt="" src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselComponent

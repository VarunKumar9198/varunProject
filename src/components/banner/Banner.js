import React from 'react';
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Banner.css'
import Helper from '../../Assets/helper';

const Banner=()=>{
    const {bannerSliderImg}=Helper()
    return(
        <div className="heroBackground">

            <Container>
            <Swiper navigation={true} modules={[Navigation]} className="bannerSwiper">

                {[1,2,3,4].map((item,index)=>{
                    return(

                        <SwiperSlide>
                            <img src={bannerSliderImg} alt="banner" className='bannerSliderImg' />
                        </SwiperSlide>
                    )
                })}
        
      </Swiper>
            </Container>

        </div>
        
    
        
        
    )
}

export default Banner



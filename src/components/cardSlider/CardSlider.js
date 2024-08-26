import React from 'react'
import './CardSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container } from 'react-bootstrap'

const CardSlider = (props) => {
    const { heading, containerClass, staticContent, subText } = props;
    return (
        <Container>
            <div className={containerClass}>
                <div className='videoCardHeading'>
                <h2 className='mainHeading'>{heading}</h2>
                {subText && <p>{subText}</p>}
                </div>

              
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    // autoplay={{
                    //     "delay": 2500,
                    //     "disableOnInteraction": false
                    // }}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className="myCardSwiper"
                >

                    {
                        staticContent.map((item, index) => {
                            return (

                                <SwiperSlide>
                                    <div className='sliderCard'>
                                        <img src={item.img} alt="" width={150} height={225} className='cardImg' />
                                        <p className='cardHeading'>{item.title}</p>
                                        <p className='cardDesc'><span className='cardSpecialText'>{item.desc}</span>•{item.subDesc}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Container>)
}

export default CardSlider
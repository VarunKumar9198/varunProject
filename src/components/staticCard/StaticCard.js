import React from 'react'
import './StaticCard.css'
import { Container } from 'react-bootstrap'
import Helper from '../../Assets/helper'



const StaticCard = () => {
    const { loadingImg1, loadingImg2,middleBanner } = Helper()

    const staticCardData = [
        {
            id: 1,
            img: loadingImg1,
            title: 'BOCCHI THE ROCK!',
            desc: 'T1 E6 - Ocho vistas insuperables',
            littleTxt: 'Subtitulado',
            count: '146k'
        },
        {
            id: 2,
            img: loadingImg2,
            title: 'BOCCHI THE ROCK!',
            desc: 'T1 E6 - Ocho vistas insuperables',
            littleTxt: 'Subtitulado',
            count: '146k'
        },
        {
            id: 3,
            img: loadingImg1,
            title: 'BOCCHI THE ROCK!',
            desc: 'T1 E6 - Ocho vistas insuperables',
            littleTxt: 'Subtitulado',
            count: '146k'
        },
        {
            id: 4,
            img: loadingImg2,
            title: 'BOCCHI THE ROCK!',
            desc: 'T1 E6 - Ocho vistas insuperables',
            littleTxt: 'Subtitulado',
            count: '146k'
        },
    ]
    return (
        <Container>
            <div className='videoCardContainer orange'>
                <div className='videoCardHeading'>
                    <h2>Seguir viendo</h2>
                    <p>VER HISTORIAL</p>
                </div>

                <div className='videoCardRow'>
                    {
                        staticCardData.map((item, index) => {
                            return (
                                <div className='singleVideoCard'>
                                    <img src={item.img} alt="video"  height={135} />
                                    <p>{item.title}</p>
                                    <p>{item.desc}</p>
                                    <p className='countFlex'><span>{item.littleTxt}</span>
                                        <span>{item.count}</span></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div>
                <img src={middleBanner} alt="middle banner"  style={{width:"100%",margin:"30px 0"}} />
            </div>

        </Container>)
}

export default StaticCard
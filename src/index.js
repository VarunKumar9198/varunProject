import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/header/Header'
import Banner from '../src/components/banner/Banner'

import './global.css'
import SubNav from './components/subNav/SubNav';
import CardSlider from './components/cardSlider/CardSlider';
import { getDataHelpr } from './Assets/getDataHelpr';
import StaticCard from './components/staticCard/StaticCard';
import Helper from './Assets/helper';
import { Container } from 'react-bootstrap';
import HorizontalCard from './components/horizontalCard/HorizontalCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { card1SliderData1, horiziontalCardData } = getDataHelpr()
const { videoshowImg, chainsaw, newYuzu } = Helper()
root.render(

    <div className='rootBg'>
        <Header />
        <Banner />
        <SubNav />
        <CardSlider
            heading='Nuestras recomendaciones'
            containerClass='cardSliderSectio2 skyBlue'
            staticContent={card1SliderData1}
        />
        <StaticCard />
        <CardSlider
            heading='¡GOOOOOOOOOL!'
            containerClass='cardSliderSectio2 skyBlue'
            staticContent={card1SliderData1}
        />
        <Container>
            <img src={videoshowImg} alt="main banner" style={{ maxWidth: '100%', margin: '50px 0 0' }} />
        </Container>

        <CardSlider
            heading='Lo más popular!'
            containerClass='cardSliderSectio2 skyBlue'
            staticContent={card1SliderData1}
            subText='VER TODO'
        />

        <CardSlider
            heading='Últimos actualizados!'
            containerClass='cardSliderSectio2 orange'
            staticContent={card1SliderData1}
            subText='VER TODO'

        />

        <Container>
            <img src={chainsaw} alt="main banner" style={{ maxWidth: '100%', margin: '50px 0 0' }} />
        </Container>

        <CardSlider
            heading='Similares a cosas que viste Mob Psycho 100!'
            containerClass='cardSliderSectio2 orange'
            staticContent={card1SliderData1}
        />
        <HorizontalCard
            staticContent={horiziontalCardData}
        />


        <CardSlider
            heading='Similares a cosas que viste BLUELOCK'
            containerClass='cardSliderSectio2 orange'
            staticContent={card1SliderData1}
        />

        <Container>
            <div className='footer text-center'>
                <div>
                    <img src={newYuzu} alt="" style={{ maxWidth: '213px', height: '164px' }} />
                    <p>Crunchyroll UI Kit</p>
                    <p>Made by Jorge S. Ruiz</p>
                </div>
            </div>
        </Container>

    </div>
);

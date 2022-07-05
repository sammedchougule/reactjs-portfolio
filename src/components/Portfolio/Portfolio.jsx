import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Facobook_Clone from '../../img/facebook_clone.png';
import Ecommerce from '../../img/ecommerce.png';
import glass_card from '../../img/glass_card.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css'
import {themeContext} from '../../Context'
import {useContext} from 'react'


const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
        {/* Heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href=" https://lnkd.in/g_Byhg-Y">
                    <img src={Facobook_Clone} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/sammedchougule/e-commerce">
                    <img src={Ecommerce} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/sammedchougule/glass-card-effect">
                    <img src={glass_card} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
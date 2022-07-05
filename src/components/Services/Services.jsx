import React from 'react'
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {motion } from 'framer-motion';

const Services = () => {
    const transition = {duration: 1, type: 'spring'}

    const theme = useContext(themeContext) ;
    const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className='awesome'>
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>
            Expert in Front-End Development including technoligies like HTML5,
            <br />
             CSS3, JavaScript, Reactjs, Boostrap, Tailwind, Firebase,
            <br />
            PHP, MySQL, MongoDB, Git, etc.</span>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>
        {/* right side */}
        <div className='cards'>
            {/* First Card */}
            <motion.div style={{left: '14rem'}}
                whileInView={{left: '14rem'}}
                initial={{left: '28rem'}}
                transition={transition}>
                <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={'Adobeb XD, Figma, Adobe Photoshop & More'}
                />
            </motion.div>
            {/* Second Card */}
            <motion.div style={{ top: '12rem', left: '-4rem'}}
                whileInView={{left: '-5rem'}}
                initial={{left: '-15rem'}}
                transition={transition}>
                <Card
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={'HTML, CSS, Javascript, Reactjs, PHP & SQL'}
                />
            </motion.div>
            {/* Third Card */}
            <motion.div style={{ top: '19rem', left: '12rem'}}
                whileInView={{left: '11.5rem'}}
                initial={{left: '24rem'}}
                transition={{duration: 1.8, type: 'spring'}}>
                <Card
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={'Lorem ispum dummy text are usually use insecion where....'}
                />
            </motion.div>
            <div className='blur s-blur2' style={{ background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services
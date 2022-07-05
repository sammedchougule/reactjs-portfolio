import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {motion } from 'framer-motion';

const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext) ;
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{ color: darkMode? 'white': ''}}>Hey! I Am</span>
                <span>SaMMeD Chougule</span>
                <span>Frontend Developer With High Level Of Experience In Web Designing And Development, Production Quality Work.</span>
            </div>
            <button className="button i-button">
                Hire Me
            </button>
            <div className="i-icons">
                <a href="https://github.com/sammedchougule">
                    <img src={Github} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/sammed-chougule-057439141/">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/sammed__chougule/">
                    <img src={Instagram} alt="Instagram" />
                </a>
            </div>
        </div>

        <div className='i-right'>
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" style={{height: '320px', width: '300px'}}/>
            <motion.img 
                initial ={{left: '-36%'}}
                whileInView = {{left: '-20%'}}
                transition={transition}
                src={glassesimoji} alt=""/>
            <motion.div
                className='floating-div'
                initial ={{top: '-5%', left: '80%'}}
                whileInView = {{left: '68%'}}
                transition={transition}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </motion.div>
            <motion.div 
                className='floating-div'
                style={{top: '18rem', left: '0.5rem'}}
                initial ={{left: '-35%'}}
                whileInView = {{left: '5%'}}
                transition={transition}>
                <FloatingDiv image={thumbup} txt1='Best Design' />
            </motion.div>
            {/* blur div */}
            <div className='blur' style={{background: 'rgb(238 210 255'}}>
            </div>
            <div className='blur' 
            style={{
                background: '#C1F5FF',
                top: '13rem',
                width: '21rem',
                height: '11rem',
                left: '-8rem'
            }}>
            
            </div>
        </div>
    </div>
  )
}

export default Intro
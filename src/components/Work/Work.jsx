import React from 'react'
import './Work.css';
import Upwork from '../../img/Upwork.png';
import freelancer from '../../img/freelancer.png';
import Facebook from '../../img/Facebook.png';
import sts from '../../img/sts.png';
import infynow from '../../img/infynow.png';
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {motion} from 'framer-motion';

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='work' id='Experience'>
      {/* left side */}
        <div className='awesome'>
            <span style={{color: darkMode? 'white': ''}}>Works For All These</span>
            <span>Brands & Client's</span>
            <span>
              I'm very ambitious Front-End Developer looking for a rolw in established IT company 
              <br />
              with the opportunity to work with the latest technoligies on challenging and
              <br />
              diverse projects.
              <br /><br /><br />
              I'm very confident, naturally curious, and perpetually working on improving my 
              <br />
              chops one design problem at a time and diverse projects.
            </span> 
              <button className='button s-button'>Hire Me</button>
            <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>

        {/* Right side */}
        <div className='w-right'>
          <motion.div 
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: 'spring'}}
            className='w-mainCircle'>
            <div className='w-secCircle'>
              <a href="https://suvarnatech.solutions/">
                <img src={sts} alt="Suvarna Tech Solutions" style={{height: '120px', width: '120px'}} />
              </a>
            </div>
            <div className='w-secCircle'>
              <img src={infynow} alt="Infynow" style={{height: '150px', width: '180px'}} />
            </div>
            <div className='w-secCircle'>
              <img src={freelancer} alt="" style={{height: '140px', width: '180px'}} />
            </div>
            <div className='w-secCircle'>
              <img src={Upwork} alt="" />
            </div>
            <div className='w-secCircle'>
              <img src={Facebook} alt="" />
            </div>
          </motion.div>
          {/* Background Circle */}
          <div className='w-backCircle blueCircle'></div>
          <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Work

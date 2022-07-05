import React from 'react'
import "./Footer.css"

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className='f-content'>
            <span>+91 8904 331 718 / sammedc24@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/sammed__chougule/">
                  <Insta color='white' size='2rem'/>
                </a>
                <a href="https://www.facebook.com/sammed.chougule.9/">
                  <Facebook color='white' size='2rem'/>
                </a>
                <a href="https://github.com/sammedchougule">
                  <Github color='white' size='2rem'/>
                </a>
                <a href="https://www.linkedin.com/in/sammed-chougule-057439141/">
                  <LinkedIn color='white' size='2rem'/>
                </a>   
            </div>
        </div>
    </div>
  )
  
}

export default Footer
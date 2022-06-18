import React from 'react'
import "./header.css"
import Resume from './Resume'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/img1.png'

const Header = () => {
  return (
   <header id='home'>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Rithick</h1>
       <h5 className='text-light'>FrontEnd Developer</h5>
       <Resume />
       <HeaderSocials />
       <a href='#contact' className='scroll__down'>Scroll Down</a>

       <div className="me">
         <img src={Me} alt="me" /></div>
       </div>

      
   </header>
  )
}

export default Header
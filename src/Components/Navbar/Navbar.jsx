import './Navbar.css';

import Brand from  '../../assets/Rh-removebg-preview.png'
import { FaGithub , FaLinkedin , FaTwitter , FaWhatsapp ,FaBars , FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function NavBar() {

    const [open , setOpen] = useState(false)

    function HandleClick(){
        setOpen(!open);
    };
      
    return(
        <>
        <nav className='nav'>
                <div className='nav--item nav--brand'>
                    <img src={Brand} alt='logo'/>
                </div>

                <div className='nav--item nav--links'>
                
                <a href="#about">About</a>
                                                    
                <a href="#stacks">Tech Stacks</a>
                                                    
                 <a href="#project">Projects</a>
                                                                    
                <a href="#contact">Contact</a>
                                                    
            
                    <a href='https://github.com/herdeyhorlarh'>
                     <FaGithub/>
                    </a>
                    <a href='https://x.com/rafee68691?t=aDVUAM0yWgiVArc0xj3oPg&s=09'>
                       <FaTwitter/>
                    </a>
                    <a href='#'>
                       <FaLinkedin/>
                    </a>

                    <a href='https://wa.me/qr/GPRMKDQZPNC2L1'>
                    <FaWhatsapp/>
                    </a>
                    </div>
                     <button className='open' onClick={HandleClick}>
                        {
                            open ?  <FaTimes/>  : <FaBars/>
                        }
                        </button>
                </nav>
           <nav className='mobileHeader'>
                {
                    open && (  <div className='mobileLink'>
                
                <a href="#about" className='mobileLink'>About</a>
                                                    
                <a href="#stacks" className='mobileLink'>Tech Stacks</a>
                                                                                        
                <a href="#project" className='mobileLink'>Projects</a>
                                                                                                        
                <a href="#contact" className='mobileLink'>Contact</a>

                        <a href='https://github.com/herdeyhorlarh' className='mobilContLink'>
                          <FaGithub/>
                        </a>
                        <a href='https://x.com/rafee68691?t=aDVUAM0yWgiVArc0xj3oPg&s=09' className='mobilContLink'>
                        <FaTwitter/>
                        </a>
                        <a href='#' className='mobilContLink'>
                        <FaLinkedin/>
                        </a>
    
                        <a href='https://wa.me/qr/GPRMKDQZPNC2L1' className='mobilContLink'>
                         <FaWhatsapp/>
                        </a>
                        </div> )
                }

              
                </nav>
        
        </>
    )
}

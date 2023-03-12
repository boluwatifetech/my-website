import React from 'react';
import {FaFacebook,FaTwitter,FaHome,FaInstagram,FaLinkedin} from 'react-icons/fa'
function Footer() {
  return (
    <div>
       <div className='footer'>
<div className='footer-contact'>
    <h1>  i'm available for all your web development work</h1>
    <h2>just email me:</h2>
    <div>
    <input type='email'></input><button>submit</button>
    </div>

    <div className='footer-message'>
<div className='about-footer'>
<h2>about me</h2>
<p>work it out</p>
<p>excellent work</p>
<p>high quality</p>
<p>awesome designs</p>
</div>
<div className='contact-footer'>
<h2>contact me</h2>
<p>contact</p>
<p>support</p>
<p>bring job</p>
<p>work it out</p>
</div>
<div className='social-footer'>
<h2>social media</h2>
<a href='https://facebook.com/Bolu Abiola' >facebook</a>
<br></br><a href='https://instagram.com/blaqstix' >instagram</a>
<br></br><a href='https://facebook.com/Boluwatife Abiola'>twitter</a>
<br></br><a href='https://facebook.com/Abiola Boluwatife'>Linkin</a>
</div>
    </div>
<div className='main-foot'>
    <h4 className='shift'>blaqtix</h4>
    <p className='shift'>blaqstix @2020</p>
    
<a href='https://facebook.com/Bolu Abiola' className='shift'><FaFacebook/></a>
<a href='https://instagram.com/blaqstix' className='shift'><FaInstagram/></a>
<a href='https://facebook.com/Boluwatife Abiola'  className='shift'><FaTwitter/></a>
<a href='https://facebook.com/Abiola Boluwatife'><FaLinkedin/></a>
</div>
        </div>
        </div>  
    </div>
  );
}

export default Footer;

import React,{useRef} from 'react';
import {Link} from 'react-router-dom'
import './main.css';
import {FaBars,FaTimes} from 'react-icons/fa'
function Nav(){
  const navRef=useRef()

  const navFunction=()=>{
    navRef.current.classList.toggle('dislocation-nav')
  }
  return(
     <div>
     <header>
      <h1>blaqstix</h1>
      <nav ref={navRef}>
        <ul>
          <li>
       <Link to='/' onClick={navFunction}  className='each-nav'>Home</Link>
          </li>
           <li>
            <Link to='/about' onClick={navFunction}  className='each-nav'>About Me</Link>
          </li>
           <li>
            <Link to='/service' onClick={navFunction}  className='each-nav'>Service</Link>
          </li>
           <li>
            <Link to='/Port' onClick={navFunction} className='each-nav'>Portfolio</Link>
          </li>
           <li>
            <Link to='/contact' onClick={navFunction} className='each-nav'>Contact Me</Link>
          </li>
           <button className='nav-btn close' onClick={navFunction}>
            <FaTimes/>
           </button>
        </ul>
        </nav>
        <button className='nav-btn open' onClick={navFunction}>
            <FaBars/>
           </button>
           <button className='below-btn'>Hire Me</button>
      
     </header>
    </div>
  )
      
}


export default Nav;
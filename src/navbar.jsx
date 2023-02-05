import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './main.css';
import {FaFacebook,FaInstagram,FaTwitter,FaHome} from 'react-icons/fa'
function Nav(){
     const [show,setShow]=useState(false)
    return(
        <div className='all-nav'>
         
        <div className='name'>
            <h2>blaqstix</h2>
            
        </div>
       <div>
       <div className='appear-btn'>
       <button onClick={()=>setShow(true)}>show</button>
       </div>
       
    {show && <div  className='cover-href'>
         <div className='href'>
         <div className='appear-btn'>
         <button onClick={()=>setShow(false)}>hide</button>
        </div>
         <ul>
        <li>
                <div className='fit'>
                <div className='fa'>
<FaHome/>
                </div>
                        
        <div className='link'>
            <Link to='/' className='margin'>home</Link>
            </div>
                    </div>
                 </li>
                 <li>
                 <div className='fit'>
                 <div className='fa'>
                    <FaInstagram/>
                 </div>
                 <div className='link'>
                  <Link to='/about' className='margin'>about</Link>
                   </div>
                    </div>
                    </li>
                 <li>
                 <div className='fit'>
                 
                        
                    <div className='fa'>
<FaTwitter/>
                    </div>
                     <div className='link'>
                  <Link to='/port' className='margin'>portfolio</Link>
                   </div>
                   </div>
                     </li>
                 <li>
                  <div className='fit'>
                <div className='fa'>
                     <FaFacebook/>
                    </div>
                    <div className='link'>
                  <Link to='/contact' className='margin'>contact</Link>
                </div>
                 </div>
                    
                 </li>
            </ul>
            </div>
            
        </div>
      
        }
          </div> 
    </div>
        
    )
}


export default Nav;
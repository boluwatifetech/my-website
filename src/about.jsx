import React,{useState} from 'react';
import './main.css';

function About(){
    const [hide,setHide]=useState(false)
    return(
         <div className='about-container'>
        <div>
        <button onClick={()=>setHide(!hide)}></button>
       
            <h3>{hide && <div className='background'>
            <div>blaqstix</div>
                <h2>hide</h2>
                  <h2>hide</h2>
                    <h2>hide</h2>
                      <h2>hide</h2>
            </div>}</h3>
        </div>
        </div>
    )
}
export default About;
import React from 'react';
import './main.css';

function About(){
    
    return(
         <div className='about-container'>
        <div className='about-row'>
<div className='about-info'>
<h2>about me</h2>
<p> i am known for my creative and inventive in developing website and designing website </p>
</div>
<div className='skills-info'>
<h2>my skills</h2>
<div className='inner'>
  <h3>html</h3>
  <h3>90%</h3>
  </div>
  <div className='all-percent'>
    <div className='html'></div>
  </div>
<div className='inner'>
  <h3>css</h3>
  <h3>85%</h3>
  </div>
  <div className='all-percent'>
    <div className='css'></div>
  </div>
  <div className='inner'>
  <h3>github</h3>
  <h3>85%</h3>
  </div>
  <div className='all-percent'>
    <div className='github'></div>
  </div>
  <div className='inner'>
  <h3>javascript</h3>
  <h3>60%</h3>
  </div>
  <div className='all-percent'>
    <div className='javascript'></div>
  </div>
  <div className='inner'>
  <h3>react</h3>
  <h3>70%</h3>
  </div>
  <div className='all-percent'>
    <div className='react'></div>
  </div>
</div>
        </div>
        
        </div>
    )
}
export default About;
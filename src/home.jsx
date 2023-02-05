import React from 'react'
import './main.css'
import {Link} from 'react-router-dom'
function Home(){
    return(
        <div className="home-container">
    <div className='row-home'>
<div className='home-info'>
 <h1>hey, my name is <span>abiola boluwatife</span></h1>
 <h2>i am  <span className='animation'>frontend web developer</span> </h2>
<p> I am a well trained  frontend web developer with over 2 years experience, i create 
and beautify 
 a well structured
web designs,graphics design and many more.... </p>
<div class='cover-work'>
<div className='work-flex'>
     <input type='radio' className='animation' checked/>
<h4>qualified web designer</h4>

</div>
 <div className='work-flex'>
     <input type='radio'  className='animation' checked/>
<h4>qualified web developer</h4>
</div>
<div className='work-flex'>
     <input type='radio'  className='animation' checked/>
<h4> graphics designer</h4>
</div>
<div className='work-flex'>
     <input type='radio' className='animation'  checked/>
<h4> 3 years experience</h4>
</div>
</div>
<Link to='/about'>
    <button>know more</button>
</Link>



            </div>
            <div className='home-img'>
        
<img src='./images/portpics.jpg'/>
            </div>
        
</div>
</div>

    )
}
export default Home;
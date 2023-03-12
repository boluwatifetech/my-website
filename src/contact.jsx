import React from 'react'
import {FaFacebook,FaTwitter,FaHome,FaInstagram,FaLinkedin} from 'react-icons/fa'

function Contact(){
    
    return(
        <div>
        <div className='full-container-contact'>
<h1><span>contact</span> me</h1>
        </div>
        <div className='contact-container'>
        <div className='contact-flex'>

<div className='address-flex'>
<h1><span>hire</span> me:</h1>
<div className='phone'>
<div className='fa-contact'>
<FaFacebook/>
</div>

<h2>phone number</h2>
<a href='tel+07038513843'>07038513843</a>
    </div>
    <div className='phone'>
<FaTwitter className='fa-contact'/>
<h2>email</h2>
<a href='emailto:boluabiola2020@gmail.com'>boluabiola@gmail.com</a>
    </div>
    <div className='phone'>
<FaHome className='fa-contact'/>
<h2>address</h2>
<p>merciful villa,cele area,akungba okoko,ondo state</p>
</div>
<FaHome className='fa-contact'/>
<h2>my website</h2>
<a href='bolu-website.nettlify.app'><button className='website-btn'>visit me</button></a>

</div>


<div className='input-data'>
<h1> <span>your</span> details:</h1>
<form action='https://codeliber.com/form-action.php'>
<div className='phone'>
    <label htmlFor='your name'><span>enter</span> your name:</label><br></br>
<input type='text' required/>
</div>
<div className='phone'>
 <label htmlFor='your phone'><span>enter</span> your phone number:</label><br></br>
<input type='number'  required/>
</div>
<div className='phone'>
<label><span>job</span> offer</label><br></br>
    <select>
     <option value='personal'>for personal</option>
        <option value='company'>for company</option>
    </select>
</div>
<div className='phone'>
 <label  htmlFor='what you want'><span>enter</span> what you want:</label><br></br>
<input type='text'  required/>
</div>
 <label  htmlFor='your name'><span>enter</span> your email: </label><br></br>
<input type='text'  required/><br></br>
<button>submit</button>
</form>
</div>

<div className='textarea'>
<h1><span>send</span> a me message:</h1>
<h2><span>type</span> your message:</h2>
<textarea></textarea><br></br>
<button className='textarea-btn'>send</button>
</div>

        </div>
        
        </div> 
       
        </div>
    )
}
export default  Contact;
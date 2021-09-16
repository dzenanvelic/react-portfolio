import React, { useState } from 'react'
import './contact.scss'
function Contact() {
     const[message,setMessage]=useState(false)

    const handleSubmit=(e)=>{
       
e.preventDefault()
setMessage(true)
    }
    return (
        <div className="contact" id="contact">
          <div className="left">
              <img src="assets/shake.svg" alt="g" />
          </div>
          <div className="right">
              <h2>Contact</h2>
              <form onSubmit={handleSubmit} >
                 <input type="email"  placeholder="Email"/> 
                 <textarea name="contact" id="contact" cols="30" rows="10" placeholder="message"></textarea>
                 <button type="submit">Submit</button>
                 {message && <span>Thanks, I`ll reply ASAP :)</span>}
              </form>
          </div>
        </div>
    )
}

export default Contact

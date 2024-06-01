// ConnectComponent.js
import React, { useRef, useState } from 'react';
import Letstalk from './Letstalk.css';
import '@fortawesome/fontawesome-free/css/all.css';
import LOGO from './LOGO.jpg';
import emailjs from 'emailjs-com';

const Skill = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [contactNumber, setContactNumber] = useState('');
const [message, setMessage] = useState('');
const form =useRef();
const sendEmail=(e)=>{
     // Implement your submission logic here
     console.log('Submitted:', { username, email, contactNumber, message });
     // Clear the input values after submission
     setUsername('');
     setEmail('');
     setContactNumber('');
     setMessage('');
    e.preventDefault();
    emailjs.sendForm('service_6hy2627','template_vw6t2tv','#my_form','pKCRT8cm80Av4284d')
    .then((result)=>{
      console.log(result.text);
      console.log("message sent")
    },(error)=>{
    console.log(error.text);
    });

  };
  return (
    <div id="Let's_connect">
    <div className='main_div'>
    <div className="logo">Let's Talk</div>
    <div className="connect-component">
      <div className="input-section">
        <form id='my_form'>
        <input className='input_box'
          type="text" name="to_name"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br/>
        <input className='input_box'
          type="email" name='From_EmailId'
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input className='input_box'
          type="tel" name='Contact_Number'
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        /><br/>
        <textarea className='input_box'
          placeholder="Message" name='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        /><br/>
        <button className='button_1' onClick={sendEmail}>Submit</button></form>
      </div></div><br/>
    </div>
          <div className="footer">  
          <div className="logo1"><img src={LOGO} alt='/'></img> <p> Email: Kashishkurra@gmail.com</p></div>
          <div className="social-media-icons">
              <p>Connect with me</p>  
            {/* Add your social media icons or links here */}
            {/* Example: */}
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>  
            {/* WhatsApp */}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>  
            {/* Snapchat */}
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
             <i className="fab fa-snapchat"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        </div>
  );
};
export default Skill;




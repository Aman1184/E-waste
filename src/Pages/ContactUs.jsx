import React from 'react'
import './CSS/Contactus.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_3o9c2ke', 'template_3vbp4in', form.current, {
        publicKey: 'Hko7-qrIe7nK36fLd',
      })
      .then((result)=> {
          console.log('SUCCESS!');
        },(error) => {
          console.log('FAILED...', error.text);
        }
      );
      e.target.reset()
  };
  return (
    <section>
       <div className="container"></div>
       <h2 className="--text-center">Contact Us</h2>
       <form ref={form} onSubmit={sendEmail} className="--form-control--card">
        <input type="text" placeholder='Full Name' name='User_name' required/>
        <input type="email" placeholder='Email' name='User_email' required/>
        <input type="text" placeholder='Subject' name='subject' required/>
        <textarea type="message" placeholder='write something!' name='message' cols="30" rows="10"/>
        <button className="--btn --btn-primary">Send Message</button>
       </form>
    </section>
  )
}

export default ContactUs

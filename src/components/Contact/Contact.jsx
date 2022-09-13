import React from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { themeContext } from '../../context';
import { useContext } from 'react';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aniket08', 'template_svz6v7f', form.current, 'Q366mG6zpCorsJsWG')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='contact-form' id='Contact'>
        <div className='w-left'>
            <div className='awesome'>
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact Us</span>
                <span style={{color: darkMode? 'white': ''}}>You can make a contact with us by clicking following links or Fill the form which is present at right side.</span>
                <div className='w-social'>
                    <i class="fa-solid fa-envelope"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div className='blur s-blur' style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" class="user" placeholder="Name" />
                <input type="email" name="user_email" class="user" placeholder="E-mail" />
                <textarea name="message" className='user' placeholder="Message" />
                <input type="submit" value="Submit" class="button" />
                <span>{done && "Thanks for Contacting Me !"}</span>
                <div className='blur c-blur' style={{background: 'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
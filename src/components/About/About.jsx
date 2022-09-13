import React from 'react'
import './About.css';
import teacher from '../../img/class.png';
import { themeContext } from '../../context';
import { useContext } from 'react';

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='about-wrapper' id='About'>
        <div className='a-left'>
            <img src={teacher} alt='class-img' />
        </div>

        <div className='a-right'>
            <span style={{color: darkMode? 'white': ''}}>Know</span>
            <span>About Us</span>
            <span style={{color: darkMode? 'white': ''}}>Front end or the client side application as it is technically called, is the face of your business. Having a clean and attractive front end that appeals to customers is a crucial business strategy. As a front end web developer, you will create interactive and functional websites that gives users the ultimate user experience. DevLog's Frontend  Development course will teach you how to create front end web applications from scratch. You will learn the core functions and uses of HTML, CSS, JavaScript and jQuery to create web pages that are visually appealing and stimulating. Web development is a continually evolving space with rapidly changing technology. Enroll now and get the course materials for free at our academy.</span>
        </div>
    </div>
  )
}

export default About
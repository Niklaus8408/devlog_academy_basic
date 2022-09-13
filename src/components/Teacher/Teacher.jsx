import React from 'react'
import './Teacher.css';
import faculty from '../../img/faculty.png';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Teacher = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='teacher-container' id='Teacher'>
        <div className='t-left'>
            <span style={{color: darkMode? 'white': ''}}>Director</span>
            <span>Mr. Aniket Tayade.</span>
            <span style={{color: darkMode? 'white': ''}}>I'm a MERN Stack Web Developer building the Full-Stack of Websites and Web Applications that leads to the success of the overall product. Check out some of my work on Github. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming</span>
            <span style={{color: darkMode? 'white': ''}}>I can plan, design, build, launch, and maintain a website myself. I have worked on 15+ Full Stack as well as Front-End Websites and Web Applications, roughly half of which I maintain solo.</span>
        </div>

        <div className='t-right'>
            <div className='blur'></div>
            <img src={faculty} alt='teacher' />
            <div className='blur'></div>
        </div>
    </div>
  )
}

export default Teacher
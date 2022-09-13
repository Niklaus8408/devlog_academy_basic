import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Hero from '../../img/Hero.png';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { Link } from 'react-scroll';

const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='intro' id='Home'>
            <div className='i-left'>
                <div className='i-name'>
                    <span style={{color: darkMode? 'white': ''}}>DevLog();</span>
                    <span>Academy of India</span>
                    <span style={{color: darkMode? 'white': ''}}>Front-End Developer with high level of experience in Web Development, producting the Quality work in Teaching. Our vision is Web for Everyone.</span>
                </div>

                <Link spy={true} to='Course' smooth={true} >
                    <button className='button i-button'>Explore Courses</button>
                </Link>

                <div className='i-icons'>
                    <img src={Github} />
                    <img src={LinkedIn} />
                    <img src={Instagram} />
                </div>

                <div className='blur' style={{
                    background: '#c1f5ff',
                    top: '17rem',
                    left: '0rem',
                    height: '11rem'
                }}></div>
            </div>

            <div className='i-right'>
                <img src={Hero} />
                <div className='blur'></div>
            </div>
        </div>
    )
}

export default Intro
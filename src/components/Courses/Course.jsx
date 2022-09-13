import React from 'react';
import './Course.css';
import html from '../../img/html.png';
import css from '../../img/css.png';
import javascript from '../../img/javascript.png';
import jquery from '../../img/jquery.gif';
import rpic from '../../img/react.png';
import material from '../../img/material.png';
import { themeContext } from '../../context';
import { useContext } from 'react';


export const Course = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='course-container' id='Course'>
            <div className='course-title'>
                <span style={{color: darkMode? 'white': ''}}>Our</span>
                <span>Courses</span>
            </div>
            <div className='course-wrapper'>
                <div className='c-card'>
                    <div className='c-card-header'>
                        <img src={html} alt='html' />
                    </div>
                    <div className='c-card-body'>
                        <span>HTML5</span>
                    </div>
                    <div className='c-card-footer'>
                        <button className='btn'>Enroll Now</button>
                    </div>
                </div>

                <div className='c-card'>
                    <div className='c-card-header'>
                        <img src={css} alt='css' />
                    </div>
                    <div className='c-card-body'>
                        <span>CSS3</span>
                    </div>
                    <div className='c-card-footer'>
                        <button className='btn'>Enroll Now</button>
                    </div>
                </div>

                <div className='c-card'>
                    <div className='c-card-header'>
                        <img src={javascript} alt='js' />
                    </div>
                    <div className='c-card-body'>
                        <span>JavaScript</span>
                    </div>
                    <div className='c-card-footer'>
                        <button className='btn'>Enroll Now</button>
                    </div>
                </div>

                <div className='c-card'>
                    <div className='c-card-header'>
                        <img src={jquery} alt='jq' />
                    </div>
                    <div className='c-card-body'>
                        <span>jQuery</span>
                    </div>
                    <div className='c-card-footer'>
                        <button className='btn'>Enroll Now</button>
                    </div>
                </div>

                <div className='c-card'>
                    <div className='c-card-header'>
                        <img src={rpic} alt='rpic' />
                    </div>
                    <div className='c-card-body'>
                        <span>React.js</span>
                    </div>
                    <div className='c-card-footer'>
                    <button className='btn'>Enroll Now</button>
                    </div>
                </div>

                <div className='c-card'>
                    <div className='c-card-header'>
                        <img src={material} alt='material' />
                    </div>
                    <div className='c-card-body'>
                        <span>Material UI</span>
                    </div>
                    <div className='c-card-footer'>
                        <button className='btn'>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

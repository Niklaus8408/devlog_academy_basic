import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className='n-wrapper' id='Navbar'>
            <div className='n-left'>
                <div className='n-name'>DevLog()</div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>

                        <Link spy={true} to='About' smooth={true} >
                            <li>About</li>
                        </Link>

                        <Link spy={true} to='Course' smooth={true} >
                            <li>Courses</li>
                        </Link>

                        <Link spy={true} to='Teacher' smooth={true} >
                            <li>Teachers</li>
                        </Link>

                        <Link spy={true} to='Review' smooth={true} >
                            <li>Reviews</li>
                        </Link>

                        <Link spy={true} to='Contact' smooth={true} >
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
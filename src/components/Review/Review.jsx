import React from 'react'
import './Review.css';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Review = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='review' id='Review'>
        <div className='review-title'>
            <span style={{color: darkMode? 'white': ''}}>Our Student's</span>
            <span>Reviews</span>
        </div>
        <div className='review-wrapper'>
            <div className='r-card'>
                <span>Miss. Sakshi Zope.</span>
                <span style={{color: darkMode? 'white': ''}}>"Wanna say Thanks to DevLog() Acadamy for giving me best knowledge and make me capable to study this subjest easily. I appreciated that I always got information. Thank you so much Aniket sir for sharing your unbetable knowledge and experience with us. "</span>
            </div>


            <div className='r-card'>
                <span>Mr. Rahul Baghere.</span>
                <span style={{color: darkMode? 'white': ''}}>DevLog() Academy is perfect platform that helps students grow there programming skills. DevLog() Academy is perfect platform that helps students grow there programming skills. Vibrant, Passionate, Supportive, Fun, Laughter, Outcomes are key qualities here. Instructor here is helpfull, knowledgeable,hard working and teaching here is practicall oriented in both offline and online mode along with one to one student teacher interaction which is all anyone can wish . The best thing here is personal guidance related to placement & career guidance with respect to future scope you can get here . I appreciate learning in Devlog() Academy with Aniket Sir."</span>
            </div>
        </div>
    </div>
  )
}

export default Review
import React from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';
import '../../App.css';
import video1 from '../../assets/video-1.mp4';
// import video2 from '../../assets/video-2.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video1} autoPlay loop muted />
            {/* <video src={video2} autoPlay loop muted /> */}
            <h1>The Traveler's Diaries</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
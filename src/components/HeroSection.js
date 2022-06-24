import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={require('../videos/mowingvideo.mp4')}  autoPlay loop muted />
      <h1>BENNET BROS</h1>
      <p>Mowing Company</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SERVICES
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CONTACT US <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
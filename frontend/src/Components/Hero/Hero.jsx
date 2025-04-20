import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h1 className="hero-tagline-minimal">Minimal</h1>
        <h1 className="hero-tagline-majestic">Majestic</h1>
        <div className='hero-left-p'>
          <p>South Asian</p>
          <p>at its core.</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-image-right" src={hero_image} alt="hero section" />
      </div>
    </div>
  );
};

export default Hero;

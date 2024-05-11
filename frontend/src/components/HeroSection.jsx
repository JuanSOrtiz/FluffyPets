import React from 'react';
import backgroundImage from '../assets/images/amor.jpg';

const HeroSection = () => {
  return (
    <div className="hero-wrap h-screen relative overflow-hidden bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(${backgroundImage})`}} data-stellar-background-ratio="0.5">
      <div className="overlay absolute top-0 left-0 right-0 bottom-0 opacity-10 bg-black"></div>
      <div className="container">
        <div className="row no-gutters slider-text h-full justify-content-center items-center" data-scrollax-parent="true">
          <div className="col-md-11 text-center">
            <h1 className="mb-4 text-white text-5xl lg:text-4xl md:text-3xl font-semibold leading-tight">Highest Quality Care For Pets You'll Love</h1>
            <p><a href="#" className="btn btn-primary mr-4 py-3 px-4">Learn more <span className="ion-ios-arrow-forward"></span></a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

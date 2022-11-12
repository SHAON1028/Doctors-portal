import React from 'react';
import bgImg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import clock from '../../../assets/icons/clock.svg'

const Banner = () => {
    return (
      <div>
          <div className="hero"style={{backgroundImage: `url(${bgImg})`}}>
        <div className="hero-content flex-col lg:flex-row-reverse py-[207px]">
          <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white ">Get Started</button>
          </div>
        </div>
       
      </div>
      
      </div>
    );
};

export default Banner;
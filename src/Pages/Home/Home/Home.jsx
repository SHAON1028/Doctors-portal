import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import SecondBanner from '../SeondBanner/SecondBanner';
import Services from '../Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <SecondBanner></SecondBanner>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;